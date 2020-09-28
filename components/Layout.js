import { Button, Heading, useColorMode, useColorModeValue, Wrap, IconButton, Box, Center, Container, Flex } from "@chakra-ui/core"
import Navbar from "../components/Navbar"

function Layout(props) {
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
                {props.children}
            </Container>
        </Box>
    )
}

export default Layout