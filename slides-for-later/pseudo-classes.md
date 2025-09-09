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
