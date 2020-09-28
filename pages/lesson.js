import { Button, Heading, useColorMode, useColorModeValue, Wrap, IconButton, Box, Stack, HStack, VStack, Container, Flex } from "@chakra-ui/core"
import Layout from "../components/Layout"
import Boximage from "../components/Boximage"

function Lesson() {

    return (
        <Layout>
            <Heading>
                Lesson
            </Heading>
            <HStack overflow="scroll" spacing="24px" mt={8}>
                <Boximage
                    imageUrl="./assets/conv.jpg"
                    title="Preface"
                >
                </Boximage>
                <Boximage
                    imageUrl="./assets/conv.jpg"
                    title="Lesson 1"
                >
                </Boximage>
                <Boximage
                    imageUrl="./assets/conv.jpg"
                    title="Lesson 2"
                >
                </Boximage>
                <Boximage
                    imageUrl="./assets/conv.jpg"
                    title="Lesson 3"
                >
                </Boximage>
                <Boximage
                    imageUrl="./assets/conv.jpg"
                    title="Lesson 4"
                >
                </Boximage>
            </HStack>
        </Layout>
    )
}

export default Lesson
