## Welcome to **Design for the Web 2**

_DES491 - Fall 2025_

Let's make some Web Sites!

---

## Today in Class

- How Websites Work
- Review of HTML
- Review of CSS, part 1

---

## How does the internet work?

Server <---> Client (browser) <---> User

---

### The Server

The **server** is the computer that hosts the website and serves content to users. For the purpose of this course, the server is storing HTML files, as well as any images/assets needed for the website.

We are building what is called _static sites_ - the server provides the same files to every user.

There are also _dynamic sites_ - the server can generate unique files to different users. This is how web applications usually work.

---

### The Client

The **client** is the user's device (such as a computer or phone) that accesses the website through a web browser. The client is responsible for taking the HTML/CSS/Javascript and displaying it as a web page.

---

## What are websites made of?

Websites are made up of a combination of three parts:

1. **HTML** - content & structure
2. **CSS** - visual appearance & layout
3. **JavaScript** - behavior & interactivity

The browser interprets these three languages to display a web page to the user.

---

## What is HTML?

---

HTML _(Hypertext Markup Language)_ is a standardized language used to create and _structure_ content on the web.

---

## Semantic HTML

It's important to remember that not every web user is able to see & interact with the page in the same way that you do. Some people may be accessing the page through a screen reader, or they may be using a plugin that changes the font size or layout.

_This means we cannot solely rely on appearance to show a page's structure._

---

## Semantic HTML

Luckily, we have a set of _semantic HTML_ elements, that are able to convey meaning and structure in addition to their content.

Using semantic HTML helps ensure that your content is accessible and understandable by all users, even without the visual cues.

We should use semantic elements whenever possible (but it isn't always possible or practical)

---

## Tags & Elements

HTML is made up of **tags**. The browser interprets these tags to display the content on the page. A tag, combined with its content, is called an **element**.

```html5[]
<p>Some text</p>

<section>
  <h2>Some Heading</h2>
</section>

<img src="..." alt="An image" />


```

---

## Regular (paired) tags:

Most tags come in pairs, with an opening tag and a closing tag. For example:

```html
<p>This is a paragraph.</p>
```

---

## Self-closing tags:

Some tags do not have closing tags and are self-contained. For example:

```html
<img src="image.jpg" alt="An image" />
```

or

```xml
<img src="image.jpg" alt="An image">
```

The slash `/` at the end of the self-closing tag is considered optional. Your editor may automatically add it for you.

---

## Types of tags

There are a lot of types of tags. We're going to look at them in a few categories:

- HTML Document Structure
- Text Content
- Links & Media
- Grouping

Later, we'll look at Tables and Forms

---

### HTML Document Structure Tags

```html5[]
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Page Title</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <!-- Page content goes here -->
  </body>
</html>
```

Every HTML page has the same basic structure. These tags are the bare minimum required to create a valid HTML document.

---

### HTML Document Structure Tags

```html5[1]
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Page Title</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <!-- Page content goes here -->
  </body>
</html>
```

The `<!DOCTYPE html>` declaration tells the browser that this is an HTML file so it knows how to read it.

---

### HTML Document Structure Tags

```html5[2-12]
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Page Title</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <!-- Page content goes here -->
  </body>
</html>
```

The `<html>` element contains the entire page, including the invisible metadata and the visible page content.

---

### HTML Document Structure Tags

```html5[3-8]
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Page Title</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <!-- Page content goes here -->
  </body>
</html>
```

The `<head>` element contains meta-information about the page; elements inside it are not directly visible to the user.

---

### HTML Document Structure Tags

```html5[4-5]
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Page Title</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <!-- Page content goes here -->
  </body>
</html>
```

The `<meta>` tags provide information about the HTML document, such as its character encoding and viewport settings.

---

### HTML Document Structure Tags

```html5[6]
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Page Title</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <!-- Page content goes here -->
  </body>
</html>
```

The `<title>` element specifies the title of the web page, which is displayed in the browser's title bar or tab.

---

### HTML Document Structure Tags

```html5[7]
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Page Title</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <!-- Page content goes here -->
  </body>
</html>
```

The `<link>` element is used to load external resources, such as stylesheets, intto the HTML document.

---

### HTML Document Structure Tags

```html5[9-11]
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Page Title</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <!-- Page content goes here -->
  </body>
</html>
```

The `<body>` element contains the actual content of the web page. This is the part of the file that is visible to the user.

---

## Text Content Tags

---

#### Paragraph `<p>`

This is our basic text element. All of the longer text on a page should be in `<p>` elements.

```html
<p>
  Here's some text in a p element. Lorem ipsum dolor sit amet, consectetur
  adipiscing elit. Donec vitae malesuada mauris. Donec vulputate vehicula
  accumsan.
</p>
```

<div class="output-preview"><p>
  Here's some text in a p element. Lorem ipsum dolor sit amet, consectetur
  adipiscing elit. Donec vitae malesuada mauris. Donec vulputate vehicula
  accumsan. 
</p></div>

---

#### Line break `<br>`

The `<br>` element is used to create a line break in the text. This is the equivalent of your 'soft return' (Shift+Enter)

```html
<p>
  Here's some text in a p element<br />
  Here's some text on the next line
</p>
```

<div class="output-preview"><p>
  Here's some text in a p element<br />
  Here's some text on the next line
</p></div>

---

#### _kinda important note:_

The browser will remove extra spaces from HTML when displaying it. If you want to _intentionally_ have extra spaces in a piece of text, you need to use `<br/>` elements and/or the `&amp;nbsp;"` (non-breaking space) code.

---

#### Headings

Headings are defined with the `<h1>` to `<h6>` tags. The `<h1>` tag is the highest level (largest text), and the `<h6>` tag is the lowest level (smallest text).

```html
<h1>This is a heading</h1>
<h2>This is a sub-heading</h2>
<h3>This is a smaller sub-heading</h3>
```

---

<div class="output-preview">

# This is an h1

## This is an h2

### This is an h3

#### This is an h4

##### This is an h5

###### This is an h6

</div>

---

#### _important note_

Headings are a _semantic_ element - they provide structure and meaning to the document. They should be used to add titles to parts of the document. Think of them as an 'outline view' of your page content.

Users of assistive technology such as screen readers often will browse through a page by its heading tree, so it's important to use them logically.

If your goal is just 'make text big', you should probably be using a `<p>` element and making its font-size larger with CSS.

---

#### Emphasis tags

There are two tags that can be used to emphasize text:

```html
<p>This is <em>emphasized</em> text.</p>
<p>This is <strong>strongly emphasized</strong> text.</p>
```

<div class="output-preview">
<p>This is <em>emphasized</em> text.</p>
<p>This is <strong>strongly emphasized</strong> text.</p>
</div>

You may be tempted by the `<b>` and `<i>` tags, but these are no longer recommended - they only convey visual styling, while `<strong>` and `<em>` convey meaning to screen readers.

---

#### The `<span>` tag

Sometimes, you may want to select part of a line of text to style it in a special way. You can use the `<span>` tag for this purpose. This tag on its own doesn't add any styling OR meaning, so you will need to use CSS.

```html
<p>This is a <span class="highlight">highlighted</span> word.</p>
```

<div class="output-preview">
This is a <span style="background-color:yellow;">highlighted</span> word.

</div>

---

#### The `<div>` tag

The `<div>`, or division, tag is used to group elements together, usually for the purpose of visually grouping and styling them. It's important to remember that the `div` doesn't add any meaning to its contents, so in many cases you are better off using a semantic group tag.

```html
<div class="blue-box">some text inside a div</div>
```

<div class="output-preview">
  <div style="border:2px solid blue;padding:.5rem;max-width:400px;margin:0 auto;">some text inside a div</div>
</div>

---

#### Lists

Lists are used to group related items together. There are three types of lists in HTML:

- Unordered Lists
- Ordered Lists
- Description Lists

---

#### Unordered List `<ul>`

An unordered list is a list of items that do not have a specific order. It is created using the `<ul>` tag, with each item inside an `<li>` tag.

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

<div class="output-preview">
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
</div>

---

#### Ordered List `<ol>`

An ordered list is a list of items that are arranged in a specific order. It is created using the `<ol>` tag, with each item inside an `<li>` tag.

```html
<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>
```

<div class="output-preview">
<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>
</div>

---

#### Description List `<dl>`

A description list is a list of terms and their descriptions. It is created using the `<dl>` tag, with each term inside a `<dt>` tag and its description inside a `<dd>` tag.

```html
<dl>
  <dt>Term 1</dt>
  <dd>Description for term 1</dd>
  <dt>Term 2</dt>
  <dd>Description for term 2</dd>
</dl>
```

<div class="output-preview">
<dl>
  <dt>Term 1</dt>
  <dd>Description for term 1</dd>
  <dt>Term 2</dt>
  <dd>Description for term 2</dd>
</dl>
</div>

---

## Links & Media

---

### Links

Links are created using the `<a>` tag. The `href` attribute specifies the URL of the page the link goes to.

```html
<a href="https://www.example.com">This is a link</a>
```

<div class="output-preview">
<a href="https://www.example.com">This is a link</a>
</div>

You can also link to a specific section within the same page or another page using an anchor link. For example:

```html
<a href="#section1">Go to Section 1</a>
<a href="https://www.example.com#section1">Go to Section 1 on Example.com</a>
```

---

### URL Types for links

We have a few ways to write URLs:

**Absolute URL:** a 'full' URL with the protocol (http or https) and the domain name. For example: `https://www.example.com`.

**Relative URL:** a URL that is relative to the current page. For example: `/about` would link to the about page on the same site. These should start with a slash.

---

### Images

Images are added using the `<img>` tag. The `src` attribute specifies the URL of the image, and the `alt` attribute provides a description of the image. If the image fails to load, the alt text will be displayed instead. Later in the semester we will learn how to write good alt text.

```html
<img src="image.jpg" alt="Description of the image" />
```

<div class="output-preview">
<img src="image.jpg" alt="Description of the image" style="background-color: lightgray;height:3rem;">
</div>

---

## Grouping Elements

There are _a lot_ of HTML elements that can be used for grouping stuff together. None of them have any visual style by default, so you will need to style them with CSS. Many of them also convey a semantic meaning.

---

#### Page Structure Elements

We should typically use the elements `header`, `main`, and `footer` to define the structure of our web pages. These elements provide another way for assistive tech users to navigate the content.

```html
<header>Header goes here(site logo, nav, etc)</header>
<main>Main page content goes here</main>
<footer>Footer content goes here (copyright notice, sitemap links, etc)</footer>
```

---

#### Navigation

The `<nav>` element should be used to group navigation links together. Users of assistive tech will be able to identify that a section contains navigation links and jump to that section if they want to.

```html
<nav>
  <a href="/">Home</a>
  <a href="/">About</a>
  <a href="/">Services</a>
  <a href="/">Contact</a>
</nav>
```

---

#### `<section>`, `<article>`, `<aside>`

These three elements can be used to group chunks of related content together.

- **section** - A thematic grouping of content, typically with a heading.
- **article** - A self-contained composition that could be distributed and reused independently. "Cards" are often articles.
- **aside** - Content that is somewhat related to the content around it, often used for sidebars or pull quotes.

You can have an `article` inside a `section` and vice versa. These elements are also used to define the page outline for screen readers.

---

#### `<details>` and `<summary>`

The `details/summary` element are used to create a functional accordion that can open/close.

```html
<details>
  <summary>Click me to see more</summary>
  <p>
    This is the hidden content that is revealed when the summary is clicked.
  </p>
</details>
```

<div class="output-preview">
<details>
  <summary>Click me to see more</summary>
  <p>
    This is the hidden content that is revealed when the summary is clicked.
  </p>
</details>
</div>

---

#### `<details>` and `<summary>` pt 2

By adding a 'name' property to the details element, we can create a group where only one can be open at a time.

```html
<details name="sample-group">
  <summary>Details Element 1</summary>
  <p>...</p>
</details>
<details name="sample-group">
  <summary>Details Element 2</summary>
  <p>...</p>
</details>
```

<div class="output-preview">
<details name="sample-group">
  <summary>Details Element 1</summary>
  <p>Here's some content in details element 1</p>
</details>
<details name="sample-group">
  <summary>Details Element 2</summary>
  <p>Here's some content in details element 2 </p>
</details>
</div>

---

#### `<figure>` and `<figcaption>`

The `<figure>` element is used to group media content (like images, videos, etc.) along with a caption. The `<figcaption>` element is used to provide a visible caption for the content.

```html
<figure>
  <img src="image.jpg" alt="Description of the image" />
  <figcaption>This is a caption for the image.</figcaption>
</figure>
```

<div class="output-preview" style="max-width:400px;margin:0 auto;" >
<figure>
  <img src="" alt="" style="background-color: lightgray;height:3rem;">
  <figcaption>This is a caption for the image.</figcaption>
</figure>
</div>

---

## Other Tags

---

### The `<style>`tag

You can use the `style` tag to write CSS directly within your HTML page. We'll be using this a lot when we start working with Astro.

```html
<style>
  /* CSS goes here */
  body {
    color: green;
    font-size: 20px;
  }
</style>
```

---

## That's enough tags for now.

We'll look at others as needed.

---

## HTML Attributes

Attributes are used to add additional properties to elements. They are written with the following format:

```html
<h1 property="value"></h1>
```

Note that the value is always in quotes, and the property name is lowercase.

---

### Special attributes for certain tags

Some tags have special attributes available for use.

- `<img>` has `alt`, `src`
- `<a>` has `href`
- `<details>` has `name` (group name)

---

### The `style` attribute.

You can add a `style` attribute to any element, and you can put CSS _properties_ inside it. This is useful if you want to make one element have a unique appearance.

```html
<p style="background-color:pink;color:darkblue">Here's some text</p>
```

<div class="output-preview">
<p style="background-color:pink;color:darkblue">Here's some text</p>
</div>

---

### Class and ID Attributes

Class and ID names (for CSS styling) are also considered attributes.

Every element can have a `class` attribute with a list of CSS classes, and an `id` attribute with ONE id

`<div class="class1 another-class class3">`

`<div id="my-special-div">`

Remember, class and ID names cannot have spaces, and they must start with a letter. The usual convention is 'kebab-case' (all lower-case with hyphens between words)

---

### Class vs ID

Classes can be used more than once on a page - classes are great for styling multiple elements in the same way.

IDs must be unique within a page - we typically use them when we want to target a single specific element.

We can also use IDs for 'jump links' - you can use them in a link's href:

```html
<a href="#my-special-div">Go to my special div</a>
```

or

```html
<a href="/another-page#my-special-div">Another page</a>
```

---

## You don't have to remember _every_ HTML element.

There's nothing wrong with looking up elements as you work. There are some that you will use all the time, and some that you will rarely use.

The [MDN Web Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/) is a great reference material - it will tell you what each element is used for, any any special attributes that element can/should have.

This [flowchart](https://html5doctor.com/downloads/h5d-sectioning-flowchart.pdf) is also helpful for picking which HTML element to use.

---

# CSS

Cascading Style Sheets

---

## CSS

CSS is how we add visual styling to our page.

```css[]
h1 {
  color: blue;
  font-size: 24px;
}
```

In this example, `h1` is a _selector:_ it selects the elements we want to style (in this case all h1 elements)

The code between the curly brackets `{}` is a _declaration block:_ it contains declarations (statements that define the styles to be applied).

---

### CSS Declarations

```css
h1 {
  color: blue;
  font-size: 24px;
}
```

Within the declaration block, each statement has the same general formula:

`property-name: value;`

Note that there is a colon `:` between the property name and value, and a semicolon `;` at the end of the line.

---

## Selectors

CSS selectors range from simple to very complex. Today we're going to look at some of the standard simpler ones.

---

### Basic Selectors

#### All of an element

`p {}` will select and style all `<p>` elements.

#### Global Selector

`* {}` will select and style all elements on the page.

---

### IDs and Classes

`#id-name {}` will select and style the element with that specific ID.

`.class-name {}` will select and style all elements with that class.

---

### Combining Selectors

We can combine selectors with no space between to find elements that match _ALL_ of the combined selectors

`h2.class-name {}` will select and style all `<h2>` elements with that class.

`.class-name-1.class-name-2 {}` will select and style all elements with both classes.

---

### Descendant Selectors

We can combine selectors with a space to find elements that are _inside_ other elements.

`.card p {}` will select all `<p>` elements that are inside an element with the class `card`.

We can also combine three or more selectors in the same way.

`article.card .body a {}` will select all link (`<a>`) elements that are inside an element with the class `body`, which is then inside an element with the class `card`, which is inside an `<article>` element.

---

### Child Selector

We can combine selectors with an angle bracket `>` to find elements that are _direct children_ of other elements.

`.card > p {}` will select all `<p>` elements that are direct children of an element with the class `card`. It will not select `<p>` elements that are nested deeper inside the `.card` element.

---

## CSS properties

Each part of an element's appearance can be controlled with CSS properties. We will go over a lot of these next week, but here are a few simple ones:

- `color`: Sets the text color.
- `background-color`: Sets the background color.
- `font-size`: Sets the font size.
