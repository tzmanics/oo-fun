import Container from "@mui/material/Container";
import { GetStaticPaths, GetStaticProps } from "next";
import fs from "fs";
import matter from "gray-matter";

import Layout from "@components/Layout";
import Hero, { HeroProps } from "@components/Hero";
import Text from "@components/Text";

interface BlogPageProps {
  content: string;
  meta: {
    title: string;
    description: string;
    thumbnail: string;
    image: string;
  };
}

export default function BlogPage({
  meta,
  content,
}: BlogPageProps) {
  return (
    <Layout title="Blog - Starter" disabledScroll>
      <Hero
        title={meta.title}
        subtitle={meta.description}
        background={{ title: meta.title, src: meta.image }}
        sx={{ "& div:nth-of-type(1)": { minHeight: 500, pt: 5 } }}
        maxWidth="lg"
      />
      <Container maxWidth="lg">
        <Text>{content}</Text>
      </Container>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync("blogs");
  const paths = files.map((file) => ({
    params: {
      slug: `${file.split(".")[0]}`,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const slug = context.params?.slug;

    const content = fs.readFileSync(`blogs/${slug}.md`).toString();

    const info = matter(content);

    const blog = {
      meta: {
        ...info.data,
        slug,
      },
      content: info.content,
    };

    return {
      props: {
        ...blog,
      },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};
