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

```html5
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

The slash `/` at the end of the self-closing tag is considered optional. Your editor may automatically add it for you.

---

#### Types of tags

## Generic containers

If none of the semantic elements fit your needs, you can use the generic container elements `div` and `span` to group content together.

**div:** short for 'division', usually used to group several related elements together to add style to them.

**span:** usually used to add style to a specific part of an element's text content.

```html5
<p>Here is some text. <span class="pink-text">with a pink background.</span></p>
```
