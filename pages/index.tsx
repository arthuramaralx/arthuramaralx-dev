import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import AboutMe from "../components/AboutMe/AboutMe";
import Presentation from "../components/Presentation/Presentation";

const Home: NextPage = () => {
  console.log(`
  ⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠛⠛⠛⢻⡻⠿⣿⣿⣿⣿⣿⣿⣿⣿
  ⣿⣿⣿⣿⣿⣿⣟⣫⡾⠛⠛⠛⠛⠛⠛⠿⣾⣽⡻⣿⣿⣿⣿⣿
  ⣿⣿⣿⣿⣿⡟⣼⠏⠀⠀⠀⠀⠀⠀⣀⣀⡀⣙⣿⣎⢿⣿⣿⣿
  ⣿⣿⣿⣿⣿⢹⡟⠀⠀⠀⣰⡾⠟⠛⠛⠛⠛⠛⠛⠿⣮⡻⣿⣿
  ⣿⡿⢟⣻⣟⣽⠇⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⡹⣿
  ⡟⣼⡟⠉⠉⣿⠀⠀⠀⠀⢿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⢟⣿
  ⣇⣿⠁⠀⠀⣿⠀⠀⠀⠀⠘⢿⣦⣄⣀⣀⣀⣀⣤⡴⣾⣏⣾⣿
  ⡇⣿⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠈⠉⠛⠋⠉⠉⠀⠀⢻⣿⣿⣿
  ⢃⣿⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣧⣿⣿
  ⡻⣿⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣧⣿⣿
  ⡇⣿⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⢹⣿⣿
  ⣿⡸⢷⣤⣤⣿⡀⠀⠀⠀⠀⢠⣤⣄⣀⣀⣀⠀⠀⢠⣿⣿⣿⣿
  ⣿⣿⣷⣿⣷⣿⡇⠀⠀⠀⠀⢸⡏⡍⣿⡏⠀⠀⠀⢸⡏⣿⣿⣿
  ⣿⣿⣿⣿⣿⢼⡇⠀⠀⠀⠀⣸⡇⣷⣻⣆⣀⣀⣀⣼⣻⣿⣿⣿
  ⣿⣿⣿⣿⣿⣜⠿⢦⣤⣤⡾⢟⣰⣿⣷⣭⣯⣭⣯⣥⣿⣿⣿
  
              amogus
  
  `)

  return (
    <div>
      <Head>
        <title>arthuramaralx-dev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex as="main" maxW="100vw" overflow="hidden" >
 

        <Flex flexDir="column" overflow="hidden" width="100vw">
          <Presentation />
          <AboutMe />
        </Flex>
      </Flex>

      <footer></footer>
    </div>
  );
};

export default Home;