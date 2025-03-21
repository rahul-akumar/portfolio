// Blog post loader
document.addEventListener("DOMContentLoaded", async function () {
  const blogContainer = document.querySelector(".blog-container");
  const postsContainer = document.getElementById("blog-posts-container");

  try {
    // Show loading indicator
    postsContainer.innerHTML =
      "<div class='loading-posts'>Loading blog posts...</div>";

    // Get base URL for GitHub Pages compatibility
    const baseUrl = window.location.pathname.includes("/Portfolio/")
      ? "/Portfolio/"
      : "/";

    // Fetch the blog index.json instead of directory listing
    const response = await fetch(`${baseUrl}blogs/index.json`);
    if (!response.ok) {
      throw new Error("Failed to load blog index");
    }

    // Parse the JSON
    const blogPosts = await response.json();

    // Clear loading indicator
    postsContainer.innerHTML = "";

    if (blogPosts.length === 0) {
      postsContainer.innerHTML = "<p class='no-posts'>No blog posts found.</p>";
      return;
    }

    // Render blog posts (already sorted by date in the index)
    for (const post of blogPosts) {
      const postElement = createBlogPostElement(post);
      postsContainer.appendChild(postElement);
    }
  } catch (error) {
    console.error("Error loading blog posts:", error);
    postsContainer.innerHTML = `<p class="error">Failed to load blog posts: ${error.message}</p>`;

    // Show instructions for fixing the issue
    postsContainer.innerHTML += `
      <div class="error-help">
        <p>This error likely occurs because you need to generate the index.json file.</p>
        <p>If you're using GitHub Pages:</p>
        <ol>
          <li>Create a simple blogs/index.json file with your blog posts</li>
          <li>The GitHub Action will update it when you add new posts</li>
        </ol>
      </div>
    `;
  }
});

function createBlogPostElement(post) {
  const article = document.createElement("div");
  article.className = "blog-post";

  article.innerHTML = `
    <a href="${
      baseUrl ? baseUrl.replace(/\/$/, "") : ""
    }blog-post.html?post=${encodeURIComponent(
    post.filename
  )}&path=${encodeURIComponent(post.path)}" class="blog-link">
      <article>
        <div class="blog-header">
          <h2 class="blog-title">${post.title}</h2>
          <div class="blog-date">${formatDate(post.date)}</div>
        </div>
        ${post.subtitle ? `<p class="blog-subtitle">${post.subtitle}</p>` : ""}
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
