# NextJS, Material UI Themes, Netlify Starter

A customizable component based starter using:

- [Next.js](https://github.com/vercel/next.js) v12.1
- [Material UI v5.4](https://mui.com/) with [Component Theme](https://mui.com/customization/theming/) Support
- Netlify Serverless Functions
- Netlify Forms
- [Netlify ISR](https://www.netlify.com/blog/2021/12/14/next.js-on-netlify-latest-update-introduces-complete-support-for-isr-now-with-revalidate/) Pre-Configured

## Template Features

- Component Based Page Design
- Examples using MUI Themes to change component variants using only CSS
- Link Component with support for FontAwesome, MUIButton, and Next/Link built in
- Hero Component using props to configure content and design
- Card Component using MUI theme variants
- Dynamic Blog Landing Page
- Pricing Page example
- Netlify Forms Example
- Netlify Functions Example

# Getting Started

## Setting Up Locally

If you're doing it locally, start with clicking the use this template button on GitHub. This will create a new repository with this template's files on your GitHub account. Once that is done, clone your new repository and navigate to it in your terminal.

From there, you can install the project's dependencies by running:

```shell
yarn install
```

Finally, you can run your project locally with:

```shell
yarn dev
```

Open your browser and visit <http://localhost:3000>, your project should be running!

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

# Project Structure

The project has 4 main folders

- `blogs`: This is where the blogs that are rendered under the `/blog/[slug]` are created. These blogs are created using [Markdown](https://www.markdownguide.org/). The slug is given by the name of the file. Each blog will also be rendered as a card under the `/blog` page.
- `pages`: This is where all the pages that NextJS will rendered are created. Refer to [NextJS Pages](https://nextjs.org/docs/basic-features/pages) for more information.
- `public`: This is where all the static files (e.g. images) that will be publicly served are stored. Refer to [NextJS Static File Serving](https://nextjs.org/docs/basic-features/static-file-serving) for more information
- `src`: Under the `src` folder there are 2 main folders. The `components` folder in which components are created, and the `theme` folder in which all theme related aspects of the site are created.

## NextJS

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

# Customizing this template

There are two main ways you can edit the content for this template to showcase two common use cases.

## Adding new Blog Posts

- Markdown: We use Markdown files for the blogs list. This allows us to create a standard template to follow for more structured content

## New Pages

- These are the components located in the `pages` folder. For the purposes of this template we have included the JSON in the component so you can easily see what the component is doing, just change the default values and make it your own. You could update it to have this data come from a headless CMS for ultimate flexability.

### Global Elements

> `src/components/Layout/Layout.tsx`

The `Layout` component allows you to change the content for the global elements on the page. You can update your logo, top navigation links and footer information

# Material UI Themes and CSS Styles

The theme specifies the color of the components, darkness of the surfaces, level of shadow, appropriate opacity of ink elements, etc. Themes let you apply a consistent tone to your app. It allows you to customize all design aspects of your project in order to meet the specific needs of your business or brand.

## Themes

Read the full documentation on [Material UI Themes here](https://mui.com/customization/theming/)

> `src/theme/theme.ts`

This file is where all of the global styles are located. Material UI themes are new as of version 5.0 of MUI. It gives you more flexability and reusability by enabling the same component to use different variations for design while keeping the functionality it provides. It also allows you to create multiple sites with the same comnponent functionality and have a very different look and feel by simply changing the theme file.

```json
{
  palette: {
    // https://mui.com/customization/palette/
  },
  typography: {
    // https://mui.com/customization/typography/
  },
  spacing: {
    // https://mui.com/customization/spacing/
  },
  spacing: {
    // https://mui.com/customization/spacing/
  },
  breakpoints: {
    // https://mui.com/customization/breakpoints/
  },
  zIndex: {
    // https://mui.com/customization/z-index/
  },
  transitions: {
    // https://mui.com/customization/transitions/
  }
  components: {
    // https://mui.com/customization/theme-components/
  },
  customVariable: {
    // https://mui.com/customization/theming/#custom-variables
  }
}
```

## Component Variations

We use component variations for addding a new style that can be accomplished using only CSS. If you wanted to create a new variation you could add it to the `components` property of the `src/theme/theme.ts` file:

> Example:

```json
MuiCard: {
  variants: [
    {
      props: {
        variant: "feature",
      },
      style: {
        maxWidth: 300,
        "& .MuiCardMedia-img": {
          objectFit: "contain",
        },
        "& .MuiCardContent-root": {
          textAlign: "center",
        },
        "& .MuiCardActions-root": {
          justifyContent: "center",
        },
      },
    },
  ]
}
```

# Netlify Features

## Functions

Serverless functions open a world of possibilities for running on-demand, server-side code without having to run a dedicated server. However, managing service discovery, configuring API gateways, and coordinating deployments between your app and your functions can quickly become overwhelming.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

Netlify automatically turns these files into Netlify functions.

## Forms

Manage forms and submissions without any server-side code or JavaScript.
[Learn More](https://docs.netlify.com/forms/setup/)

[![](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=)
