# Blog System

This directory contains blog posts in Markdown format that will be automatically displayed on the blog page.

## File Naming Convention

Please use the following naming convention for your blog post files:

```
YYYY-MM-DD-title-of-post.md
```

For example:

- `2023-10-15-introduction-to-ux-design.md`
- `2023-11-20-my-design-process.md`

This format makes it easy to sort posts chronologically and helps maintain organization.

## Required Markdown Format

Each blog post should begin with a frontmatter section containing metadata:

```md
---
title: "Your Blog Post Title"
subtitle: "A brief summary of your post"
date: "YYYY-MM-DD"
keywords: ["keyword1", "keyword2", "keyword3"]
---

Your content here...
```

- **title**: (Required) The title of your blog post
- **date**: (Required) Publication date in YYYY-MM-DD format
- **subtitle**: (Optional) A brief summary or excerpt
- **keywords**: (Optional) Array of relevant keywords/tags

## How It Works

The blog system now works completely client-side:

1. When you visit the blog page, JavaScript fetches and processes all .md files in this directory
2. The posts are sorted by date (newest first) and displayed on the page
3. When a visitor clicks on a blog post, the individual post is fetched and rendered on the fly

## No Processing Step Required

With this approach, you don't need to run any additional scripts or commands. Simply:

1. Add your Markdown (.md) files to this directory
2. Make sure they have the proper frontmatter
3. That's it! Your blog posts will automatically appear on the site

## Example

See `2023-10-15-sample-blog-post.md` for a complete example of how to format your blog posts.
