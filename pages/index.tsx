import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import AboutMe from "../components/AboutMe/AboutMe";
import Presentation from "../components/Presentation/Presentation";
import Tecnologies from "../components/Tecnologies/Tecnologies";



const Home: NextPage = () => {


  return (
    <div>
      <Head>
        <title>arthuramaralx-dev</title>
        <meta name="description" content="Meu portfólio profissional criado em Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex as="main" maxW="100vw" overflow="hidden" >
   


        <Flex flexDir="column" overflow="hidden" width="100vw">
          <Presentation />
          <AboutMe />
          <Tecnologies />
        </Flex>

      </Flex>

      <footer></footer>
    </div>
  );
};

export default Home;
