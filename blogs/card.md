---
title: Card.tsx
description: Card
thumbnail: /images/image-2.jpg
image: /images/image-2.jpg
---

# Card
Extends the MUI Card Component to add addtional options. CSS Selectors for props have been shown below. For a full list please visit the docs for [MUICard](https://mui.com/api/card/)

## Props
| Prop      | Type |  Description |  CSS Selector |
| ----------- | ----------- | ----------- | ----------- |
| title      | string       | The primary heading of the card       | .MuiTypography-h5       |
| body   | string        | Standard paragraph text       | .MuiTypography-body1        |
| variant   | string        | used to change the design variant       | N/A        |
| actions   | Link[]      | array of Link items that allow you to have multiple actions a user can click on       | .MuiCardActions-root        |
| link   | Text        | Used when there is only one action and you want the entire card linkable       | N/A        |
| media   | Media        | string       | .MuiCardMedia-img        |
| reverse   | Text        | Controls the `flexDirection: row-reverse` to reverse the flow of the content.       | N/A        |


## Variations
### `feature`
![](/images/components/card/feature.png)
#### Code Example
```javascript
<Card
  title="Component Based Design"
  variant="feature"
  media={{
    title: "Card Feature",
    src: "/images/browser.svg",
  }}
/>
```

### `side`
![](/images/components/card/side.png)
```javascript
<Card
  title="Component Based Design"
  body="This template provides you with examples of common components used when building todays modern marketing websites. Using Material UI as a baseline, you will find examples of Page Layout, Collections, Header, Footer, Forms, Hero, Slider, Pricing Table, Media, Advanced Link options. Use these components in your own project to see examples of how to extend the MUI framework to start to build your own set of custom design and functionality options"
  variant="side"
  media={{
    title: "Card Side",
    src: "/images/image-1.jpg",
  }}
  actions={[
    {
      id: "learn-more",
      text: "Learn More",
      href: "/",
      variant: "button-contained",
      color: "secondary",
    },
  ]}
/>
```

### `blog`
![](/images/components/card/blog.png)
```javascript
<Card
  title="My First Blog Post"
  body="Qui ipsorum lingua Celtae, nostra Galli appellantur. Fictum, deserunt mollit anim laborum astutumque!"
  variant="blog"
  media={{
    title: "My Photo",
    src: "/images/image-1.jpg",
  }}
  link={{ href: "/blogs/my-first-blog-post" }}
/>
```

### `quote`
![](/images/components/card/blog.png)
```javascript
 <Card
  key="slide-1"
  title="Jane Doe"
  body="This template is amazing!"
  variant="quote"
  media={{
    title: "Card Quote",
    src: "https://gravatar.com/avatar/ca3e759828fb9f0a8bd6c38f122a16e5?s=400&d=robohash&r=x",
  }}
/>
```