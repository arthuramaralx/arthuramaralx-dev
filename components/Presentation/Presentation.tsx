import { Center, Flex, Heading, Spacer, Text, chakra } from "@chakra-ui/react";
import homeIlustration from "../../public/assets/home-ilustration.svg"
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import Header from "../Header/Header";
import Image from "next/image";

const Presentation = () => {
  const MotionFlex = motion(Flex);


  return (
    <Flex
      id="presentation"
      fontFamily="Inter"

      height={["90vh", "90vh", "90vh", "90vh", "90vh"]}
      maxW="100vw"
      minH="500px"
      width="100vw"
      flexDir="column"
      bgColor="#100F10"
      paddingX="10px"
    >
      <AnimatePresence>

        {/* nav bar */}
        <Header />
        <Spacer maxHeight="33vh" />
        {/* body */}
        <Flex>

          <Spacer minW="5px"  maxWidth="10vw" />

          <MotionFlex width="30vw" minWidth="200px" height="230px" overflow="hidden" borderRadius="20px" paddingBottom="60px"  display={["none", "none", "flex"]}


            initial={{ x: "-80px" }}
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

          <Spacer maxWidth="30vw" minWidth={["0px", "", "70px"]} />

          <Flex maxWidth="550px" height="300px" flexDir="column" >
            <MotionFlex
              animate={{

                opacity: [0.0, 1.0],

                transition: {
                  delay: 1,
                  duration: 0.8,
                },
              }}>

              <Text color="#9B2C2C" fontWeight="500" fontSize="1.5rem">
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


              <Heading color="whiteAlpha.800" fontSize="2.6rem">
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
          <Spacer maxWidth="30vw" />


        </Flex>

      </AnimatePresence>
    </Flex>
  );
};

export default Presentation;
