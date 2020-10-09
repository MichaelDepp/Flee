const {
  AspectRatio,
  Box,
  useColorMode,
  useColorModeValue,
  Text,
  Image,
  Center,
  Heading,
  Container,
  Link,
} = require("@chakra-ui/core");
import Authorinfo from "../components/Authorinfo";
import Langbtn from "../components/Langbtn";
import { useState, useEffect } from "react";
import showdown from "showdown";
import Footer from "../components/Footer";

function Articleempty(props) {
  const [lang, setLang] = useState(true);
  const [text, setText] = useState("");
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("#00102A", "#F8F8F8");
  const color = useColorModeValue("#F8F8F8", "#00102A");
  const btn = "#304FFF";
  const sbtn = useColorModeValue("#F8F8F8", "#304FFF");

  function changeLang() {
    setLang(!lang);
  }

  useEffect(() => {
    const converter = new showdown.Converter();
    setText(converter.makeHtml(props.article.lessontext[0]));
  });

  function conv(text) {
    const converter = new showdown.Converter();
    return converter.makeHtml(text);
  }

  function createMarkup(text) {
    return {
      __html: text,
    };
  }

  return (
    <Box my={[5, 8, 12, 16]}>
      <Container maxW="xl">
        <Heading my={4} fontFamily="heading">
          {lang ? props.article.maintitle[0] : props.article.maintitle[1]}
        </Heading>
        <Authorinfo
          name={
            lang ? props.article.author.name[0] : props.article.author.name[1]
          }
          lang={lang}
        ></Authorinfo>
        <Image
          mt={4}
          h={["xs", "sm", "md", "xl"]}
          w="100%"
          borderRadius="10px"
          objectFit="cover"
          src={props.article.coverimg}
        ></Image>
        <Box
          my={[6, 8, 10, 12]}
          dangerouslySetInnerHTML={
            lang
              ? createMarkup(conv(props.article.lessontext[0]))
              : createMarkup(conv(props.article.lessontext[1]))
          }
          style={
            lang
              ? {
                  textAlign: "justify",
                  fontFamily: "Poppins",
                  fontWeight: "500",
                  fontSize: "18px",
                  wordBreak: "break-word",
                }
              : {
                  textAlign: "justify",
                  fontFamily: "Poppins",
                  fontWeight: "500",
                  fontSize: "18px",
                  wordBreak: "break-all",
                }
          }
        ></Box>

        <Heading>{lang ? "Testimony Video" : "சாட்சி காணொளி"}</Heading>
        <AspectRatio my={8} ratio={16 / 9}>
          <iframe
            title="lesson"
            src={"https://www.youtube.com/embed/" + props.article.testimonylink}
            allowFullScreen
          />
        </AspectRatio>
        <Heading mb={4}>{lang ? "Summary" : "முடிவுரை"}</Heading>
        <Text
          pb={8}
          textAlign="justify"
          fontWeight="medium"
          fontSize="lg"
          fontFamily="heading"
          style={lang ? { wordBreak: "keep-all" } : { wordBreak: "break-all" }}
        >
          {lang ? props.article.summarytext[0] : props.article.summarytext[1]}
        </Text>
      </Container>

      <Box
        position="fixed"
        bottom="0"
        right={"0"}
        mb={["2rem", "3rem", "3rem", "5rem"]}
        mr={["2rem", "3rem", "4rem", "8rem"]}
        onClick={changeLang}
      >
        <Langbtn colorval={btn} lang={lang}></Langbtn>
      </Box>
      <Footer></Footer>
    </Box>
  );
}

export default Articleempty;
