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
  Button,
  Footer,
  Layer,
  Stack,
} from "grommet";
import Head from "next/head";
import { styleHeading1, styleHeading2 } from "../util/theme";
import { GradientBox } from "../util/components";
import { useResponsiveContext } from "../util/util";
import { HOST } from "../util/context";

export default function Home() {
  const size = useResponsiveContext();
  const isMobile = size === "small" || size === "xsmall";
  return (
    <Box
      flex="grow"
      margin={{ horizontal: "auto" }}
      width={{ max: "xlarge" }}
      height={{ min: "100%" }}
    >
      <Head>
        <title>Manylogs - Record, Replay and Edit your api responses</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <meta
          name="description"
          content="With Manylogs you can record, replay and edit your api responses in Android & iOS. Built for mobile developers to easily control
the http flow of their apps."
        />
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        ></link>
        <script
          src="https://assets.calendly.com/assets/external/widget.js"
          type="text/javascript"
          async
        ></script>
      </Head>
      <Box fill="vertical" flex="grow" gap="xlarge">
        <SectionNavbar />
        <SectionHero />
        <SectionFeatures isMobile={isMobile} />
        <SectionGetStarted isMobile={isMobile} />
        <MyFooter />
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
        width="150px"
        round="8px"
        pad="small"
      >
        <Image src="/assets/ml_full_logo_all_white.svg" fit="contain" alt="" />
      </Box>
      <Nav align="center" flex={false} direction="row">
        <Anchor label="Log in" color="light-1" href={`${HOST}/login`} />
        <Anchor label="Sign up" href={`${HOST}/signup`} />
      </Nav>
    </Header>
  );
};

const MyFooter = () => {
  const year = new Date().getFullYear();
  return (
    <Footer justify="center" pad="small">
      <Text textAlign="center" size="small">
        © {year} Copyright Manylogs
      </Text>
    </Footer>
  );
};

const SectionHero = () => {
  const loadCalendar = () =>
    Calendly.initPopupWidget({ url: "https://calendly.com/manylogs/15min" });
  return (
    <Box align="center" justify="center">
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
        margin={{ top: "medium" }}
      >
        Built for mobile developers to easily control{<br />}the http flow of
        their apps.
      </Text>

      <Box direction="row-responsive" margin={{ top: "large" }} gap="medium">
        <Button label="Request Access" width="large" primary href={`/access`} />
        <Button
          label="Book quick Demo"
          width="large"
          secondary
          onClick={loadCalendar}
        />
      </Box>

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

const SectionFeatures = ({ isMobile }) => {
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

const SectionGetStarted = ({ isMobile }) => {
  return (
    <Box pad="medium">
      <Stack fill>
        <GradientBox height={isMobile ? "300px" : "small"} />
        <ComponentGetStarted isMobile={isMobile} />
      </Stack>
    </Box>
  );
};

const ComponentGetStarted = ({ isMobile }) => {
  return (
    <Box
      direction="row-responsive"
      align="center"
      justify={isMobile ? "center" : "start"}
      gap="large"
      fill="horizontal"
      round="medium"
      border
      background="background"
      pad="large"
    >
      <Box
        direction="column"
        align={isMobile ? "center" : "start"}
        width={isMobile ? "100%" : "60%"}
      >
        <Heading
          level="2"
          style={{ fontFamily: "Thicccboi Bold", margin: 0 }}
          textAlign={isMobile ? "center" : "start"}
        >
          Getting started is easy
        </Heading>
        <Paragraph color="text-weak" textAlign={isMobile ? "center" : "start"}>
          Install the SDK in your app and use the Manylogs dashboard to make
          changes.
        </Paragraph>
      </Box>

      <Box width={isMobile ? "100%" : "40%"}>
        <Button
          onClick={() => {}}
          style={{ fontFamily: "Thicccboi Black" }}
          label="Install SDK"
          fill
          primary
          size="large"
        />
      </Box>
    </Box>
  );
};

// Record, Replay & Edit {<br />}your api responses
