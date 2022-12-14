import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <CustomFonts />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export const CustomFonts = () => (
  <>
    <link
      rel="preload"
      href="assets/fonts/THICCCBOI-Black.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="true"
    />
    <link
      rel="preload"
      href="assets/fonts/THICCCBOI-Bold.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="true"
    />
    <link
      rel="preload"
      href="assets/fonts/THICCCBOI-Medium.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="true"
    />
    {/* <link
      rel="preload"
      href="assets/fonts/THICCCBOI-ThicccAF.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="true"
    />

    <link
      rel="preload"
      href="assets/fonts/THICCCBOI-Light.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="true"
    />
    <link
      rel="preload"
      href="assets/fonts/THICCCBOI-Regular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="true"
    />
    <link
      rel="preload"
      href="assets/fonts/THICCCBOI-ExtraBold.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="true"
    />
    <link
      rel="preload"
      href="assets/fonts/THICCCBOI-SemiBold.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="true"
    />
    <link
      rel="preload"
      href="assets/fonts/THICCCBOI-Thin.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="true"
    /> */}
  </>
);

export default MyDocument;
