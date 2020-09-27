import { Button, Heading, useColorMode, useColorModeValue, Wrap, IconButton, Box, Center, Container, Flex } from "@chakra-ui/core"
import Navbar from "../components/Navbar"
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

function Index() {

    const { colorMode, toggleColorMode } = useColorMode()

    const bg = useColorModeValue("#F8F8F8", "#0E101C")
    const color = useColorModeValue("#865BCE", "#865BCE")
    return (
        <Box
            bg={bg}
            color={color}
            minHeight="100vh"
        >
            <Navbar></Navbar>
            <Container>
                <Heading fontWeight="black" textAlign="center" fontSize="4xl" mt={10}>
                    Tamil Annual Conference<br />Methodist Youth Fellowship
                </Heading>
                <Center pt={12}>
                    <Flex flexDirection="column">
                    <Button fontWeight="semi" colorScheme={bg} bg={color} size="lg" rounded={25} mb={8}>
                        Lesson
                    </Button>
                    <Button fontWeight="semi" colorScheme={bg} variant="outline" size="lg" rounded={25}>
                        Explore
                    </Button>
                    </Flex>
                </Center >
            </Container>
        </Box>
    )

}

export default Index