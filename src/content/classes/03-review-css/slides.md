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

---

## Measurement in CSS

CSS supports a variety of types of measurements:

---

## Absolute Measurements

Absolute measurements are constant - they _do not change_ with the window size.

`px` : Pixels

We also can technically use print-based units (though there's no guarantee they are accurate!)

- `in` : Inches
- `cm` : Centimeters
- `mm` : Millimeters

---

## Relative Measurements

Most of the time, we want to use _relative measurements,_ which are able to adapt to the size of the viewport or the parent element. This will allow us to create layouts that smoothly adapt to different screen sizes.

---

## Percentage

`%` : Percentage: _relative to another element_

The percentage will be based on the size of another element (usually but not always the parent element).

- usually based on the parent element's width/height
- _for padding/margin:_ always based on the parent element's **width**
- _for font-size:_ based on the parent element's **font size**

---

## Viewport Units

`vw`, `vh` : Viewport Width / Height

- `vw` is 1% of the viewport width
- `vh` is 1% of the viewport height

These can be very practical for creating elements that take up a specific portion of the viewport - such as a banner that takes up the full page width

---

# Type-based Units: `em`, `rem`, and `ch`

---

## `em` unit

`em` : Relative to the font-size of an element.

This can be useful for applying the same styling across multiple elements that use different font sizes

```text
h3,h4,h5 {
  padding: 0.25em;
  border-radius: 0.25em;
}
```

<h3 style="display:inline-block;padding:0.25em;border-radius:0.25em;background-color:lightblue">This is an h3</h3>
<h4 style="display:inline-block;padding:0.25em;border-radius:0.25em;background-color:lightblue">This is an h4</h4>
<h5 style="display:inline-block;padding:0.25em;border-radius:0.25em;background-color:lightblue">This is an h5</h5>

---

## `rem` unit

`rem`: Relative to the font-size of the _root_ element (the `html` element that contains the whole page)

This means that 1rem is usually equal to your base font size (usually around 16px). This makes `rem` a good unit for general layout and spacing.

---

## `ch` unit

`ch` : Relative to the width of the "0" (zero) character in the element's font

This is most often used for setting maximum widths for text blocks that are loosely based on character counts
