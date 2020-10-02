import { Button, Heading, useColorMode, useColorModeValue, Wrap, IconButton, Box, Stack, HStack, VStack, Container, Flex, Center } from "@chakra-ui/core"
import Layout from "../components/Layout"
import Boximage from "../components/Boximage"
import Link from "next/link"

function Lesson() {

    const { colorMode, toggleColorMode } = useColorMode()

    const bg = useColorModeValue("#00102A", "#F8F8F8")
    const color = useColorModeValue("#F8F8F8", "#00102A")
    const btn = "#304FFF"
    const sbtn = useColorModeValue("#F8F8F8", "#304FFF")
    return (
        <Layout>
            <Center>
                <Heading fontWeight="xbold" fontSize="4xl" mt={4} color={sbtn}>
                    Lesson
            </Heading>
            </Center>
            <HStack overflowX="scroll" spacing="24px" py={8}>
                <Boximage
                    imageUrl="./assets/art6.jpg"
                    title="Preface"
                    colorval={sbtn}
                >
                </Boximage>
                <Boximage
                    imageUrl="./assets/art2.jpg"
                    title="Lesson 1"
                    colorval={sbtn}
                >
                </Boximage>
                <Boximage
                    imageUrl="./assets/art5.jpg"
                    title="Lesson 2"
                    colorval={sbtn}
                >
                </Boximage>
                <Boximage
                    imageUrl="./assets/conv.jpg"
                    title="Lesson 3"
                    colorval={sbtn}
                >
                </Boximage>
                <Boximage
                    imageUrl="./assets/art4.jpg"
                    title="Lesson 4"
                    colorval={sbtn}
                >
                </Boximage>
                <Boximage
                    imageUrl="./assets/new5.jpg"
                    title="Lesson 5"
                    colorval={sbtn}
                >
                </Boximage>
                <Boximage
                    imageUrl="./assets/new1.jpg"
                    title="Lesson 6"
                    colorval={sbtn}
                >
                </Boximage>
                <Boximage
                    imageUrl="./assets/new6.jpg"
                    title="Lesson 7"
                    colorval={sbtn}
                >
                </Boximage>
                <Boximage
                    imageUrl="./assets/art3.jpg"
                    title="Finale"
                    colorval={sbtn}
                >
                </Boximage>
            </HStack>
        </Layout>
    )
}

export default Lesson
