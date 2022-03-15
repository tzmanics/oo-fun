---
title: Section.tsx
description: Groups of components you want to control.
thumbnail: /images/image-2.jpg
image: /images/image-2.jpg
---

# Section

A section is a group of components you want to control together on the grid. They are usually lists of cards, links, media items, or any other component.

## Props

| Prop            | Type         | Description                                                            | CSS Selector         |
| --------------- | ------------ | ---------------------------------------------------------------------- | -------------------- |
| title           | string       | The primary heading of the Section                                     | .MuiTypography-h3    |
| body            | string       | Standard paragraph text                                                | .MuiTypography-body1 |
| backgroundColor | string       | used to change the backgroundColor                                     | N/A                  |
| background      | Media        | Add a background image to section                                      | .MuiCardMedia-img    |
| color           | Text         | Adjust the color of the text                                           | N/A                  |
| children        | ReactElement | Any React Component                                                    | .MuiGrid-container   |
| sx              | SxProps      | Property used to override the global styles for an individual instance | N/A                  |

## Variations

### `default`

![](/images/components/section/default.png)

#### Code Example

```javascript
const blogs = myFunctionToGetBlogListData();

<Section
  title="Some cool section"
  body={`This page shows you how to create a dynamic content that has the latest blog posts. When new Markdown files are added to the 'blogs' folder, it will show the title, thumbnail and summary automatically. `}
>
  <Grid container spacing={4} alignItems="center" justifyContent="flex-start">
    {blogs.map((blog) => (
      <Grid item key={blog.slug}>
        <Card
          title={blog.title}
          body={blog.description}
          variant="blog"
          media={{
            title: blog.title,
            src: blog.thumbnail,
          }}
          link={{ href: blog.slug }}
        />
      </Grid>
    ))}
  </Grid>
</Section>;
```
