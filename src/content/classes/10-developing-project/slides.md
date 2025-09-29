## Welcome to **Design for the Web 2**

_DES491 - Fall 2025_

Let's make some Web Sites!

---

## Today in Class

- File Paths
- Images in Astro
- Starting a New Project in Astro
- CSS Resets
- Fonts in Astro
- Named Slots
- Advanced Component Patterns

---

## But First...

---

![Labubu Big Into Energy blind box](labubu.jpg)

---

## File Paths

On computers, files are typically organized in a tree-like structure of folders/directories.

We often use the terms 'up' and 'down' to describe moving through this structure. 'Up' means going to a parent directory, while 'down' means going into a subdirectory.

We need to be able to specify the location of files in order to link to them or import them into our code.

---

## File Paths

There are two main types of paths:

- Absolute Paths
- Relative Paths

They are both ways of specifying the location of a file/page (or the path to get there) but they do so in different ways. In most situations, we could find a way to use either, but one would be more appropriate than the other.

---

## Absolute Paths

An absolute path specifies the full location of a file based on the _root of the file system._

_root_: the top-level directory of a file system. On a web server this would typically mean the main domain (ie `www.example.com/`).

An absolute path starts with a `/`, such as `/about` or `/files/something.pdf`. Even `/` by itself is an absolute path (it points to the homepage).

---

## Absolute Paths for Links

We often use absolute paths when linking to other pages on the same site.

Note that in Astro, we don't need to include a file extension (like `.html` or `.astro`) when linking to other pages on the same site - every page within the `src/pages/` directory automatically becomes a page on the site. For example `src/pages/about.astro` becomes `/about`.

---

## The `public/` Directory

In Astro, the `public/` directory is special because its contents are copied as-is to the root of your site.

This means that if you put a file in the `public/` directory, you can link to it using an absolute path starting with `/`.

For example, if you have a file at `public/files/something.pdf`, you can link to it using the absolute path `/files/something.pdf`.

---

## Relative Paths

A relative path specifies the location of a file in relation to the _current file._

A relative path does not start with a `/`. Instead, it starts with the name of a folder or file, or with `./` (which means "the current directory") or `../` (which means the directory above the current one).

We often use relative paths when importing files in Astro.

---

## Going Up and Down

When using relative paths, we can navigate the directory structure by going "up" or "down".

We can use `../` to move up one level in the directory structure.

Luckily, our code editor will usually help us with this by providing autocomplete suggestions when we start typing a path, and listing the available files and directories.

---

## When to use the `public/` Directory

- Static assets that won't be processed by Astro (usually PDFs or other files you want to serve as-is).
- Assets that need to be referenced with an absolute path (like favicons)
- _Sometimes_ images, though there are often better options.

---

## Images in Astro

In Astro, we have two different options for using images:

1. Placing images in the `public/` directory and using the `<img>` HTML tag.
2. Importing images directly into our components and using the `<Image>` component from `astro:assets`.

---

## Images in Astro: Option 1 (the HTML way)

1. Place your image in the `public/` directory of your Astro project.
2. Use the `<img>` HTML tag to reference the image using an absolute path.

```html
<img src="/images/my-photo.jpg" alt="A description of the image" />
```

This looks for `public/images/my-photo.jpg`.

---

## The Astro Way

We can also import images directly with Astro. This will allow Astro to optimize the image for us (resize, compress, convert to modern formats, etc).

This give us a lot of neat features - we can generate multiple sizes of an image for different screen sizes

---

## Images in Astro: Option 2 (the Astro way)

1. Place your image somewhere in the `src/` directory. We often will use a folder like `src/assets/images/`
2. Import the image into your component (usually using a relative path). We also need to import the Image component from `astro:assets`.

```js
import { Image } from "astro:assets";
import MyPhoto from "../../assets/images/my-photo.jpg";
```

3. Import the `Image` component from `astro:assets` and use it to display the image.

```jsx
<Image src={MyPhoto} alt="A description of the image" />
```

---

This is a bit weird at first, but it gives us a lot of power and flexibility.

[Link to Astro Image documentation](https://docs.astro.build/en/reference/modules/astro-assets/)

It gives us a neat set of properties to create responsive images that adapt to different screen sizes.

```astro
<Image
   src={MyPhoto}
   alt="A description of the image"
   layout="full-width"
   fit="cover"
/>
```

Most importantly, it means we don't have to worry about image sizes.

---

## Starting a New Project in Astro

For this project, we're going to want to put it in its own GitHub repository. This will mean we can host it at its own domain (which will be easier to share or put in your portfolio later).

---

## Starter Template

https://github.com/klalicki/astro-starter

---

## CSS Resets

Many browsers have their own default styles for HTML elements. This can lead to inconsistencies in how a website looks across different browsers. It's usually a good idea to start with a CSS reset or a CSS "normalize" stylesheet to create a consistent baseline.

---

## Fonts in Astro

We can, of course, use regular Google Fonts links and paste them into our `<head>`.

However, we also have a neat option to install and import them directly (which theoretically should load a bit faster). We will use [Fontsource](https://fontsource.org/) for this.

---

## Using Fontsource

1. Find the font you are looking for on [Fontsource](https://fontsource.org/).

2. Install the font package using npm. For example, to install the "Roboto" font:

```bash
npm install @fontsource/roboto
```

3. Then, we can import the file. We should do this in a component that will be on every page - such as `Theme.astro`

```js
import "@fontsource/roboto";
```

---

## A resource for choosing Google Fonts:

https://fontmixer.app/

---

4. Finally, we can use the font in our CSS:

```css
body {
  font-family: "Roboto", sans-serif;
}
```

---

## Slots in Astro

In Astro, we can create components that have "slots" - placeholders where we can insert content when we use the component.

---

So far, we have created components with one 'slot' that gets _all_ the content passed to it.

```astro
<div class="container">
  <slot />
</div>
```

When we use this component, everything we put between the opening and closing tags of the component gets passed into that one slot.

```astro
<Container>
  <h1>Hello World</h1>
  <p>This is some content inside the container.</p>
</Container>
```

---

We can also create components with _named slots._ This can be useful if you want to create a component that has multiple distinct areas where content can be inserted.

```astro
<div class="card">
   <div class="card-image">
      <slot name="header" />
   </div>
   <div class="card-content">
      <slot name="content" />
   </div>
</div>
```

When we use this component, we can specify which content goes into which slot by using the `slot` attribute.

```astro
<Card>
   <Image slot="header" src="/path/to/image.jpg" alt="Card Image" />
   <h2 slot="content">Card Title</h2>
   <p slot="content">This is the content of the card.</p>
</Card>
```

---

## Combining Named and Default Slots

We can also combine named slots with a default (unnamed) slot. The default slot will end up with any content that doesn't have a specific slot name.

```astro
<div class="card">
   <div class="card-image">
      <slot name="header" />
   </div>
   <div class="card-content">
      <slot  />
   </div>
</div>
```

```astro
<Card>
   <Image slot="header" src="/path/to/image.jpg" alt="Card Image" />
   <h2>Card Title</h2>
   <p>This is the content of the card.</p>
</Card>
```

---

## Component Patterns

We have several different ways to combine components in Astro, depending on how flexible they need to be. Here are a few common patterns:

---

## Using Props for Most Content

We can structure our components to use props for most of the content, and a single slot for any additional content.

```astro
const {title, imgSrc, ctaUrl} = Astro.props;
&#8208&#8208&#8208
<div class="card-container">
   <Image src={imgSrc} alt="" />
   <div class="card-content">
      <h2>{title}</h2>
      <slot />
      <CTAButton url={ctaUrl}>Learn More</CTAButton>
   </div>
</div>

```

Here's how we would use this component:

```astro
<Card title="Card Title" imgSrc={myImage} ctaUrl={"https://example.com"}>
   <p>This is the content of the card.</p>
</Card>

```

---

## Using Components for Everything

For maximum flexibility, we can use components for everything, including the title, image, and button.

```astro
<div class="card-container">
   <slot name="image" />
   <div class="card-content">
      <slot/>
   </div>
</div>
```

```astro
<Card>
   <Image slot="image" src={myImage} alt="" />
   <CardTitle>Card  Title</CardTit>
   <p>This is the content of the card.</p>
   <CTAButton url={"https://example.com"}/>
</Card>
```

---

The structure of each component should be determined by how much flexibility you need. If the content is always going to be the same, using props is usually simpler. If the content can vary widely, using slots and components gives you more control.

For example, if you have multiple types of 'cards' that contain different types of content but the same basic layout, using slots would be a good choice.

---

## Work time!
