---
title: Making a Component with Astro
---

In your `src/components` folder, create a new file called `ComponentName.astro` (with whatever name you want to use). We should name the file with an uppercase letter, to indicate that it's a component.

In the file, set up the basic structure:

```astro
---

---

<!-- Any HTML you want in the component goes here -->
<!-- For this example we're using a link (<a>) but you can use any HTML here  -->

<a href=""></a>

<style>
     /* style for the component goes here */
    a{

    }
</style>
```

To use this component in another page, we need to import it at the top of the page (inside the `---` section):

```astro
---
import Button from "@components/Button.astro";
---

```

We can then use the component in the HTML of the page, just like any other HTML element:

```astro

<body>
   <Button/>
</body>
```

## Adding Properties (props)

At the top of the component `astro` file, inside the `---` section, we can define properties (or "props") that can be passed into the component when we use it.

```astro
---
const {href}=Astro.props;
---
```

We can then use the value of this `href` property anywhere in the component HTML, wrapped in curly braces `{}`:

```astro
<a href={href}>My Button</a>
```

You can add as many properties as you want, just separate them with commas:

```astro
---
const {href, title}=Astro.props;
---
<a href={href}>
{title}
</a>
```

When we use the component, we can pass in values for these properties as attributes on the component tag:

```astro
<Button href="https://example.com" title="Click Here"/>
```

### Setting Default Values for Props

If we want to set a default value for a prop, in case it isn't passed in when the component is used, we can do that when we define the prop, using an equals sign (`=`):

```astro
---
const {href="https://default.com", title="Default Title"}=Astro.props;
---
<a href={href}>
{title}
</a>
```

Now, if we use the component without providing a value for `href` or `title`, it will use the default values we set.

## Putting Other Components/Elements Inside

We can set up our component to accept other elements/components inside it, using the `<slot/>` tag. This is a placeholder that will be replaced with whatever is put inside the component when we use it.

```astro
<a href={href}>

<slot/>

</a>
```

Then, when we use the component, we can put any content we want between the opening and closing tags:

```astro
<Button href="https://example.com">Click Here</Button>
```
