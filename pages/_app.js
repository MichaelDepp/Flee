import * as React from "react"
import Head from "next/head"
import { ChakraProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core"
import { theme } from "@chakra-ui/theme"

const customTheme = {
    ...theme,
    fonts: {
        heading: '"Poppins", sans-serif',
        body: "system-ui, sans-serif",
        mono: "Menlo, monospace",
    },
    fontWeights: {
        normal: 400,
        medium: 500,
        bold: 700,
        xbold: 800,
        black: 900
    },
};

function App({ Component, pageProps }) {
    console.log("Hello from APP")

    return (
        <ChakraProvider theme={customTheme}>
            <ColorModeProvider>
                <CSSReset />
                <Head>
                    <title>Flee</title>
                    <link rel="shortcut icon" href="./assets/favicon.png" />
                </Head>
                <Component {...pageProps} />
            </ColorModeProvider>
        </ChakraProvider>
    )
}

export default App;
