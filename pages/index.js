import {
  Box,
  Heading,
  Anchor,
  Header,
  Nav,
  Text,
  ThemeContext,
  Image,
  Paragraph,
} from "grommet";
import { Ad } from "grommet-icons";
import Head from "next/head";
import { styleHeading1, styleHeading2 } from "./theme";

export default function Home() {
  return (
    <Box
      flex="grow"
      margin={{ horizontal: "auto" }}
      width={{ max: "xlarge" }}
      height={{ min: "100%" }}
    >
      <Head>
        <title>Manylogs - Record, Replay and edit your api responses</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box fill="vertical" flex="grow">
        <SectionNavbar />
        <SectionHero />
        <SectionFeatures />
      </Box>
    </Box>
  );
}

const SectionNavbar = () => {
  return (
    <Header
      align="center"
      direction="row"
      flex={false}
      justify="between"
      gap="medium"
      fill="horizontal"
      pad="small"
    >
      <Box
        align="center"
        justify="center"
        direction="row-responsive"
        width="small"
        round="8px"
        pad="small"
      >
        <Image src="/assets/manylogs_full_logo_color_1.svg" fit="contain" />
      </Box>
      <Nav align="center" flex={false} direction="row">
        <Anchor label="Log in" color="light-1" />
        <Anchor label="Sign up" />
      </Nav>
    </Header>
  );
};

const SectionHero = () => {
  return (
    <Box align="center" justify="center" margin={{ top: "xlarge" }}>
      <ThemeContext.Extend value={styleHeading1}>
        <Heading margin="none" textAlign="center" size="large">
          Record, Replay & Edit
        </Heading>
      </ThemeContext.Extend>
      <ThemeContext.Extend value={styleHeading2}>
        <Heading margin="none" textAlign="center" size="large">
          your api responses
        </Heading>
      </ThemeContext.Extend>

      <Text
        size="large"
        textAlign="center"
        color="text-weak"
        margin={{ top: "large" }}
      >
        Built for mobile developers to easily control{<br />}the http flow of
        their apps.
      </Text>

      <Box justify="start" fill="horizontal">
        <Image src="/assets/ml_hero_illustration_1.svg" fit="contain" fill />
      </Box>
    </Box>
  );
};

const SectionFeatures = () => {
  return (
    <Box
      gap="xlarge"
      direction="column"
      align="center"
      margin={{ top: "xlarge" }}
      pad={{ horizontal: "medium", vertical: "large" }}
    >
      <Heading style={{ fontFamily: "Thicccboi Bold" }}>
        How does it work?
      </Heading>
      <Box
        direction="row-responsive"
        gap="medium"
        justify="start"
        align="center"
        fill="horizontal"
      >
        <Box width="50%">
          <Heading size="medium" level="2" style={{ margin: 0 }}>
            <u>Record</u> your api calls{<br />}as you navigate your app.
          </Heading>
          <Paragraph color="text-weak">
            The Manylogs SDK is installed in your app and works along-side your
            favorite HTTP client.
          </Paragraph>
        </Box>

        <Box
          width="600px"
          height="600px"
          background="accent-2"
          round="medium"
        />
      </Box>
      <Box
        fill="horizontal"
        direction="row-responsive"
        gap="medium"
        justify="start"
        align="center"
      >
        <Box width="50%">
          <Heading size="medium" level="2" style={{ margin: 0 }}>
            Use <u>Replay</u> to reproduce{<br />}the same api responses later.
          </Heading>
          <Paragraph color="text-weak">
            You can control everything through the Manylogs dashboard.
          </Paragraph>
        </Box>
        <Box
          width="600px"
          height="600px"
          background="accent-2"
          round="medium"
        />
      </Box>
      <Box
        fill="horizontal"
        direction="row-responsive"
        gap="medium"
        justify="start"
        align="center"
      >
        <Box width="50%">
          <Heading size="medium" level="2" style={{ margin: 0 }}>
            <u>Edit</u> replay responses to fit your needs.
          </Heading>
          <Paragraph color="text-weak">
            Change json values or the response code on the fly.
          </Paragraph>
        </Box>
        <Box
          width="600px"
          height="600px"
          background="accent-2"
          round="medium"
        />
      </Box>
    </Box>
  );
};

// Record, Replay & Edit {<br />}your api responses
