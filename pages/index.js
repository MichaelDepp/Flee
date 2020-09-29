import { Button, Heading, useColorMode, useColorModeValue, Wrap, IconButton, Box, Center, Container, Flex } from "@chakra-ui/core"
import Layout from "../components/Layout"
import Link from 'next/link'

function Index() {
    const { colorMode, toggleColorMode } = useColorMode()

    const bg = useColorModeValue("#00102A", "#F8F8F8")
    const color = useColorModeValue("#F8F8F8", "#00102A")
    const btn = "#304FFF"
    return (
        <Layout>
            <Heading fontWeight="black" textAlign="center" fontSize={["4xl", "4xl", "5xl", "6xl"]} mt={10}>
                Tamil Annual Conference<br />Methodist Youth Fellowship
                </Heading>
            <Center pt={12}> 
                <Flex flexDirection="column">
                    <Link href="/lesson">
                        <Button fontWeight="bold" fontSize="2xl" _hover={{ bg: btn }} bg={btn} color={bg} size="lg" rounded={25} mb={8} px={16}>
                            Lesson
                        </Button>
                    </Link>
                    <Button fontWeight="bold" fontSize="2xl" colorScheme={btn} variant="outline" size="lg" rounded={25} px={16}>
                        Explore
                    </Button>
                </Flex>
            </Center >
        </Layout>
    )
}

export default Index