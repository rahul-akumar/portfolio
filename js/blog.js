// Blog post loader
document.addEventListener("DOMContentLoaded", async function () {
  const postsContainer = document.getElementById("blog-posts-container");

  try {
    // Show loading indicator
    postsContainer.innerHTML =
      "<div class='loading-posts'>Loading blog posts...</div>";

    // Determine the base URL based on deployment environment
    const baseUrl = getBaseUrl();

    // Fetch blog index
    const response = await fetch(`${baseUrl}blogs/index.json`);

    if (!response.ok) {
      throw new Error(
        `Failed to load blog index (${response.status}: ${response.statusText})`
      );
    }

    // Parse JSON
    const blogPosts = await response.json();

    // Clear loading message
    postsContainer.innerHTML = "";

    if (blogPosts.length === 0) {
      postsContainer.innerHTML = "<p class='no-posts'>No blog posts found.</p>";
      return;
    }

    // Render blog posts (already sorted by date in the index)
    blogPosts.forEach((post) => {
      const postElement = createBlogPostElement(post, baseUrl);
      postsContainer.appendChild(postElement);
    });
  } catch (error) {
    console.error("Error loading blog posts:", error);
    postsContainer.innerHTML = `
      <p class="error">Failed to load blog posts: ${error.message}</p>
      <div class="error-help">
        <p>If you're using GitHub Pages, make sure the index.json file exists in the blogs directory.</p>
      </div>
    `;
  }
});

/**
 * Create HTML element for a blog post
 */
function createBlogPostElement(post, baseUrl) {
  const article = document.createElement("div");
  article.className = "blog-post";

  // Create link with the post path parameter
  const postUrl = `${baseUrl}blog-post.html?post=${encodeURIComponent(
    post.filename
  )}&path=${encodeURIComponent(post.path)}`;

  article.innerHTML = `
    <a href="${postUrl}" class="blog-link">
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

/**
 * Format date in a readable format
 */
function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { year: "numeric", month: "short", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

/**
 * Get the base URL based on the deployment environment
 */
function getBaseUrl() {
  // Check if we're on GitHub Pages with a repository name in the path
  const pathSegments = window.location.pathname.split("/");
  const possibleRepoName = pathSegments[1];

  // If the second segment exists and isn't a file (doesn't contain a dot),
  // we're probably on GitHub Pages with a repository name
  if (possibleRepoName && !possibleRepoName.includes(".")) {
    return `/${possibleRepoName}/`;
  }

  // Fallback to root for local development or custom domains
  return "/";
}
