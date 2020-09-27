import { Text, Heading, useColorMode, useColorModeValue, IconButton, Box, Center, Container } from "@chakra-ui/core"
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
            </Container>
        </Box>
    )

}

export default Index