---
title: "Testing GitHub Actions Permissions"
subtitle: "Verifying our workflow fix"
date: "2023-06-15"
keywords: ["test", "github-actions", "permissions"]
---

# Testing GitHub Actions Permissions

This is a test blog post to verify that our GitHub Actions workflow has the correct permissions to update the `index.json` file.

## What Changed

We added the following to our workflow file:

```yaml
permissions:
  contents: write
```

This grants the GitHub Actions workflow the necessary permissions to:

1. Commit changes to the repository
2. Push those changes back to the main branch

When this post is committed to the repository, it should trigger the workflow, which will then:

- Parse this Markdown file
- Extract the metadata from the frontmatter
- Add it to the `index.json` file
- Commit and push the updated `index.json`

If all goes well, this post will appear in the blog listing without any manual updates to `index.json`.
