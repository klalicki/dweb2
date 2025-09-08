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

---

## `overflow`, `overflow-x`, `overflow-y`

This property can take one of four values:

- `visible` (default) - content is not clipped and may overflow the container
- `hidden` - content is clipped and anything that overflows the container is not visible
- `scroll` - content is clipped, but scrollbars are added to see the rest of the content
- `auto` - if content overflows, scrollbars are added as needed (they will not be added if the content fits)

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

We also have pseudo-classes that allow us to select specific elements based on where they are in the document:

- `:first-child` - selects an element only if it is the first child of its parent
- `:last-child` - selects an element only if it is the last child of its parent

```css
.square:first-child {
  background-color: red;
}
.square:last-child {
  background-color: blue;
}
```

<style>
  .square {
    width: 50px;
    height: 50px;
    background-color: lightgray;
  }
  .square:first-child {
    background-color: red;
  }
  .square:last-child {
    background-color: blue;}
</style>

<div style="display:flex;gap:1rem;width:100%;justify-content:center;">
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div><div class="square"></div>
  <div class="square"></div>
  <div class="square"></div><div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  </div>

---

## `:nth-child()`

- `:nth-child(n)` - selects elements that are the nth child of its parent (where n is a number or a formula)

This one can be tricky to understand, but is very useful, especially if you're working with a grid layout. We'll go through a handful of them.

---

A single number inside the parentheses selects that specific index (the first element is 1, second is 2, etc)

```css
.square:nth-child(3) {
  background-color: limegreen;
}
```

<style>
.grid-container{
  display:grid;
  grid-template-columns:repeat(8, 50px);
  grid-template-rows:repeat(3, 50px);
  gap:1rem;
  justify-content:center;
}


.grid-container > div{background-color:lightgray;font-size:.75em;display:flex;align-items:center;justify-content:center;}
 

</style>

<style>
  .gc-1 > div:nth-child(3){
  background-color:limegreen !important;
}
</style>
<div class="grid-container gc-1">
<div>1</div>
<div>2</div>
<div>3</div>    
<div>4</div>
<div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
<div>9</div>
<div>10</div>    
<div>11</div>
<div>12</div>
  <div>13</div>
  <div>14</div>
  <div>15</div>
  <div>16</div>
  <div>17</div>
  <div>18</div>
  <div>19</div>
  <div>20</div>
  <div>21</div>
  <div>22</div>
  <div>23</div>
  <div>24</div>
</div>

---

Using a formula with `n`.

When we use a formula, `n` starts at 0 and increments, selecting every element that matches. That means that `3n` will select the 3rd, 6th, 9th, etc. elements.

<style>
  .gc-2 > div:nth-child(3n){
  background-color:limegreen !important;
}
</style>

<div class="grid-container gc-2">
<div>1</div>
<div>2</div>
<div>3</div>    
<div>4</div>
<div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
<div>9</div>
<div>10</div>    
<div>11</div>
<div>12</div>
  <div>13</div>
  <div>14</div>
  <div>15</div>
  <div>16</div>
  <div>17</div>
  <div>18</div>
  <div>19</div>
  <div>20</div>
  <div>21</div>
  <div>22</div>
  <div>23</div>
  <div>24</div>
</div>

---

We can also add a number to the formula to offset it. For example, `5n+1` will select the 1st, 6th, 11th, etc. elements.

<style>
  .gc-3 > div:nth-child(5n+1){
  background-color:limegreen !important;
}
</style>

<div class="grid-container gc-3">
<div>1</div>
<div>2</div>
<div>3</div>    
<div>4</div>
<div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
<div>9</div>
<div>10</div>    
<div>11</div>
<div>12</div>
  <div>13</div>
  <div>14</div>
  <div>15</div>
  <div>16</div>
  <div>17</div>
  <div>18</div>
  <div>19</div>
  <div>20</div>
  <div>21</div>
  <div>22</div>
  <div>23</div>
  <div>24</div>
</div>

---

We also have keywords `odd` and `even` which select odd and even indexed elements, respectively.

<style>
  .gc-35 > div:nth-child(odd){
  background-color:limegreen !important;
}
</style>

<div class="grid-container gc-35">
<div>1</div>
<div>2</div>
<div>3</div>    
<div>4</div>
<div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
<div>9</div>
<div>10</div>    
<div>11</div>
<div>12</div>
  <div>13</div>
  <div>14</div>
  <div>15</div>
  <div>16</div>
  <div>17</div>
  <div>18</div>
  <div>19</div>
  <div>20</div>
  <div>21</div>
  <div>22</div>
  <div>23</div>
  <div>24</div>
</div>

---

We can also use a formula like `n+_` to select every element starting from (and including) a specific one.

<style>
  .gc-4 > div:nth-child(n+4){
  background-color:limegreen !important;
}
</style>

<div class="grid-container gc-4">
<div>1</div>
<div>2</div>
<div>3</div>    
<div>4</div>
<div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
<div>9</div>
<div>10</div>    
<div>11</div>
<div>12</div>
  <div>13</div>
  <div>14</div>
  <div>15</div>
  <div>16</div>
  <div>17</div>
  <div>18</div>
  <div>19</div>
  <div>20</div>
  <div>21</div>
  <div>22</div>
  <div>23</div>
  <div>24</div>
</div>

---

If we use `-n+_` (negative n) we can select every element from the first up to, and including a specific one.

<style>
  .gc-5 > div:nth-child(-n+4){
  background-color:limegreen !important;
}
</style>

<div class="grid-container gc-5">
<div>1</div>
<div>2</div>
<div>3</div>    
<div>4</div>
<div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
<div>9</div>
<div>10</div>    
<div>11</div>
<div>12</div>
  <div>13</div>
  <div>14</div>
  <div>15</div>
  <div>16</div>
  <div>17</div>
  <div>18</div>
  <div>19</div>
  <div>20</div>
  <div>21</div>
  <div>22</div>
  <div>23</div>
  <div>24</div>
</div>

---

We can combine multiple `nth-child` selectors to select specific groups of elements that match all of the criteria.

For example, `.square:nth-child(n+5):nth-child(-n+15)` will select every element from the 5th to the 15th.

<style>
  .gc-6 > div:nth-child(n+5):nth-child(-n+15){
  background-color:limegreen !important;
}
</style>

<div class="grid-container gc-6">
<div>1</div>
<div>2</div>
<div>3</div>    
<div>4</div>
<div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
<div>9</div>
<div>10</div>    
<div>11</div>
<div>12</div>
  <div>13</div>
  <div>14</div>
  <div>15</div>
  <div>16</div>
  <div>17</div>
  <div>18</div>
  <div>19</div>
  <div>20</div>
  <div>21</div>
  <div>22</div>
  <div>23</div>
  <div>24</div>
</div>

---

`nth-child` selectors are a bit strange, but they can be very useful when working with grids, tables, anything like that with a lot of repeating elements.

You don't need to memorize all of them, but they're something that you should be aware of, and know where to look up when you need them.
