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
import Head from "next/head";
import { styleHeading1, styleHeading2 } from "../util/theme";
import { useResponsiveContext } from "../util/util";

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
        <Image src="/assets/ml_full_logo_all_white.svg" fit="contain" alt="" />
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
        <Image
          src="/assets/ml_hero_illustration_1.svg"
          fit="contain"
          fill
          alt=""
        />
      </Box>
    </Box>
  );
};

const SectionFeatures = () => {
  const size = useResponsiveContext();
  const isMobile = size === "small" || size === "xsmall";
  const Title1 = () => (
    <>
      <u>Record</u> your api calls{<br />}as you navigate your app.
    </>
  );
  const subtitle1 =
    "The Manylogs SDK is installed in your app and works along-side your favorite HTTP client.";

  const Title2 = () => (
    <>
      Use <u>Replay</u> to reproduce{<br />}the same api responses later.
    </>
  );

  const subtitle2 = "You can control everything through your dashboard.";

  const Title3 = () => (
    <>
      <u>Edit</u> replay responses to fit your needs.
    </>
  );
  const subtitle3 = "Change json values or the response code on the fly.";

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
      <SectionFeature
        title={<Title1 />}
        subtitle={subtitle1}
        image="/assets/ml_feature_1_record.svg"
        direction={isMobile ? "mid" : "right"}
      />
      <SectionFeature
        title={<Title2 />}
        subtitle={subtitle2}
        direction={isMobile ? "mid" : "left"}
        image="/assets/ml_feature_2_replay.svg"
      />
      <SectionFeature
        title={<Title3 />}
        subtitle={subtitle3}
        direction={isMobile ? "mid" : "right"}
        image="/assets/ml_feature_3_edit.svg"
      />
    </Box>
  );
};

const SectionFeature = ({ title, subtitle, image, direction }) => {
  const DirectionRight = () => (
    <Box
      fill="horizontal"
      direction="row-responsive"
      gap="medium"
      align="center"
    >
      <Box width="50%" align="start">
        <Heading size="medium" level="2" style={{ margin: 0 }}>
          {title}
        </Heading>
        <Paragraph color="text-weak">{subtitle}</Paragraph>
      </Box>
      <Box>
        <Image src={image} alt="" />
      </Box>
    </Box>
  );

  const DirectionLeft = () => (
    <Box
      fill="horizontal"
      direction="row-responsive"
      gap="medium"
      align="center"
    >
      <Box>
        <Image src={image} alt="" />
      </Box>
      <Box width="50%" align="end">
        <Box align="start">
          <Heading size="medium" level="2" style={{ margin: 0 }}>
            {title}
          </Heading>
          <Paragraph color="text-weak">{subtitle}</Paragraph>
        </Box>
      </Box>
    </Box>
  );

  const DirectionMid = () => (
    <Box fill="horizontal" direction="column" justify="center" align="center">
      <Box align="center" fill="horizontal">
        <Heading textAlign="center" size="medium" level="2">
          {title}
        </Heading>
      </Box>
      <Box>
        <Image src={image} alt="" />
      </Box>
      <Box>
        <Paragraph textAlign="center" color="text-weak">
          {subtitle}
        </Paragraph>
      </Box>
    </Box>
  );

  switch (direction) {
    case "right":
      return <DirectionRight />;
    case "left":
      return <DirectionLeft />;
    default:
      return <DirectionMid />;
  }
};

// Record, Replay & Edit {<br />}your api responses
