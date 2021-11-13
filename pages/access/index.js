import Head from "next/head";
import {
  Box,
  Text,
  ThemeContext,
  Heading,
  Form,
  Anchor,
  TextInput,
  FormField,
  Button,
  Header,
  Nav,
  Image,
} from "grommet";
import { useState } from "react";
import { themeContexAccessForm } from "../../util/theme";
import { submitRequestForm } from "../../util/http";
import { StatusGood, StatusCritical } from "grommet-icons";

export default function PageRequestAccess() {
  return (
    <Box
      flex="grow"
      margin={{ horizontal: "auto" }}
      width={{ max: "xlarge" }}
      height={{ min: "100%" }}
    >
      <Head>
        <title>Request Access</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Request access to Manylogs for your Android or iOS app."
        />
      </Head>
      <Box fill="vertical" flex="grow">
        <NavHeader />
        <RequestForm />
      </Box>
    </Box>
  );
}

const NavHeader = () => {
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
      <Anchor href="/">
        <Box
          align="center"
          justify="center"
          direction="row-responsive"
          width="150px"
          round="8px"
          pad="small"
        >
          <Image
            src="/assets/ml_full_logo_all_white.svg"
            fit="contain"
            alt=""
          />
        </Box>
      </Anchor>
    </Header>
  );
};

const RequestForm = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    platform: "",
    client: "",
  });
  const resetForm = () => {
    setValue({
      name: "",
      email: "",
      platform: "",
      client: "",
    });
  };
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const onFormSubmit = (data) => {
    submitRequestForm(data, (isSubmitted) => {
      if (isSubmitted) {
        resetForm();
        setSuccess(true);
      } else setError(true);
    });
  };
  return (
    <ThemeContext.Extend value={themeContexAccessForm}>
      <Box align="center" pad="large">
        <Box width="xmedium" round="xsmall" pad="40px" gap="small">
          <Box align="center" pad={{ bottom: "medium" }}>
            <Heading size="small" level={2} margin="small">
              Request Access to Manylogs
            </Heading>
            <Text color="text-weak" size="16px">
              Do you have an app and want to try Manylogs?
            </Text>
          </Box>
          <Form
            value={value}
            onChange={(nextValue) => setValue(nextValue)}
            onSubmit={({ value: nextValue }) => onFormSubmit(nextValue)}
          >
            <FormField label="Name *" name="name" required>
              <TextInput
                name="name"
                type="text"
                placeholder="Your full name"
                plain
              />
            </FormField>

            <FormField label="Work email *" name="email" required>
              <TextInput
                name="email"
                type="email"
                placeholder="you@company.com"
                plain
              />
            </FormField>

            <FormField label="Platform *" name="platform" required>
              <TextInput
                name="platform"
                type="text"
                placeholder="Android / iOS / Other"
                plain
              />
            </FormField>

            <FormField
              label="Http Client (leave blank if unknown)"
              name="client"
            >
              <TextInput
                name="client"
                type="text"
                placeholder="OkHttp / URLSession / Other"
                plain
              />
            </FormField>

            <Box
              direction="column"
              justify="center"
              align="center"
              gap="small"
              margin={{ top: "large" }}
            >
              <Button type="submit" label="Send request" fill primary />
              <Box
                margin={{ top: "medium" }}
                direction="column"
                align="center"
                gap="xsmall"
              >
                {success && <SuccessMessage message="Request was sent!" />}
                {error && <ErrorMessage message="Something went wrong." />}
              </Box>
            </Box>
          </Form>
        </Box>
      </Box>
    </ThemeContext.Extend>
  );
};

const SuccessMessage = ({ message }) => {
  return (
    <Box direction="row" fill="horizontal" gap="small">
      <Text color="green">{message}</Text>
      <StatusGood color="green" />
    </Box>
  );
};

const ErrorMessage = ({ message }) => {
  return (
    <Box direction="row" fill="horizontal" gap="small">
      <Text color="red">{message}</Text>
      <StatusCritical color="red" />
    </Box>
  );
};
