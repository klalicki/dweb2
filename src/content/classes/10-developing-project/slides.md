## Welcome to **Design for the Web 2**

_DES491 - Fall 2025_

Let's make some Web Sites!

---

## Today in Class

- File Paths
- Images in Astro
- Starting a New Project in Astro

---

## File Paths

On computers, files are typically organized in a tree-like structure of folders/directories.

When we link to files (like images, stylesheets, or other pages) we need to specify the _path_ to that file.

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
