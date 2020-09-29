const { AspectRatio, Container, Text, Image, Center, Heading } = require("@chakra-ui/core");
import Layout from "../components/Layout"
import Authorinfo from "../components/Authorinfo"

function Article() {
    return (
        <Layout>
            <Heading my={4}>
                Preface
            </Heading>
            <Authorinfo></Authorinfo>
            <Image
                mt={4}
                h={["xs", "sm", "md", "xl"]}
                w="100%"
                borderRadius="10px"
                objectFit="cover"
                src={"./assets/conv.jpg"}
            >
            </Image>
            <Text my={6} textAlign="justify" fontWeight="medium" fontSize="lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt neque ex, in aliquam urna condimentum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut posuere pharetra magna, quis luctus sem lacinia nec. Cras commodo ut enim sed porttitor. Vestibulum auctor vehicula pellentesque. Maecenas quis elementum massa. Nam convallis sollicitudin nisi et laoreet. Mauris eleifend lorem est, ac commodo felis porttitor vel. Nam condimentum vitae purus sit amet venenatis. Integer lobortis lectus ante, in eleifend turpis viverra egestas. Curabitur eu odio viverra, lobortis leo eget, tincidunt dolor. Nam ex tellus, suscipit vitae dapibus eget, pretium vel turpis. Pellentesque in urna semper, pretium libero a, tristique urna.

                Praesent ornare feugiat posuere. Ut congue, eros non dictum tempus, erat nibh interdum arcu, id hendrerit augue sapien ut lectus. Vestibulum consectetur tellus et metus blandit scelerisque. Suspendisse est ex, dictum vitae sapien at, tincidunt vestibulum quam. Vestibulum ornare velit in lacus lobortis, quis pharetra ex mollis. Vivamus aliquam nibh sed nisl gravida, sit amet laoreet metus imperdiet. Mauris magna augue, ullamcorper eget elementum sit amet, tincidunt non nulla. In pellentesque imperdiet justo, at rutrum est posuere sed. Cras id nibh viverra, porta tortor ut, scelerisque tortor. Nulla odio arcu, consectetur at tortor non, viverra tempus lectus. Ut eu mi vitae enim venenatis tincidunt.

                Cras interdum viverra feugiat. Mauris velit erat, vehicula vitae velit ac, posuere posuere est. Maecenas suscipit rutrum felis, et tincidunt leo porta sit amet. Suspendisse potenti. Sed non rhoncus felis. Vestibulum dui ex, efficitur sit amet quam ut, ultrices pretium nunc. Nulla aliquet tristique mauris ut gravida. Maecenas sed mattis sem. Aenean sit amet eleifend tellus, ac hendrerit lorem. Ut hendrerit dui vitae diam porttitor, sit amet congue nibh porta. Duis porta dictum odio sed semper.

                Sed iaculis felis non nibh mollis tincidunt. Donec viverra consectetur luctus. Nullam id velit at dui rutrum ornare sed facilisis erat. Donec eleifend facilisis massa a venenatis. Ut suscipit ipsum eget mauris rutrum, vel viverra lacus venenatis. Ut erat nulla, condimentum ut nisi efficitur, commodo ultrices quam. Duis pellentesque orci nisi, at tristique tortor aliquam at. Proin porta, tortor nec elementum fringilla, nisi risus pretium purus, eget vulputate felis turpis congue metus. Ut mattis, sapien quis dictum blandit, enim sapien tempus sapien, at hendrerit eros leo ac mi. Praesent sit amet luctus neque.
            </Text>
            <Heading>
                Testimony Video
            </Heading>
            <AspectRatio my={4} maxW="560px" ratio={16/9}>
                <iframe
                    title="lesson"
                    src="https://www.youtube.com/embed/UYtKTftGqHk"
                    allowFullScreen
                />
            </AspectRatio>
            <Heading mb={4}>
                Summary
            </Heading>
            <Text pb={8} textAlign="justify" fontWeight="medium" fontSize="lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt neque ex, in aliquam urna condimentum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut posuere pharetra magna, quis luctus sem lacinia nec. Cras commodo ut enim sed porttitor. Vestibulum auctor vehicula pellentesque. Maecenas quis elementum massa. Nam convallis sollicitudin nisi et laoreet. Mauris eleifend lorem est, ac commodo felis porttitor vel. Nam condimentum vitae purus sit amet venenatis. Integer lobortis lectus ante, in eleifend turpis viverra egestas. Curabitur eu odio viverra, lobortis leo eget, tincidunt dolor. Nam ex tellus, suscipit vitae dapibus eget, pretium vel turpis. Pellentesque in urna semper, pretium libero a, tristique urna.
            </Text>
        </Layout>
    )
}

export default Article