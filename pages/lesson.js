import { Button, Heading, useColorMode, useColorModeValue, Wrap, IconButton, Box, Stack, HStack, VStack, Container, Flex, Center } from "@chakra-ui/core"
import Layout from "../components/Layout"
import Boximage from "../components/Boximage"
import Link from "next/link"

function Lesson() {

    return (
        <Layout>
            <Center>
                <Heading fontWeight="xbold" fontSize="3xl" mt={4}>
                    Lesson
            </Heading>
            </Center>
            <HStack overflowX="scroll" spacing="24px" py={8}>
                <Boximage
                    imageUrl="./assets/art6.jpg"
                    title="Preface"
                >
                </Boximage>
                <Boximage
                    imageUrl="./assets/art2.jpg"
                    title="Lesson 1"
                >
                </Boximage>
                <Boximage
                    imageUrl="./assets/art5.jpg"
                    title="Lesson 2"
                >
                </Boximage>
                <Boximage
                    imageUrl="./assets/conv.jpg"
                    title="Lesson 3"
                >
                </Boximage>
                <Boximage
                    imageUrl="./assets/art4.jpg"
                    title="Lesson 4"
                >
                </Boximage>
                <Boximage
                    imageUrl="./assets/new5.jpg"
                    title="Lesson 5"
                >
                </Boximage>
                <Boximage
                    imageUrl="./assets/new1.jpg"
                    title="Lesson 6"
                >
                </Boximage>
                <Boximage
                    imageUrl="./assets/new6.jpg"
                    title="Lesson 7"
                >
                </Boximage>
                <Boximage
                    imageUrl="./assets/art3.jpg"
                    title="Finale"
                >
                </Boximage>
            </HStack>
        </Layout>
    )
}

export default Lesson
