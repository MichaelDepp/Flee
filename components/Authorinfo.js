const { Stack, HStack, VStack, Center, Image, Text } = require("@chakra-ui/core");

function Authorinfo() {
    return (
        <HStack
            spacing={2}
        >
            <Image
                borderRadius="full"
                boxSize="30px"
                src="./assets/art3.jpg"
                alt="header"
            />
            <Text
                fontSize="sm"
                fontWeight="medium"
            >
                Rev Timothy Raj
            </Text>
            <Text
                fontSize="sm"
                fontWeight="normal"
            >
                28 Sep 2020
            </Text>
        </HStack>
    )
}

export default Authorinfo