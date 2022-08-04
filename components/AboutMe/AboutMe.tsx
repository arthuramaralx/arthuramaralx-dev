import { Box, Center, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import Image from "next/image";
import myImage from "../../public/assets/my-picture.jpg";


const AboutMe = () => {
  return (
    <Flex
    color="whiteAlpha.800"
      height={["120vh", "", "", "80vh"]}
      paddingX="5px"
      id="aboutme"
      maxW="100%"
      width="100%"
      bgColor="#100F10"
      // border="1px solid orange" <- borda para desenvolvimento
      fontFamily="Inter"
      flexDir={["column", "column", "row", "row"]}
    >
      <Spacer display={["none", "none", "none", "block"]}  maxWidth="10vw" />

      <Flex 
        // border="1px solid green" <- borda para desenvolvimento
        width={["320px", "320px", "50vw"]}
        paddingTop="120px"
   
        flexDir="column"
      >
        <Heading>Arthur Sousa Amaral</Heading>
        <Text color="#9B2C2C">{`Desenvolvedor 💻 && Professor 📒 && Músico 🎼`}</Text>
        <Text>
        Minha jornada no mundo da tecnologia começou cedo, no Super Nintendo, sempre me perguntei como um mundo inteiro podia caber dentro de um cartucho ou disco. Também sempre tive muito apego pela arte, design, experiência de usuário, e encontrei tudo isso no desenvolvimento web, arte e tecnologia.
        </Text>
      </Flex>
      <Spacer />

      <Flex justify="center" mx="auto" maxWidth="380px" maxHeight="420px" paddingTop="40px">

<Image src={myImage} alt="myPicture"></Image>
      
      </Flex>

      <Spacer />

    
    </Flex>
  );
};

export default AboutMe;
