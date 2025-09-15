---
title: Upgrading Assignment 1 to be Responsive
due: 09/18/2025
---

## Upgrade your Assignment 1 site to be responsive.

We're going to 'upgrade' your Assignment 1 site to be responsive. This means we will be rewriting some of the CSS to use a mobile-first approach. This is going to be a bit tricky - that's why we usually prefer to start with a mobile design first!

Steps:

1. Start by duplicating your `assignment-01.astro` file and renaming it to something like `assignment-01-responsive.astro`. This will create a new page for it.
2. Update the CSS to use a mobile-first approach. This means:
   - Add a media query for larger screens (e.g., `@media (min-width: 600px) { ... }`).
   - Resize your browser window to be narrow, and start adjusting the styles to look good on a small screen. You can do this however you want - it's up to you. (this is what happens when you are given a design without a mobile version!)
   - Each time you make a change, you can then widen the browser window and 'fix' the desktop styles inside the media query.
   - You will not be rewriting all of the CSS
3. Make sure the site looks good on both mobile and desktop.
