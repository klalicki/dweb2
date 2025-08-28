## Welcome to **Design for the Web 2**

_DES491 - Fall 2025_

Let's make some Web Sites!

---

## Today in Class

- Welcome/Introductions
- Syllabus Overview
- Course Logistics
- Mini activity: Reviewing HTML/CSS

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

## HTML Page Structure

Every HTML page should have the following basic structure:

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Page Title</title>
  </head>
  <body>
    <!-- Page content goes here -->
  </body>
</html>
```

<!-- TODO: line by line breakdown of this -->

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

### Text Content Tags

---

#### Paragraph `<p>`

This is our basic text element. All of the longer text on a page should be in `<p>` elements.

```html
<p>Here's some text in a p element</p>
```

#### Line break `<br>`

The `<br>` element is used to create a line break in the text. This is the equivalent of your 'soft return' (Shift+Enter)

```html
<p>
  Here's some text in a p element<br />
  Here's some text on the next line
</p>
```

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

#### _kinda important note:_

The browser will remove extra spaces from HTML when displaying it. If you want to _intentionally_ have extra spaces in a piece of text, you need to use `<br/>` elements and/or the `&nbsp;` (non-breaking space) code.

---

#### Headings

Headings are defined with the `<h1>` to `<h6>` tags. The `<h1>` tag is the highest level (largest text), and the `<h6>` tag is the lowest level (smallest text).

```html
<h1>This is a heading</h1>
<h2>This is a sub-heading</h2>
<h3>This is a smaller sub-heading</h3>
```

---

# This is an h1

## This is an h2

### This is an h3

#### This is an h4

##### This is an h5

###### This is an h6

---

#### _important note_

Headings are a _semantic_ element - they provide structure and meaning to the document. They should be used to add titles to parts of the document. Think of them as an 'outline view' of your page content.

Users of assistive technology such as screen readers often will browse through a page by its heading tree, so it's important to use them logically.

If your goal is just 'make text big', you should probably be using a `<p>` element and making its font-size larger with CSS.
