## Welcome to **Design for the Web 2**

_DES491 - Fall 2025_

Let's make some Web Sites!

---

## Today in Class

- Reviewing Homework
- Review Components
- More Advanced Components (Named Slots)
- Markdown
- Wireframing
- Individual Meetings: Project 1 Ideas

---

## Review: Components

Components are reusable pieces of code that can be used throughout a website. They help keep our code organized and make it easier to maintain.

Why use components?

- Reusability
- Maintainability
- Consistency

---

## Another Benefit of Components: Organization/Readability

Rather than having a single large file with all of our HTML & CSS, we can break our code into smaller, more manageable pieces (even if we aren't reusing them).

This makes it easier to find and update specific parts of our code, since we can focus on one component at a time.

```astro
<Layout>
  <Header/>
  <body>
    <HeroSection/>
    <MainSection1/>
    <MainSection2/>
  </body>
  <Footer/>
</Layout>
```

---

## Review - Let's Make a Component

We're going to make an Astro component for an `Accordion` (expandable/collapsible section) using the `<details>` and `<summary>` HTML elements.

---

## Advanced Components

We have some more advanced features we can use in Astro components.

- Named Slots

---

## Named Slots

We can create components that have multiple "slots" for content. This can be useful when our component has multiple separate areas we want to fill with different types of content.

---

# Markdown

has anyone heard of/used Markdown before?

---

## What is Markdown?

A standardized way to write text with basic formatting, using plain text.

Markdown is designed to be easy to read and write for people, while also being easy to convert to HTML or other formats for computers.

---

## Where is Markdown used?

- Google Docs
- Wordpress
- Notion
- GitHub
- Reddit
- Discord
- Many more...

---

## Markdown Syntax

Markedown is designed to be pretty simple to use, and easy to read even in its raw form.

```markdown
## A Section of Text

This is some _italic_ text, and this is some **bold** text.

- Here is a bulleted list
- With multiple items
- Like this
```

turns into:

<div class="text-preview">
<h2>A Section of Text</h2>
<p>This is some <em>italic</em> text, and this is some <strong>bold</strong> text.</p>
<ul>
  <li>Here is a bulleted list</li>
  <li>With multiple items</li>
  <li>Like this</li>
</ul>
</div>

---

## Text

Plain text is written as-is. We can create a new paragraph by adding a blank line between lines of text.

```markdown
This is plain text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

This is another paragraph.
```

turns into:

<div class="text-preview">
  <p>This is plain text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  <p>This is another paragraph.</p>
</div>

---

## Headings

We use `#` symbols to create headings. More `#` symbols mean a smaller heading. `#` is the largest heading (h1), and `######` is the smallest.

```markdown
# This is a heading 1

## This is a heading 2

### This is a heading 3
```

turns into:

<div class="text-preview">
<h1>This is a heading 1</h1>
<h2>This is a heading 2</h2>
<h3>This is a heading 3</h3>
</div>

---

## Italic

We can italicize a piece of text by surrounding it with a `_` (underscore).

```markdown
This text is _italic_. This text is _also italic_.
```

turns into:

<div class="text-preview">
<p>This text is <em>italic</em>. This text is <em>also italic</em>.</p>
</div>

Note: you can also use a single `*` (asterisk) instead of `_` for italics, but it's less common.

---

## Bold

We can bold a piece of text by surrounding it with two `**` (asterisks) on either side.

```markdown
This text is **bold**. This text is **also bold**.
```

turns into:

<div class="text-preview">
<p>This text is <strong>bold</strong>. This text is <strong>also bold</strong>.</p>
</div>

Note: you can also use two `__` (underscores) instead of `**` for bold, but it's less common.

---

## Bold + Italic

We can combine bold and italic by placing the italic markers (`_`) inside the bold markers (`**`) (or vice versa).

```markdown
This text is **_bold and italic_**. This text is _italic, with a section in **bold**_.
```

turns into:

<div class="text-preview">
<p>This text is <strong><em>bold and italic</em></strong>. This text is <em>italic, with a section in <strong>bold</strong></em>.</p>
</div>

Note: technically you can use any combination of 3 `*` or `_` characters for bold+italic, but the above is the most common.

---

## Bulleted Lists

We can create bulleted (unordered) lists using `-` (dash) or `*` (asterisk)

```markdown
- Item 1
- Item 2
- Item 3
```

turns into:

<div class="text-preview">
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
  </div>

---

## Numbered Lists

We can create numbered (ordered) lists using numbers followed by a period.

```markdown
1. Item 1
2. Item 2
3. Item 3
```

turns into:

<div class="text-preview">
<ol>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>

---

## Combining Lists

We can combine bulleted and numbered lists by nesting them (using indents)

```markdown
1. Item 1
   - Sub-item 1
   - Sub-item 2
2. Item 2
3. Item 3
```

turns into:

<div class="text-preview">
<ol>
  <li>Item 1
    <ul>
      <li>Sub-item 1</li>
      <li>Sub-item 2</li>
    </ul>
  </li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>
</div>

---

## Links

We can create links using `[link text](URL)`

```markdown
This is a [link to Google](https://www.google.com).
```

turns into:

<div class="text-preview">
<p>This is a <a href="https://www.google.com">link to Google</a>.</p>
</div>
---

## Images

We can add images using `![alt text](image URL)`

```markdown
![A kitten](https://cdn2.thecatapi.com/images/3rt.jpg)
```

turns into:

<div class="text-preview">
  <img src="https://cdn2.thecatapi.com/images/3rt.jpg" alt="A kitten" width="300"/>
</div>

---

## Other Markdown Features

There are a handful of other, less common, features in Markdown:

https://www.markdownguide.org/cheat-sheet/

---

## Why Markdown?

- easy to read and write
- each feature corresponds directly to an HTML element - perfect for web content

---

## Using Markdown in Astro

In Astro, we can create `.md` files containing Markdown content, and import them as components into our pages.

```js
import { Content as ArticleContent } from "../articles/article1.md";
```

We can then use the imported content as a component:

```astro
<ArticleContent/>
```

---

This means that we can write larger pieces of text content in Markdown, and keep our Astro files focused on layout and structure, making them easier to read.

---

## Wireframing

Wireframing is a way to plan out the structure and layout of a website before we start building it.

Wireframes are simple, low-fidelity sketches/diagrams that show the basic layout and structure of a webpage, without any detailed design elements.

---

## Goals for Wireframing

- figure out rough layout/structure/flow of site
- identify key components we will need to design/build
- plan how sections of the site will change between desktop and mobile views

---

## How to Wireframe

Today we'll look at Balsamiq, a popular wireframing tool.

You can also use Figma, Miro, or even just pen and paper!

---

## Individual Meetings

Let's discuss your project idea and content.
