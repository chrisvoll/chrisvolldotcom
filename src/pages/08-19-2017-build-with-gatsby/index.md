---
path: '/yo-world'
date: '2017-08-19T20.51.00Z'
title: 'Building with Gatsby.js'
---

I've always been fastinated by static sites — there's something alluring about building a site and being able to deploy it anywhere, without worrying about web middleware, scaling infrastructure, or [anything else]. It's been a while since I've refreshed my site — four years since I set it up on DigitalOcean — so there's no better time than now!

In this post I'm going to document building my new site using [Gatsby](https://www.gatsbyjs.org/), a JavaScript-based newcomer to the world of static sites. This is my first time using it, so I'm writing this post and learning as I go. Get. Excited. 🎉

## Getting Started

My first impression of Gatsby is encouraging — their site is gorgeously-designed and their documentation gets right to the point of setting up a new site. I haven't needed to travel far to discover that it has everything I need right out of the box, complete with a handy CLI.

```
$ npm install -g gatsby
$ gatsby new chrisvolldotcom
$ cd chrisvolldotcom
$ gatsby develop
```

Running the setup script is painless and presents me with a nicely-structured boilerplate project. Diving in, I'm already noticing a couple things:

1. There's almost no configuration. The project starts out with a small `gatsby-config.js` file with the project title an a minimal list of plugins.

2. Everything is templated out using React. Neat!

3. Gatsby has its own router. I don't immediately see any centralized routing logic, so my assumption is that adding a file to the `/src/pages` directory magically adds a route for it.

4. The console output mentions GraphQL. Interesting! I'm dying to see how this is used in the context of a static website.

Loading up the built page, I'm presented with a rather spartan page — the perfect blank canvas to build on:

[screen-1]

Already I can tell that the developer experience is phenomenal. Gatsby comes with hot reloading right out of the box, so I can just dive right in.

## Setting up a blog

Let's find a way to render this blog post I'm writing. To the docs!

The docs are actually pretty light on this, so I'm my assumption is that implementing a blog has a very generalized solution, like building on support for loading markdown files. By good fortune, the Gatsby authors anticipated this, the first post on their blog describes [building a blog](https://www.gatsbyjs.org/blog/2017-07-19-creating-a-blog-with-gatsby/). How meta. 🤘

This post confirms my suspicion that this functionality isn't built right in. I won't repeat everything from that tutorial here, but there are a couple interesting takeaways:

- Gatsby has a plugin system sort of similar to webpack. If you want to use markdown files, for instance, you need to add the ability to load and parse them.

- Gatsby comes with built-in support for server-side rendering of React components. Get that SEO juice a-flowin'

- It uses Redux internally, and [exposes its action creators](https://www.gatsbyjs.org/docs/bound-action-creators/)

It works!

[screen-2]