import { Button, Box, Flex, Image, Stack, useColorMode, useColorModeValue, IconButton } from "@chakra-ui/core"
import { IoMdClose, IoMdMoon, IoMdSunny, IoMdMenu } from "react-icons/io";
import Link from 'next/link'

function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode()
    const bg = useColorModeValue("#00102A", "#F8F8F8")
    const color = useColorModeValue("#F8F8F8", "#00102A")
    const btn = "#304FFF"
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            py="2"
            bg={bg}
            color={color}
        >
            <Flex align="center">
                <IconButton
                    colorScheme="none"
                    color={btn}
                    size="lg"
                    fontSize="2xl"
                    outline="none"
                    icon={<IoMdMenu></IoMdMenu>}
                ></IconButton>
            </Flex>

            <Box>
                <Link href="/">
                    <Box boxSize="60px">
                        <Image src="./assets/logo.png" alt="Flee Logo" />
                    </Box>
                </Link>
            </Box>

            <Box
                display={{ sm: true ? "block" : "none", md: "block" }}
            >
                <IconButton
                    colorScheme="none"
                    color={btn}
                    size="lg"
                    outline="none"
                    fontSize="2xl"
                    icon={colorMode === 'light' ? <IoMdSunny /> : <IoMdMoon />}
                    onClick={toggleColorMode}
                ></IconButton>
            </Box>
        </Flex>
    )
}

export default Navbar;