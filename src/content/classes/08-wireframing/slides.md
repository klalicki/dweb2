## Welcome to **Design for the Web 2**

_DES491 - Fall 2025_

Let's make some Web Sites!

---

## Today in Class

- Reviewing Homework
- Review Components
- More Advanced Components
- Wireframing
- Individual Meetings: Project 1 Ideas

---

## Review: Components

Components are reusable pieces of code that can be used throughout a website. They help keep our code organized and make it easier to maintain.

Why use components?

- Reusability
- Maintainability
- Consistency

---

## Another Benefit of Components: Organization/Readability

Rather than having a single large file with all of our HTML & CSS, we can break our code into smaller, more manageable pieces (even if we aren't reusing them).

This makes it easier to find and update specific parts of our code, since we can focus on one component at a time.

```astro
<Layout>
  <Header/>
  <body>
    <HeroSection/>
    <MainSection1/>
    <MainSection2/>
  </body>
  <Footer/>
</Layout>
```

---

## Advanced Components

We have some more advanced features we can use in Astro components.

- Named Slots

---

## Named Slots

We can create components that have multiple "slots" for content. This can be useful when our component has multiple separate areas we want to fill with different types of content.
