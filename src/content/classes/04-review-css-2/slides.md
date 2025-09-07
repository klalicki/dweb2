## Welcome to **Design for the Web 2**

_DES491 - Fall 2025_

Let's make some Web Sites!

---

## Today in Class

- Review Flexbox Froggy
- CSS Properties
  - Position

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

This property can take one of four values:

- `visible` (default) - content is not clipped and may overflow the container
- `hidden` - content is clipped and anything that overflows the container is not visible
- `scroll` - content is clipped, but scrollbars are added to see the rest of the content
- `auto` - if content overflows, scrollbars are added as needed (they will not be added if the content fits)

---
