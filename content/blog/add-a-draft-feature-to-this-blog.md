---
path: add_drafts
date: 2020-01-17T16:31:52.396Z
title: Add a draft feature to this blog
description: How to have published and unpublished blog posts
---
This site started with ["gatsby-personal-starter-blog"](https://github.com/thomaswang/gatsby-personal-starter-blog) by Thomas Wang. It takes the Gatsby Starter Blog and adds Netlify CMS.   I thought having Netlify CMS pre-wired would save me some time.

One thing it did not have is post drafts.  Lets use [LekoArts instructions to create a post draft feature.](https://www.lekoarts.de/en/blog/adding-a-draft-feature-to-your-gatsby-site) . It should get us most of the way there.  I think we will need to change the query a little since we are using Netlify CMS.

1. Let's make a new Git branch called add-post-drafts.
2. Open gatsby-node.js and add the code.

```JS
exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes, createFieldExtension } = actions

  createFieldExtension({
    name: `defaultFalse`,
    extend() {
      return {
        resolve(source, args, context, info) {
          if (source[info.fieldName] == null) {
            return false
          }
          return source[info.fieldName]
        },
      }
    },
  })

  createTypes(`
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      draft: Boolean @defaultFalse
    }
  `)
}
```
