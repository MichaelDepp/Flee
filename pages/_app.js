import * as React from "react"
import Head from "next/head"
import { ChakraProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core"
import { theme } from "@chakra-ui/theme"
import firebase from "../firebase/firebase"
import { useState, useEffect } from "react"
import Spinner from "../components/Spinner"

const bamini = "../font/Bamini.ttf"
const Trinco = "../font/Trinco.ttf"

const customTheme = {
    ...theme,
    fonts: {
        heading: '"Poppins", sans-serif',
        body: "system-ui, sans-serif",
        mono: "Menlo, monospace",
        tamil: "bamini, amudham",
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
    const [lessons, setLessons] = useState([]);
    const [loading, setLoading] = useState(false);
    const ref = firebase.firestore().collection("lessons")
    function getLesson() {
        setLoading(true)
        ref.get().then((item) => {
            const items = item.docs.map((doc) => doc.data())
            setLessons(items)
            setLoading(false)
        })
    }

    useEffect(() => {
        getLesson()
    }, [])

    if (loading) {
        return <Spinner></Spinner>
    }

    return (
        <ChakraProvider theme={customTheme}>
            <ColorModeProvider>
                <Head>
                    <title>Flee</title>
                    <link rel="shortcut icon" href="./assets/logo.png" />
                </Head>
                <Component {...pageProps} lessons={lessons} />
            </ColorModeProvider>
        </ChakraProvider>
    )
}

export default App;
