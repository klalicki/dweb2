## Welcome to **Design for the Web 2**

_DES491 - Fall 2025_

Let's make some Web Sites!

---

## Today in Class

- Reviewing Homework
- Review Components
- More Advanced Components
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

## Basic Markdown Syntax: Text

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
