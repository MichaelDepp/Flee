import { Box, Text, Center, Image } from "@chakra-ui/core"
import Head from "next/head"

function Boximage(props) {
    return (
        <Center>
            <Box>
                <Image
                    minH="xl"
                    maxW="xs"
                    borderRadius="25px"
                    objectFit="cover"
                    src={props.imageUrl}
                >
                </Image>
                <Center mt={2}>
                    <Text fontWeight="bold" fontSize="2xl">
                        {props.title}
                    </Text>
                </Center>
            </Box>
        </Center>
    )
}

export default Boximage