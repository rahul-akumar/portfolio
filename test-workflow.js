// Test script to verify the workflow locally
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

console.log("Starting local workflow test...");

try {
  console.log("Running the generate-blog-index.js script...");
  // Execute the same script that GitHub Actions would run
  execSync("node .github/scripts/generate-blog-index.js", { stdio: "inherit" });

  // Check if index.json exists and has content
  const indexPath = path.join(__dirname, "blogs", "index.json");
  if (fs.existsSync(indexPath)) {
    const indexContent = fs.readFileSync(indexPath, "utf8");
    const posts = JSON.parse(indexContent);

    console.log(`✅ Success! Found ${posts.length} posts in index.json`);

    // Check if our test post is included
    const testPost = posts.find(
      (post) => post.title === "Testing GitHub Actions Permissions"
    );
    if (testPost) {
      console.log("✅ Test post was successfully added to index.json");
      console.log("Test metadata:", testPost);
    } else {
      console.log("❌ Test post not found in index.json");
    }
  } else {
    console.log("❌ index.json file not found");
  }
} catch (error) {
  console.error("❌ Error during test:", error.message);
}

console.log(
  "\nTest completed. If successful, you can commit and push to GitHub to verify the full workflow."
);
console.log(
  "The GitHub Actions workflow should now have write permissions to push changes to index.json."
);
