const { Box, Text, Image, Center } = require("@chakra-ui/core");

function Undercons() {
    return (
        <Box>
            <Center mt={16}>
                <Image src="./assets/underconst.png" alt="Page No Contetn" width={[
      "100%", // base
      "50%", // 480px upwards
      "50%", // 768px upwards
      "50%", // 992px upwards
    ]}/>
            </Center>
            <Center mt={16}>
                <Text justify="center" fontWeight="bold" fontSize={"2xl"} textAlign="center">
                    This page is under construction.
            </Text>
            </Center>
            <Center>
                <Text fontWeight="bold" fontSize={"2xl"} textAlign="center">
                    Stay Tuned For Further Update.
            </Text>
            </Center>
        </Box>
    )
}

export default Undercons