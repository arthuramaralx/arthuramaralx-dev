import { Flex, Heading, Spacer, Text, Menu, MenuItem, MenuList, MenuButton, chakra, Portal, Button, useDisclosure } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import GiHamburgerMenu from "react-icons/gi"
import { motion } from "framer-motion";
import { Link }  from 'react-scroll';
import NextLink from "next/link"
import { url } from "inspector";
import { HamburgerIcon } from "@chakra-ui/icons";
const Header = () => {

  const ChakraLink = chakra(Link)
  const MotionFlex = motion(Flex);

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (

    <MotionFlex
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
      
      <Spacer minWidth="30px" />


      {/* logo */}
      <Flex cursor="pointer" width="217px" zIndex={"1"}
      >
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
            width="15px"
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
      <Spacer minW="200px" zIndex={"0"} />

      {/* links */}

      <Flex
        display={["none", "none", "flex", "flex"]}

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
      <Menu   >
        <MenuButton
      display={[ "block", "block","none", "none"]}

          aria-label='Options'
     >
          <HamburgerIcon position="relative" bgColor="whiteAlpha.800" borderRadius="50px" padding="5px" width="30px" height="30px"/>
          </MenuButton>
       <MenuList borderRadius="3px" width="10px" bgColor="#191719" >
      
           

         
         
          <ChakraLink 
          
          role={"menuitem"}
            onClick={()=>{onClose}}
            to="aboutme"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
            tabIndex={1}
           width="300px"
           height="300px"
            position="relative"
            >


            <Text  color="whiteAlpha.800" paddingLeft="13px" width="90%" marginLeft="10px" align="left" fontWeight="500" borderBottom="2px solid #922b2b">
              Sobre
            </Text>
       <MenuItem closeOnSelect width="120px" bg="white" bottom="3px"height="33px" position="absolute" opacity={0} />
        
            </ChakraLink> 
         

      

        
          <MenuItem opacity={0} command='⌘N'closeOnSelect>
            New Window
          </MenuItem>
          <MenuItem  command='⌘⇧N'>
            Open Closed Tab
          </MenuItem>
          <MenuItem  command='⌘O'>
            Open File...
          </MenuItem>
        </MenuList>
      </Menu>
      <Spacer minWidth="10px"/>

    </MotionFlex>



  );
};

export default Header;
