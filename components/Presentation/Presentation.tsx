import { Center, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import homeIlustration from "../../public/assets/home-ilustration.svg"
import { motion } from "framer-motion";
import { Link } from 'react-scroll';
import Header from "../Header/Header";
import Image from "next/image";
const Presentation = () => {

    const MotionFlex = motion(Flex);

  return (
    <Flex
    id="presentation"
    fontFamily="Inter"
      height="90vh"
      maxW="100%"
      minH="500px"
        width="100%"
      flexDir="column"
      bgColor="#100F10"
    >
        {/* nav bar */}
        <Header />
        <Spacer maxHeight="33vh" />
        {/* body */}
        <Flex>

        <Spacer />
         
        <MotionFlex width="490px" height="230px"   paddingBottom="60px" display={["none", "none", "flex"]}
        

            initial={{x: "-80px"}}
             animate={{
                x: "50px",
                opacity: [0.0, 1.0],
                
                transition: {
                    delay: 0.3,
                  duration: 0.9,
                },
              }}
        >
            <Image priority alt="it ilustration" src={homeIlustration}></Image>
        </MotionFlex>

      <Spacer maxWidth="200px" minWidth={["", "","70px"]}/>

        <Flex width="550px" height="300px"   flexDir="column" >
            <MotionFlex 
            animate={{

                opacity: [0.0, 1.0],
                
                transition: {
                    delay: 1,
                  duration: 0.8,
                },
              }}>

            <Text color="#9B2C2C" fontWeight="500">
                Olá, eu sou o Arthur,
            </Text>
            </MotionFlex>

            <MotionFlex

            animate={{

                opacity: [0.0, 1.0],
                
                transition: {
                    delay: 1.5,
                  duration: 0.8,
                },
              }}>


            <Heading color="whiteAlpha.800" fontSize="2.8rem">
                Desenvolvedor Front-end 
            </Heading>
            </MotionFlex>

            <MotionFlex
            animate={{

                opacity: [0.0, 1.0],
                
                transition: {
                    delay: 2,
                duration: 0.8,
                },
            }}> 
  


            <Text color="whiteAlpha.800" marginTop="13px" >

                Com 8 meses de experiência em desenvolvimento de websites, conheço as ferramentas mais atuais
                e promissoras do mercado, como Next.js e Chakra UI.
            </Text>
            </MotionFlex>
        </Flex>
        <Spacer/>
        

        </Flex>
        
    </Flex>
  );
};

export default Presentation;
