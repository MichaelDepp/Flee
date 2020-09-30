import {Center, Text, Box, VStack, useColorMode, useColorModeValue} from "@chakra-ui/core"
import Link from "next/link"

function Navscreen() {
    const { colorMode, toggleColorMode } = useColorMode()
    const bg = useColorModeValue("#00102A", "#F8F8F8")
    const color = useColorModeValue("#F8F8F8", "#00102A")
    const btn = "#304FFF"
    return (
        <Center minH="100vh" position="fixed" w="100vw" bg={bg}>
            <Box justify="center" mb="200px">
                <VStack>
                    <Link href="/">
                    <Text fontWeight="black" fontSize={["5xl", "5xl", "6xl", "6xl"]}>
                        Home
                    </Text>
                    </Link>
                    <Link href="/lesson">
                    <Text fontWeight="black" fontSize={["5xl", "5xl", "6xl", "6xl"]}>
                        Lesson
                    </Text>
                    </Link>
                    <Link href="/counselling">
                    <Text fontWeight="black" fontSize={["5xl", "5xl", "6xl", "6xl"]}>
                        Counselling
                    </Text>
                    </Link>
                    <Link href="/forum">
                    <Text fontWeight="black" fontSize={["5xl", "5xl", "6xl", "6xl"]}>
                        Forum
                    </Text>
                    </Link>
                    <Link href="/ministry">
                    <Text fontWeight="black" fontSize={["5xl", "5xl", "6xl", "6xl"]}>
                        Ministry
                    </Text>
                    </Link>
                </VStack>
            </Box>
        </Center>
    )
}

export default Navscreen