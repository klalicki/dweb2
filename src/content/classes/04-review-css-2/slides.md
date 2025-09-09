## Welcome to **Design for the Web 2**

_DES491 - Fall 2025_

Let's make some Web Sites!

---

## Today in Class

- Review Flexbox Froggy
- CSS Properties
  - Position
  - Overflow
  - Cursor
  - ~~Pseudo-classes~~
  - CSS Variables
  - CSS Functions
- Basics of Git
- Setting up our Personal Sites
- Homework: ExploreHV site

---

# Let's Review the Homework

---

## `position`

Sets positioning method.

```css
div {
  position: absolute;
  top: 20px;
  left: 50px;
}
```

Options: `static`, `relative`, `absolute`, `fixed`, `sticky`.

---

## `position: static`

The default positioining for all elements. Elements are positioned according to the 'normal flow' of the document. This means that you can't use `top`, `left`, `right`, or `bottom` to move the element.

```css
position: static;
top: 50px; // note this doesn't do anything!
```

<div style="position:relative;height:200px;border:1px solid blue">
<div style="border:2px solid red;background-color:pink;border-radius:8px;width:200px;height:100px;"></div>
</div>

---

## `position: relative`

Elements are positioned according to the normal flow, but you can use `top`, `left`, `right`, and `bottom` to move the element relative to its normal position.

```css
position: relative;
top: 50px;
left: 100px;
```

<div style="position:relative;height:200px;border:1px solid blue">
<div style="border:2px dashed red;;border-radius:8px;width:200px;height:100px;position:absolute;"></div>

<div style="border:2px solid red;background-color:pink;border-radius:8px;width:200px;height:100px;top:50px;left:100px;position:relative;"></div>
</div>

---

## `position: absolute`

Elements are positioned relative to the 'nearest positioned ancestor' (an ancestor element with `position` set to something other than `static`). If there is no positioned ancestor, the element is positioned relative to the whole page.

```css
position: relative;
bottom: 25px;
right: 100px;
```

<div style="position:relative;height:200px;border:1px solid blue">
<div style="border:2px dashed red;;border-radius:8px;width:200px;height:100px;position:absolute;"></div>

<div style="border:2px solid red;background-color:pink;border-radius:8px;width:200px;height:100px;bottom:25px;right:100px;position:absolute;"></div>
</div>

---

## `position: fixed`

Element is positioned relative to the viewport, and will stay in the same position even when the page is scrolled. This is useful for a 'floating' element, such as a navigation bar that stays at the top of the screen.

```css
div {
  position: fixed;
  right: 0rem;
  top: 0rem;
}
```

<div style="position:relative;height:200px;border:1px solid blue">
<div style="border:2px dashed red;;border-radius:8px;width:200px;height:100px;position:absolute;"></div>
<!-- TODO: figure out the correct CSS for this to be positioned in the right spot -->
<div style="border:2px solid red;background-color:pink;border-radius:8px;width:200px;height:100px;top:calc((var(--slide-height) - var(--viewport-height)) / var(--slide-scale) / 2 + 100px + 1rem);right:0px;position:fixed;"></div>
</div>

---

## `position: sticky`

Element can switch between relative and fixed position, depending on how far you have scrolled in the page. This is useful for making things like headers that stay at the top of the page after you scroll past them.

We usually use this one in combination with `top: 0;` to make an element stick to the top of the viewport.

````css
header {
  position: sticky;
  top: 0;
}
```p

---

## Review:

What is the difference between `position: relative` and `position: absolute`?

---

- `relative` positions the element relative to its normal position in the document flow
- `absolute` positions the element relative to the nearest positioned ancestor (or the page if none)

---

### `top`, `right`, `bottom`, `left`

Offsets an element when positioned.

```css
div {
  position: relative;
  top: 10px;
  left: 20px;
}
````

---

### `z-index`

Controls stacking order. Note that `z-index` only works on positioned elements (`position` set to something other than `static`).

```css
div {
  z-index: 10;
}
```

Higher values appear on top. You can also use negative values.

---

## `overflow`, `overflow-x`, `overflow-y`

Controls what happens when content takes up more space than its container. This property becomes useful when you have a container set to a fixed size (using `width` and/or `height`).

---

## `overflow`, `overflow-x`, `overflow-y`

This property can take one of four values:

- `visible` (default) - content is not clipped and may overflow the container
- `hidden` - content is clipped and anything that overflows the container is not visible
- `scroll` - content is clipped, but scrollbars are added to see the rest of the content
- `auto` - if content overflows, scrollbars are added as needed (they will not be added if the content fits)

---

## `object-fit`

This property controls how an image (or video) is resized to fit its container (the `img` element). This is useful when you have an image inside a container, and you want to control how the image is cropped.

Options are: `fill`, `contain`, `cover`, `none`, `scale-down`.

The one you'll probably use the most is `cover`, which makes sure the entire container is filled, without distorting the image.

```css
img {
  width: 200px;
  height: 200px;
  object-fit: cover;
}
```

---

## `cursor`

Controls the type of cursor that is displayed when hovering over an element. [Options include:](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor)

- `default` - the default cursor
- `pointer` - a hand icon, typically used for links

Be careful when using custom cursors, as they often imply a certain behavior. For example, using `pointer` implies that the element is clickable.

You can also use a custom image as a cursor with `url()`.

<div style="display:flex;gap:2rem;align-items:center; width:100%;justify-content:center;">
  <div style="border:2px solid black;padding:1rem;cursor:default;">default</div>
  <div style="border:2px solid black;padding:1rem;cursor:pointer;">pointer</div>
  <div style="border:2px solid black;padding:1rem;cursor:url('/dw2.png'), auto;">custom</div>
</div>

---

# Pseudo-classes

In CSS, we also have something called 'pseudo-classes'. These are special keywords that can be added to selectors to either specify a special state of the selected elements or to select elements based on their position in the document tree.

```css
a.button:hover {
  background-color: red;
}
```

<a href="" class="special-button">Click me</a>

<style>
  .special-button{
position:relative;
top:1rem;
border:4px solid red;
    color:red !important;
    padding:.5rem;
    border-radius:.5rem;
  }
  .special-button:hover{
    border: 4px solid red !important;
    background-color:red;
    color:white !important;
  }
</style>

---

Some common pseudo-classes include:

- `:hover` - applies when the user hovers over an element
- `:focus` - applies when an element has focus (e.g., an input field)
- `:visited` - applies to links that have been visited

---

## CSS Variables (Custom Properties)

In CSS, we also have the ability to store a value with a name to use it in other places. This can be very useful for things that we reuse a lot, like colors, font families, spacing.

```css
/* Defining a variable */
:root {
  --color-accent: #ff2222;
}

/* Using a variable */
.btn {
  background-color: var(--color-accent);
}
```

<style>
a.demo-btn{
  --color-demo-accent: #ff2222;
}
.demo-btn{
  background-color:var(--color-demo-accent) !important;
  color:white !important;
  padding:.5rem;
}
</style>

<a class="demo-btn">Button</a>

---

## Global vs Local Scope

When looking at websites through the lens of systems thinking, some design decisions are considered to be global (affecting the entire site), while some are local (affecting only a specific component).

If you prioritize global design decisions, it is much easier to maintain consistency across a site. For example, if you decide on a fixed color palette, you can use these colors throughout the site, and if you ever want to change the color scheme, you only need to change it in one place.

---

## Defining a CSS variable

We usually define CSS variables on the `:root` element. (the `html` element that contains the whole page). This lets us use the variable anywhere on the page. (global scope)

Variable names need to start with two dashes `--`. I like to name them logically, based on their type:

```css
:root {
  --variable-name: value;

  --color-accent-a: red;
  --color-accent-b: blue;

  --font-main: "DM Sans", sans-serif;

  --size-page-width: 1200px;
  --size-page-padding: 2rem;
}
```

---

## Using a CSS variable

To use a CSS variable, we use the `var()` function, with the name of the variable we want to use.

```css
.btn {
  background-color: var(--color-accent);
  font-family: var(--font-main);
  padding: var(--size-page-padding);
}
```

---

## CSS Functions

CSS has a number of 'functions' that can be used to modify or generate values. We've already looked at a few - `var()` for using CSS variables, and `url()` for specifying a URL (for example, for a background image).

---

## `calc()`

The `calc()` function allows us to perform calculations to determine CSS property values. This is useful when we want to combine different units, or when we want to create responsive designs. This can be particularly useful when using CSS variables.

In `calc()`, make sure to have spaces around the operators (`+`, `-`, `*`, `/`).

```css
div.sidebar {
  width: calc(300px + 2rem);
  height: calc(100vh - var(--size-header-height));
}
```

---

## `min()`, `max()`

The `min()` and `max()` functions allow us to set a value based on the minimum or maximum of a list of values. This can be useful for creating responsive designs. This is similar to setting `width` and `max-width`, but we can use it on other properties (like padding, font size, etc)

```css
div.container {
  padding: 1rem;
  margin: 0 auto;
  width: min(100%, 1200px);
}
```

---

## `clamp()`

`clamp(min, preferred, max)`

The `clamp()` function allows us to set a value that is constrained between a minimum and maximum value. This is useful for creating responsive elements that adapt to different screen sizes.

```css
h1 {
  font-size: clamp(1.5rem, 2.5vw, 5rem);
}
```

---

## Git Basics

Git is a version control system that allows us to track changes to our code over time. It also allows us to collaborate with others on the same codebase.

---

## What does this mean?

- We can see what changes were made, when, and by whom
- We can revert to previous versions of our code if something goes wrong
- We can work collaboratively with others, combining changes from different people

---

## Git vs GitHub

GitHub is a platform, made by Microsoft, for storing Git repositories (projects), as well as a suite of tools (including Codespaces) for working with Git repositories.

---

## Basic Git Workflow

1. Make changes to your code on your "local" copy of the code
2. _Stage_ and _commit_ your changes. This tells Git to save a snapshot of your code at this point in time.
3. _Push_ your changes to the remote repository (on GitHub). This backs up your code.

---

# Commit often!

It's better to have many small commits than one big one - that way if you realize later that you have made a mistake, you can go back to a specific commit and see what changed.

---

## Astro

Astro is a web framework for building fast, content-focused websites. It allows you to use modern web development tools and techniques, while still being able to write plain HTML and CSS. We'll be using Astro this semester.

One of Astro's key features is the ability to make components, which are reusable pieces of code that can be used throughout your site.
