import { GetStaticProps } from "next";
import Grid from "@mui/material/Grid";
import fs from "fs";
import matter from "gray-matter";

import Layout from "@components/Layout";
import Hero, { HeroProps } from "@components/Hero";
import Section from "@components/Section";
import Card from "@components/Card";

const hero: HeroProps = {
  overline: "dynamic landing page",
  title: "Blog Posts",
  subtitle: "New blogs get posted here",
  backgroundColor: "#556cd6",
  actions: [
    {
      id: "contact-us-cta",
      text: "Contact Us",
      href: "/contact-us",
      variant: "button-contained",
      color: "primary",
    },
  ],
};

interface Blog {
  title: string;
  description: string;
  thumbnail: string;
  slug: string;
}

interface BlogPageProps {
  blogs: Blog[];
}

export default function BlogPage({ blogs }: BlogPageProps) {
  return (
    <Layout title="Blog - Starter">
      <Hero {...hero} />
      <Section
        title="Building A Dynamic Blog Landing Page"
        body={`This page shows you how to create a dynamic content that has the latest blog posts. When new Markdown files are added to the 'blogs' folder, it will show the title, thumbnail and summary automatically. `}
      >
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="flex-start"
        >
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
      </Section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const files = fs.readdirSync("blogs");

  const blogs = files.map((file) => {
    const data = fs.readFileSync(`blogs/${file}`).toString();

    return {
      ...matter(data).data,
      slug: `blog/${file.split(".")[0]}`,
    };
  }) as Blog[];

  const props: BlogPageProps = {
    blogs,
  };
  return { props };
};
