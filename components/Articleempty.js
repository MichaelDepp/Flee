const { AspectRatio, Box, useColorMode, useColorModeValue, Text, Image, Center, Heading, Container } = require("@chakra-ui/core")
import Authorinfo from "../components/Authorinfo"
import Langbtn from "../components/Langbtn"
import {useState} from "react"

function Articleempty(props) {
    
    const [lang, setLang] = useState(true);
    const { colorMode, toggleColorMode } = useColorMode()
    const bg = useColorModeValue("#00102A", "#F8F8F8")
    const color = useColorModeValue("#F8F8F8", "#00102A")
    const btn = "#304FFF"
    const sbtn = useColorModeValue("#F8F8F8", "#304FFF")
    console.log(props.article)

    function changeLang() {
        setLang(!lang)
    }

    return (
        <Box>
            <Container maxW="xl" >
                <Heading my={4} fontFamily={lang ? "heading" : "tamil"}>
                    {lang ? props.article.maintitle[0] : props.article.maintitle[1]}
                </Heading>
                <Authorinfo name={lang ? props.article.author.name[0] : props.article.author.name[1]} lang={lang}></Authorinfo>
                <Image
                    mt={4}
                    h={["xs", "sm", "md", "xl"]}
                    w="100%"
                    borderRadius="10px"
                    objectFit="cover"
                    src={props.article.coverimg}
                >
                </Image>
                <Text my={6} textAlign="justify" fontWeight="medium" fontSize="lg" fontFamily={lang ? "heading" : "tamil"}>
                    {lang ? props.article.lessontext[0] : props.article.lessontext[1]}
            </Text>
                <Heading>
                    Testimony Video
            </Heading>
                <AspectRatio my={4} ratio={16 / 9}>
                    <iframe
                        title="lesson"
                        src={props.article.testimonylink}
                        allowFullScreen
                    />
                </AspectRatio>
                <Heading mb={4}>
                    Summary
            </Heading>
                <Text pb={8} textAlign="justify" fontWeight="medium" fontSize="lg" fontFamily={lang ? "heading" : "tamil"}>
                    {lang ? props.article.summarytext[0] : props.article.summarytext[1]}
            </Text>
            </Container>

            <Box position="fixed" bottom="0" right={"0"} mb={["2rem", "3rem", "3rem", "5rem"]} mr={["2rem", "3rem", "4rem", "8rem"]} onClick={changeLang}>
                <Langbtn colorval={btn} lang={lang}></Langbtn>
            </Box>
        </Box>
    )
}

export default Articleempty