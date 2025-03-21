const fs = require("fs");
const path = require("path");

// Directory containing blog posts
const BLOGS_DIR = path.join(__dirname, "../../blogs");
const OUTPUT_FILE = path.join(BLOGS_DIR, "index.json");

// Get all markdown files
function generateBlogIndex() {
  console.log("Generating blog index...");

  // Read all markdown files in the blogs directory
  const blogFiles = fs
    .readdirSync(BLOGS_DIR)
    .filter((file) => file.endsWith(".md") && file !== "README.md");

  const blogPosts = [];

  // Process each markdown file
  blogFiles.forEach((file) => {
    const filePath = path.join(BLOGS_DIR, file);
    const fileContent = fs.readFileSync(filePath, "utf8");

    // Extract frontmatter
    const frontmatterMatch = fileContent.match(/^---\s*([\s\S]*?)\s*---/);
    if (!frontmatterMatch) return;

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
      if (key === "keywords" && value.startsWith("[") && value.endsWith("]")) {
        try {
          value = JSON.parse(value);
        } catch (e) {
          value = value
            .substring(1, value.length - 1)
            .split(",")
            .map((k) => k.trim().replace(/"/g, "").replace(/'/g, ""));
        }
      }

      frontmatter[key] = value;
    });

    // Skip if missing required fields
    if (!frontmatter.title || !frontmatter.date) return;

    const filename = file.replace(".md", "");

    // Add to blog posts array
    blogPosts.push({
      title: frontmatter.title,
      subtitle: frontmatter.subtitle || "",
      date: frontmatter.date,
      keywords: Array.isArray(frontmatter.keywords) ? frontmatter.keywords : [],
      filename: filename,
      path: `blogs/${file}`,
    });
  });

  // Sort by date (newest first)
  blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Write the index file
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(blogPosts, null, 2));

  console.log(`Generated index.json with ${blogPosts.length} blog posts`);
}

generateBlogIndex();
