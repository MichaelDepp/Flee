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
        semi: 600,
        bold: 700,
        xbold: 800,
        black: 900
    },
};

// 

// var firebaseConfig = {
//     apiKey: "AIzaSyCAgO4v-YEAqIC-g27l8mSRZQAq9o2waqc",
//     authDomain: "flee-1866b.firebaseapp.com",
//     databaseURL: "https://flee-1866b.firebaseio.com",
//     projectId: "flee-1866b",
//     storageBucket: "flee-1866b.appspot.com",
//     messagingSenderId: "1075023023383",
//     appId: "1:1075023023383:web:631621380b118061cf3b52",
//     measurementId: "G-FCM86CXX22"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

function App({ Component, pageProps }) {
    console.log("Hello from APP")

    return (
        <ChakraProvider theme={customTheme}>
            <ColorModeProvider>
                <CSSReset />
                <Head>
                    <title>Flee</title>
                    <link rel="shortcut icon" href="./assets/logo.png" />
                </Head>
                <Component {...pageProps} />
            </ColorModeProvider>
        </ChakraProvider>
    )
}

export default App;
