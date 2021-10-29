import { Box, Heading, Anchor, Header, Nav, Text, ThemeContext } from "grommet";
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
      <Box fill="vertical" background="background-contrast" flex="grow">
        <SectionNavbar />
        <SectionHero />
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
      background={{ color: "black" }}
      pad="small"
    >
      <Box
        align="center"
        justify="center"
        direction="row-responsive"
        gap="small"
      >
        <Ad color="accent-1" size="large" />
        <Heading level="2">Manylogs</Heading>
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
    <Box
      align="center"
      justify="center"
      margin={{ top: "xlarge" }}
      pad={{ horizontal: "large" }}
    >
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
    </Box>
  );
};

// Record, Replay & Edit {<br />}your api responses
