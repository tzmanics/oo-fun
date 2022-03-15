import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Person from "@mui/icons-material/Person";
import BrightnessLow from "@mui/icons-material/BrightnessLow";
import Chair from "@mui/icons-material/Chair";
import DirectionsCar from "@mui/icons-material/DirectionsCar";
import DownhillSkiing from "@mui/icons-material/DownhillSkiing";
import Flight from "@mui/icons-material/Flight";
import Marquee from "react-fast-marquee";

import Layout from "@components/Layout";
import PricingTable from "@components/PricingTable";
import Section from "@components/Section";
import Form from "@components/Form";

export default function ContactUsPage() {
  return (
    <Layout title="Pricing - Starter">
      <Box bgcolor="#f7f9fc">
        <Section
          sx={{ mb: 0, mt: 12 }}
          backgroundColor="#f7f9fc"
          title="Trusted by the most innovative icons"
        >
          <Box
            component={Marquee}
            speed={100}
            gradientColor={[247, 249, 252]}
            height={160}
          >
            <Person color="primary" sx={{ fontSize: 64, mx: 4 }} />
            <BrightnessLow color="primary" sx={{ fontSize: 64, mx: 4 }} />
            <Chair color="primary" sx={{ fontSize: 64, mx: 4 }} />
            <DirectionsCar color="primary" sx={{ fontSize: 64, mx: 4 }} />
            <DownhillSkiing color="primary" sx={{ fontSize: 64, mx: 4 }} />
            <Flight color="primary" sx={{ fontSize: 64, mx: 4 }} />
          </Box>
        </Section>
        <Box
          component="svg"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            width: "100%",
            mb: -1,
            "& path": {
              fill: "white",
            },
          }}
        >
          <path d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"></path>
        </Box>
      </Box>
      <Container maxWidth="xl" sx={{ my: 8 }}>
        <Typography variant="h1" textAlign="center" gutterBottom>
          Pricing
        </Typography>
        <PricingTable />
      </Container>
      <Container maxWidth="xl">
        <Form
          name="contact-form"
          body="Stay up to date with all Starter news"
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
          border="none"
        />
      </Container>
    </Layout>
  );
}
