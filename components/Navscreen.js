import {Center, Text, Box, VStack, useColorMode, useColorModeValue} from "@chakra-ui/core"
import Link from "next/link"

function Navscreen() {
    const { colorMode, toggleColorMode } = useColorMode()
    const bg = useColorModeValue("#00102A", "#F8F8F8")
    const color = useColorModeValue("#F8F8F8", "#00102A")
    const sbtn = useColorModeValue("#F8F8F8", "#304FFF")
    const navclr = useColorModeValue("rgba(0, 16, 42, 0.9)", "rgba(248, 248, 248, 0.9)")
    return (
        <Center minH="100vh" position="fixed" w="100vw" bg={navclr}>
            <Box justify="center" mb="200px">
                <VStack>
                    <Link href="/">
                    <Text fontWeight="black" color={sbtn} fontSize={["5xl", "5xl", "6xl", "6xl"]}>
                        Home
                    </Text>
                    </Link>
                    <Link href="/lesson">
                    <Text fontWeight="black" color={sbtn} fontSize={["5xl", "5xl", "6xl", "6xl"]}>
                        Lesson
                    </Text>
                    </Link>
                    <Link href="/counselling">
                    <Text fontWeight="black" color={sbtn} fontSize={["5xl", "5xl", "6xl", "6xl"]}>
                        Counselling
                    </Text>
                    </Link>
                    <Link href="/forum">
                    <Text fontWeight="black" color={sbtn} fontSize={["5xl", "5xl", "6xl", "6xl"]}>
                        Forum
                    </Text>
                    </Link>
                    <Link href="/ministry">
                    <Text fontWeight="black" color={sbtn} fontSize={["5xl", "5xl", "6xl", "6xl"]}>
                        Ministry
                    </Text>
                    </Link>
                </VStack>
            </Box>
        </Center>
    )
}

export default Navscreen