import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import axios from "axios";

import Layout from "@components/Layout";
import Hero, { HeroProps } from "@components/Hero";
import Section from "@components/Section";
import Card from "@components/Card";
import Form from "@components/Form";
import Slider from "@components/Slider";
import Link from "@components/Link";

const hero: HeroProps = {
  overline: "start",
  title: "Building the",
  subtitle: "Modern Web",
  image: {
    title: "Hero Illustration",
    src: "/images/illustration-1.svg",
  },
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

export default function HomePage() {
  const [positions, setPositions] = useState<any[]>([]);

  useEffect(() => {
    const getPositions = async () => {
      try {
        const { data } = await axios.get("/api/jobs");
        setPositions(data.positions);
      } catch (err) {}
    };

    getPositions();
  }, []);

  return (
    <Layout title="Home - Starter">
      <Hero {...hero} />
      <Section
        title="NextJS, Material UI Themes, Netlify Starter"
        body={`Component based design is at the core of any JAMstack website. This template will show you examples of how you can build new pages, based of a set of standard and customized components. It also shows the power of Material UI Themes which allow you to style many components with CSS alone, shortening development time without loosing design flexability.`}
        sx={{ my: 16 }}
      >
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Grid item>
            <Card
              title="Netlify"
              variant="feature"
              media={{
                title: "Card Feature",
                src: "/images/netlify.png",
              }}
            />
          </Grid>
          <Grid item>
            <Card
              title="NextJS"
              variant="feature"
              media={{
                title: "NextJS",
                src: "/images/nextjs.png",
              }}
            />
          </Grid>
          <Grid item>
            <Card
              title="Material UI"
              variant="feature"
              media={{
                title: "Material UI",
                src: "/images/mui.png",
              }}
            />
          </Grid>
        </Grid>
      </Section>
      <Section
        backgroundColor="common.black"
        title="Develop and Ship faster"
        body="The easiest way to start your new site"
        color="common.white"
        sx={{
          height: 240,
          "& .MuiContainer-root": { height: "100%" },
          "& .MuiTypography-h3": { mb: 0 },
          '& [class*="Text-root"]': { mb: 0 },
          "& .MuiTypography-body1": { color: "#888888" },
        }}
      >
        <Link
          text="Start Building"
          href="/pricing"
          variant="button-contained"
          sx={{ mt: 2 }}
        />
      </Section>
      <Section title="Template Features" sx={{ my: 16 }}>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Grid item xs={12}>
            <Card
              title="Common web component examples"
              body="This template provides you with examples of common components used when building todays modern marketing websites. Using Material UI as a baseline, you will find examples of Page Layout, Sections, Header, Footer, Forms, Hero, Slider, Pricing Table, Media, Advanced Link options. Use these components in your own project to see examples of how to extend the MUI framework to start to build your own set of custom design and functionality options"
              variant="side"
              media={{
                title: "Card Side",
                src: "/images/web-components.png",
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
          </Grid>
          <Grid item xs={12}>
            <Card
              title="Material UI Themes to ensure brand consistency"
              body="The theme specifies the color of the components, darkness of the surfaces, level of shadow, appropriate opacity of ink elements, etc. Themes let you apply a consistent tone to your app. It allows you to customize all design aspects of your project in order to meet the specific needs of your business or brand."
              variant="side"
              reverse
              media={{
                title: "Card Side",
                src: "/images/mui-theme.png",
              }}
              actions={[
                {
                  id: "learn-more",
                  text: "Learn More",
                  href: "https://mui.com/customization/theming/",
                  variant: "button-contained",
                  color: "secondary",
                },
              ]}
            />
          </Grid>
          <Grid item xs={12}>
            <Card
              title="Built by Experts"
              body="Last Rev specializes in building content-driven websites on the JAMStack architecture. The frameworks and starters that we actively invest in help get developers up and running quickly. We offer out-of-the-box components and integrations that scale with you as your organization grows."
              variant="side"
              media={{
                title: "Card Side",
                src: "/images/lastrev.png",
              }}
              actions={[
                {
                  id: "learn-more",
                  text: "Learn More",
                  href: "https://www.netlify.com/experts-directory/last-rev/",
                  variant: "button-contained",
                  color: "secondary",
                },
              ]}
            />
          </Grid>
        </Grid>
      </Section>
      <Container maxWidth="xl">
        <Form
          name="contact-form"
          body="Manage forms and submissions without any server-side code or JavaScript with Netlify"
          submitLabel="Subscribe"
          fields={[
            {
              id: "email",
              name: "email",
              label: "Email",
              type: "email",
              placeholder: "Add your email",
            },
          ]}
        />
      </Container>
      <Container maxWidth="lg">
        <Slider
          title="This is what everyone is saying"
          sx={{
            py: 8,
            "& .MuiTypography-h3": { fontSize: 24 },
            "& .swiper-slide": { maxWidth: 320 },
          }}
          slidesPerView={2}
          centeredSlides
          pagination
        >
          <Card
            key="slide-1"
            title="John Doe"
            body="This is amazing"
            variant="quote"
            media={{
              title: "Card Quote",
              src: "https://gravatar.com/avatar/ca3e759828fb9f0a8bd6c38f122a16e5?s=400&d=robohash&r=x",
            }}
          />
          <Card
            key="slide-2"
            title="Jane Doe"
            body="This is amazing"
            variant="quote"
            media={{
              title: "Card Quote",
              src: "https://gravatar.com/avatar/05428f07bbcde2696c143d33f8baa119?s=400&d=robohash&r=x",
            }}
          />
          <Card
            key="slide-3"
            title="Julie Doe"
            body="This is amazing"
            variant="quote"
            media={{
              title: "Card Quote",
              src: "https://gravatar.com/avatar/af32b839ecd8e84cbab6363425b65ff9?s=400&d=robohash&r=x",
            }}
          />
          <Card
            key="slide-4"
            title="Joe Doe"
            body="This is amazing"
            variant="quote"
            media={{
              title: "Card Quote",
              src: "https://gravatar.com/avatar/9cb61e19d3bc45b37c4013e3e51d1c97?s=400&d=robohash&r=x",
            }}
          />
        </Slider>
      </Container>
      <Container maxWidth="lg">
        <Slider
          title="Current positions"
          sx={{
            py: 8,
            "& .MuiTypography-h3": { fontSize: 24 },
            "& .swiper-slide": { maxWidth: 320 },
          }}
          slidesPerView={2}
          centeredSlides
          pagination
        >
          {positions.slice(0, 5).map((position) => (
            <Card key={position.slug} body={position.title} variant="quote" />
          ))}
        </Slider>
      </Container>
    </Layout>
  );
}
