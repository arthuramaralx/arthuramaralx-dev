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
      fontFamily="Inter"
      flexDir={["column", "column", "row", "row"]}
      alignItems={["center", "center", "flex-start", "flex-start"]}
    >
      <Spacer display={["none", "none", "none", "block"]}  maxWidth="10vw" />

      <Flex 
        width={["90vw","90vw", "90vw", "50vw"]}
        paddingTop="120px"
   
        flexDir="column"
      >
        <Heading>Arthur Sousa Amaral</Heading>
        <Text color="#9B2C2C">{`Desenvolvedor, Professor e Músico `}</Text>
        <Text>
        Minha jornada no mundo da tecnologia começou cedo, no Super Nintendo, sempre me perguntei como um mundo inteiro podia caber dentro de um cartucho ou disco. Também sempre tive muito apego pela arte, design, experiência de usuário, e encontrei tudo isso no desenvolvimento web, arte e tecnologia.
        </Text>
      </Flex>
      <Spacer />

      <Flex justify="center" mx="auto" maxWidth="380px" maxHeight="420px" paddingTop="40px">

<Image src={myImage} className="next-image" alt="myPicture"></Image>
      
      </Flex>

      <Spacer />

    
    </Flex>
  );
};

export default AboutMe;
