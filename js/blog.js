// Blog post loader
document.addEventListener("DOMContentLoaded", async function () {
  const blogContainer = document.querySelector(".blog-container");
  const postsContainer = document.getElementById("blog-posts-container");

  try {
    // Fetch the list of markdown files from the blogs directory
    const response = await fetch("blogs/");
    if (!response.ok) {
      throw new Error("Failed to load blog directory");
    }

    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    // Extract markdown files from directory listing
    const mdFiles = Array.from(doc.querySelectorAll("a"))
      .filter((a) => a.href.endsWith(".md"))
      .map((a) => a.href.split("/").pop());

    // Clear the sample post
    postsContainer.innerHTML = "";

    if (mdFiles.length === 0) {
      postsContainer.innerHTML = "<p class='no-posts'>No blog posts found.</p>";
      return;
    }

    // Show loading indicator
    postsContainer.innerHTML =
      "<div class='loading-posts'>Loading blog posts...</div>";

    // Process each markdown file
    const blogPosts = [];

    for (const mdFile of mdFiles) {
      if (!mdFile.endsWith(".md") || mdFile === "README.md") continue;

      const mdResponse = await fetch(`blogs/${mdFile}`);
      if (!mdResponse.ok) continue;

      const mdContent = await mdResponse.text();

      // Extract frontmatter
      const frontmatterMatch = mdContent.match(/^---\s*([\s\S]*?)\s*---/);
      if (!frontmatterMatch) continue;

      const frontmatterText = frontmatterMatch[1];
      const frontmatter = {};

      // Parse frontmatter
      frontmatterText.split("\n").forEach((line) => {
        if (!line.trim()) return;

        const colonIndex = line.indexOf(":");
        if (colonIndex === -1) return;

        const key = line.substring(0, colonIndex).trim();
        let value = line.substring(colonIndex + 1).trim();

        // Remove quotes if present
        if (value.startsWith('"') && value.endsWith('"')) {
          value = value.substring(1, value.length - 1);
        }

        // Handle arrays (keywords)
        if (
          key === "keywords" &&
          value.startsWith("[") &&
          value.endsWith("]")
        ) {
          try {
            // Try to parse as JSON
            value = JSON.parse(value);
          } catch (e) {
            // Fallback to simple parsing
            value = value
              .substring(1, value.length - 1)
              .split(",")
              .map((k) => k.trim().replace(/"/g, "").replace(/'/g, ""));
          }
        }

        frontmatter[key] = value;
      });

      // Skip if missing required fields
      if (!frontmatter.title || !frontmatter.date) continue;

      // Extract content
      const content = mdContent.replace(/^---\s*[\s\S]*?\s*---/, "").trim();

      const filename = mdFile.replace(".md", "");

      blogPosts.push({
        title: frontmatter.title,
        subtitle: frontmatter.subtitle || "",
        date: frontmatter.date,
        keywords: Array.isArray(frontmatter.keywords)
          ? frontmatter.keywords
          : [],
        filename: filename,
        content: content,
      });
    }

    // Clear loading indicator
    postsContainer.innerHTML = "";

    // Sort blog posts by date (newest first)
    blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Render blog posts
    for (const post of blogPosts) {
      const postElement = createBlogPostElement(post);
      postsContainer.appendChild(postElement);
    }
  } catch (error) {
    console.error("Error loading blog posts:", error);
    postsContainer.innerHTML = `<p class="error">Failed to load blog posts: ${error.message}</p>`;
  }
});

function createBlogPostElement(post) {
  const article = document.createElement("div");
  article.className = "blog-post";

  // Create the keyword string if keywords exist
  const keywordsHtml =
    post.keywords && post.keywords.length
      ? `<div class="blog-keywords">Keywords: ${post.keywords.join(", ")}</div>`
      : "";

  article.innerHTML = `
    <a href="blog-post.html?post=${encodeURIComponent(
      post.filename
    )}" class="blog-link">
      <article>
        <div class="blog-header">
          <h2 class="blog-title">${post.title}</h2>
          <div class="blog-date">${formatDate(post.date)}</div>
        </div>
        ${post.subtitle ? `<p class="blog-subtitle">${post.subtitle}</p>` : ""}
        <div class="blog-footer">
          ${keywordsHtml}
        </div>
      </article>
    </a>
  `;

  return article;
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { year: "numeric", month: "short", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
}
