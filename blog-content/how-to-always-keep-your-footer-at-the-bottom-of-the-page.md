---
title: "How to Always Keep Your Footer at the Bottom of the Page"
slug: "how-to-always-keep-your-footer-at-the-bottom-of-the-page"
excerpt: "We've all been there. You're crafting what you think is a beautiful webpage, with a header at the top, some content in the middle, and a footer completing the design at the bottom. Everything looks perfect... until you preview it on a larger screen.\n..."
tags: "CSS, sticky-footer, Frontend Development, flexbox, Flexbox properties, webdesign, layout"
tagSlugs: "css, sticky-footer, frontend-development, flexbox, flexbox-properties, webdesign, layout"
date: "2026-02-12T18:15:57.771Z"
publishedAt: "2026-01-07T11:49:53.691Z"
updatedAt: "2026-02-12T18:15:57.771Z"
coverImage: "https://cdn.hashnode.com/res/hashnode/image/upload/v1770917757345/87b7d860-0857-4a15-a67b-3b35f87aa5e9.png"
url: "https://manishmk.hashnode.dev/how-to-always-keep-your-footer-at-the-bottom-of-the-page"
author: "Manish Kumar"
authorUsername: "ManishMK"
authorProfilePicture: "https://cdn.hashnode.com/res/hashnode/image/upload/v1754728990444/f59c3826-4a73-4075-9e55-7585e2283f0f.jpeg"
readTimeInMinutes: 3
reactionCount: 0
responseCount: 0
views: 7
seoTitle: "How to Keep Footer at Bottom of Page with CSS Flexbox | Simple Guide"
seoDescription: "Learn how to keep your footer at the bottom of the page using CSS Flexbox. A simple, no-hack solution that works on all screen sizes. Includes code examples"
hashnodeId: "695e48617a7a2591796cee1d"
---

We've all been there. You're crafting what you think is a beautiful webpage, with a header at the top, some content in the middle, and a footer completing the design at the bottom. Everything looks perfect... until you preview it on a larger screen.

Suddenly, your footer isn't sitting gracefully at the bottom where it belongs. Instead, it's awkwardly floating somewhere in the middle of the page, leaving a conspicuous gap of white space below it. It's the web design equivalent of wearing socks with sandals, technically functional but visually uncomfortable.

## The Problem

This issue typically occurs when your page content is too short to fill the entire viewport height. Without enough content to push the footer down naturally, it simply sits wherever the content ends, creating that unfortunate "floating footer" effect that screams amateur design.

For pages with minimal content, think login screens, error pages, or landing pages with just a few elements, this becomes especially noticeable on larger monitors or desktop screens.

## The Solution: Flexbox to the Rescue

Here's the good news: you don't need complex JavaScript, absolute positioning tricks, or CSS hacks to fix this. Modern CSS Flexbox gives us an elegant solution that works beautifully across all screen sizes.

Let me walk you through how I solved this using Tailwind CSS classes (though the same principle applies to vanilla CSS):

```html
<div class="flex flex-col min-h-screen">
  <header>
    <!-- Your header content -->
  </header>
  
  <main class="flex-grow">
    <!-- Your main content -->
  </main>
  
  <footer>
    <!-- Your footer content -->
  </footer>
</div>
```

Let's break down what's happening here:

**The parent container** gets three key classes: `flex`, `flex-col`, and `min-h-screen`. Together, these create a vertical flex container that spans the full height of the viewport. Think of it as setting up the playing field.

**The main content area** receives the `flex-grow` class, which is where the main stuff happens. This class essentially tells the browser: "Hey, take up all the available space between the header and footer." It's like a flexible accordion that expands or contracts based on how much space is available.

**The footer** doesn't need any special treatment. It simply sits at the end of the flex container, naturally pushed to the bottom by the growing main section above it.

## Why This Works So Well

The beauty of this approach lies in its flexibility. You're giving the browser clear, simple instructions:

"This page uses a vertical flex layout. If the content is short, stretch the middle section to fill the space. If the content is long enough to require scrolling, let it scroll naturally. But no matter what, keep that footer anchored at the bottom."

No absolute positioning that breaks when content overflows. No fixed heights that don't adapt to different screen sizes. No JavaScript calculating dimensions on the fly. Just clean, responsive CSS that works exactly as you'd expect.

## The Result

With this simple pattern, your footer stays exactly where users expect to find it, at the bottom of the page, whether you have three lines of content or three thousand. Your design looks polished and intentional, not like an afterthought.

Sometimes the best solutions are the simplest ones. Flexbox has been around for years now, and it continues to be one of the most powerful tools in a developer's toolkit for solving layout challenges like this one. Give it a try on your next project, your footer (and your users) will thank you.
