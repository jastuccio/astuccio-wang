---
path: accessible-emojis-gatsby
date: 2020-01-28T18:38:25.840Z
title: Accessible Emojis in Gatsby
description: Accessible emojis in Gatsby
---

Emojis have become part of our everyday language. They can present problems to people using screen readers. Recently I got an error on build.

> Emojis should be wrapped in `<span>`, have `role="img"`, and have an accessible description with aria-label or aria-labelledby  jsx-a11y/accessible-emoji

A little Search-foo and it's plugins to the rescue!

* [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/accessible-emoji.md)
  This causes ESLint to throw errors if your emojis aren't accessible.  It was already installed in the Gatsby starter.

* [gatsby-a11y-remark-emoji](https://florian.ec/blog/gatsby-a11y-remark-emoji/)
  * adds the `<span>`, `role`, and `aria` to your emojis

1. Install `yarn add gatsby-a11y-remark-emoji` 
2. Open `gatsby-config.js`

My gatsby-config.js is a little different from the example on the plugin page because the theme is using an MDX plugin


```js

// ↑ other gatsby-config.js code ↑

{
    resolve: `gatsby-plugin-mdx`,
    options: {
      extensions: [".mdx", ".md"],
      gatsbyRemarkPlugins: [

        // ... several other plugins

        {
          resolve: `gatsby-remark-a11y-emoji`,
        },
      ],
    },
  },

  // ↓ other gatsby-config.js code ↓

```

Now my emojis are accessible automatically! Thank you [Florian Eckerstorfer](https://florian.ec/about/) for making the Gatsby Plugin.

![](https://res.cloudinary.com/jastuccio/image/upload/v1580240870/blog/accessible-emojis.png)