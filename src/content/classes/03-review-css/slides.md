## Welcome to **Design for the Web 2**

_DES491 - Fall 2025_

Let's make some Web Sites!

---

## Today in Class

- Review CSS Selectors Homework
- CSS Properties
  - Typography
  - The Box Model
  - Layout / Position
  - Colors

---

# Let's Review the Homework

---

# CSS Properties

---

## How many CSS properties are there?

---

## A lot. (~500)

---

Luckily, we don't need to memorize all of them.

We will use about 30 of them for most things.

---

# Types of CSS Properties

## Color

## Measurement

---

# Color in CSS

We have a few different ways to describe color in CSS:

```css[1-11|1-2|4-5|7-8|10-11]
/* Named Colors */
color: blue;

/* Hex Codes */
color: #0000ff;

/* RGB Colors */
color: rgb(0, 0, 255);

/* HSL Colors */
color: hsl(240, 100%, 50%);
```

<strong style="color:#0000ff">This text is blue.</strong>

---

## Transparent Colors in CSS

CSS also supports colors with transparency (_alpha channel_).

```css[1-9|1-2|4-5|7-8]
/* Hex Code with Alpha */
color: #0000ff80;

/* RGBA Colors */
color: rgba(0, 0, 255, 0.5);

/* HSLA Colors */
color: hsla(240, 100%, 50%, 0.5);
```

<strong style="color:#0000ff80">This text is blue with some transparency.</strong>
