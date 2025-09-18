---
title: Make and use a Component
due: 09/22/2025
---

## Make a component in Astro

1. Create a new file in `src/components` called `MyComponent.astro`
2. Add some HTML to it, like a simple card:

   ```astro
   ---
   ---
   <div class="card">
     <h2>This is my component!</h2>
     <slot />
   </div>
   ```

   Use the `<slot />` tag to allow content to be placed inside the component when it's used.

3. Now, use your component a few times in a page, like `src/pages/index.astro`:

   ```astro

   ---
   import MyComponent from '../components/MyComponent.astro';
   ---
   <MyComponent>
     <p>Here's some stuff inside my first component.</p>
   </MyComponent>
   <MyComponent>
     <p>Here's some stuff inside my second component.</p>
   </MyComponent>
   ```
