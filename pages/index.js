import { Button, Heading, useColorMode, useColorModeValue, VStack, Text, Box, Center, Container, Flex } from "@chakra-ui/core"
import Layout from "../components/Layout"
import Link from 'next/link'

function Index() {
    const { colorMode, toggleColorMode } = useColorMode()

    const bg = useColorModeValue("#00102A", "#F8F8F8")
    const color = useColorModeValue("#F8F8F8", "#00102A")
    const btn = "#304FFF"
    const sbtn = useColorModeValue("#F8F8F8", "#304FFF")
    return (
        <Layout>
            <Box>
                <Heading fontWeight="black" textAlign="center" fontSize={["4xl", "4xl", "5xl", "6xl"]} mt={10} color={sbtn}>
                    Tamil Annual Conference<br />Methodist Youth Fellowship
                </Heading>
                <Box pt={12}>
                    <VStack>
                        <Link href="/lesson">
                            <Box fontWeight="bold" fontSize="2xl" _hover={{ bg: btn }} bg={btn} color="#F8F8F8" size="lg" rounded={25} py={1} px={16}>
                                <Text>Lesson</Text>
                            </Box>
                        </Link>
                    </VStack>
                </Box >
            </Box>
        </Layout>
    )
}

export default Index