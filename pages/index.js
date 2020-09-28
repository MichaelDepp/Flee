import { Button, Heading, useColorMode, useColorModeValue, Wrap, IconButton, Box, Center, Container, Flex } from "@chakra-ui/core"
import Navbar from "../components/Navbar"

function Index() {

    const { colorMode, toggleColorMode } = useColorMode()

    const bg = useColorModeValue("#0E101C", "#F8F8F8")
    const color = useColorModeValue("#865BCE", "#865BCE")
    return (
        <Box
            bg={bg}
            color={color}
            minHeight="100vh"
        >
            <Navbar></Navbar>
            <Container maxW="xl">
                <Heading fontWeight="black" textAlign="center" fontSize={["4xl", "4xl", "5xl", "6xl"]} mt={10}>
                    Tamil Annual Conference<br />Methodist Youth Fellowship
                </Heading>
                <Center pt={12}>
                    <Flex flexDirection="column">
                        <Button fontWeight="bold" fontSize="2xl" _hover={{ bg: color }} bg={color} color={bg} size="lg" rounded={25} mb={8} px={16}>
                            Lesson
                    </Button>
                        <Button fontWeight="bold" fontSize="2xl" colorScheme={color} variant="outline" size="lg" rounded={25} px={16}>
                            Explore
                    </Button>
                    </Flex>
                </Center >
            </Container>
        </Box>
    )

}

export default Index