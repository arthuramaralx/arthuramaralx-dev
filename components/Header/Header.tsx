import { Flex, Heading, Spacer, Text } from "@chakra-ui/react";

import { motion } from "framer-motion";
import { Link } from 'react-scroll';
const Header = () => {

    const MotionFlex = motion(Flex);

  return (
  
      <MotionFlex 
      display={["none", "none", "flex", "flex"]}
   width="100%"
   height="70px"
   bg="#100F10"
        as="nav"
        id="logo"
        zIndex="2"
        flexDir="row"
        paddingTop="13px"
        position="fixed"
        animate={{

            opacity: [0.0, 1.0],
            scale: 1.0,
            transition: {
              duration: 0.6,
            },
          }}
      >
        <Spacer minWidth="30px"/>


        {/* logo */}
        <Flex cursor="pointer" width="217px">
        <Link
            to="presentation"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
            
          >

        <Flex
        paddingTop="10px"
        justifySelf="center"
        height="36px"
        cursor="pointer"
        border="1x solid red"
        borderBottom="1.7px solid #CECECE;"
        width="29px"
        >


          
        <Heading
          fontSize="1.5rem"
          fontFamily="Inter"
          color="whiteAlpha.800"
          textAlign="center" 
          cursor="pointer"
        >
          arthuramaralx
        </Heading>
        <Heading fontSize="1.5rem" color="red.700" fontFamily="Inter" cursor="pointer">
          .dev
        </Heading>

          </Flex>
        </Link>
        </Flex>
          <Spacer  minW="200px"/>

       {/* links */}

          <Flex
        width="50%"
        justify="space-evenly"
        paddingTop="17px"
        color="#e9dfcc"
        fontFamily="Inter"
        fontWeight="500"
      >
        <MotionFlex
          active="black"
          cursor="pointer"
 
          whileHover={{
            scale: 1.1,
            textShadow: '0px 0px 6px rgb(255, 255, 255)',
          }}
        >
        </MotionFlex>

        <MotionFlex
          active="black"
          cursor="pointer"
          whileHover={{
            scale: 1.1,
            textShadow: '0px 0px 6px rgb(255, 255, 255)',
          }}
        >
          <Link
            to="aboutme"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
          >
            <Text color="#e9dfcc" >
              Sobre
            </Text>
          </Link>
        </MotionFlex>

        <MotionFlex
          cursor="pointer"
          whileHover={{
            scale: 1.1,
            textShadow: '0px 0px 6px rgb(255, 255, 255)',
          }}
        >
          <Link
            to="tecnologies"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
          >
            <Text color="#e9dfcc">Tecnologias</Text>
          </Link>
        </MotionFlex>

        <MotionFlex
          cursor="pointer"
          whileHover={{
            scale: 1.1,
            textShadow: '0px 0px 6px #9B2C2C',
          }}
        >
          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
          >
            <Text color="#9B2C2C" >
              Portfólio
            </Text>
          </Link>
        </MotionFlex>

        <MotionFlex
          cursor="pointer"
          whileHover={{
            scale: 1.1,
            textShadow: '0px 0px 6px rgb(255, 255, 255)',
          }}
        >
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
          >
            <Text color="#e9dfcc" >
              Contato
            </Text>
          </Link>
        </MotionFlex>

        {/* fim dos links */}
      </Flex>
      <Spacer />

      </MotionFlex>
 


  );
};

export default Header;
