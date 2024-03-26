import React, { useState } from "react";
import {
  Flex,
  Text,
  Image,
  Button,
  Box,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { board } from "@/board";
import { PiCaretLeft, PiCaretRight } from "react-icons/pi";
import { RxArrowTopRight } from "react-icons/rx";

const About = () => {
  const [pos, setPos] = useState(0);
  const [area, setArea] = useState(0);
  return (
    <Flex direction="column" bg="#5E181E" minH="100dvh" w="full">
       <Header />
      <Flex direction="column">
        <Box
          bgImg="/about.png"
          bgSize="cover"
          bgRepeat="no-repeat"
          h="50dvh"
          px={{ base: "20px", lg: "64px" }}
          position="relative"
          zIndex={1}
        >
          <Box
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            bg="rgba(0, 0, 0, 0.4)" // Set the background color with alpha (opacity)
            zIndex="2" // Set a higher z-index to make sure it's above the background image
          />
          <Text
            textAlign="start"
            fontWeight={700}
            fontSize={{ base: 60, lg: 92 }}
            textTransform="capitalize"
            letterSpacing="tighter"
            color="white"
            mt="30vh"
            position={"relative"}
            zIndex={3}
          >
            About Us
          </Text>
        </Box>

        <Flex
          p={{ base: "20px", lg: "64px" }}
          color="#5E181E"
          bg="white"
          justify="space-between"
          align="center"
          gap={{ base: 10, lg: 40 }}
          direction={{ base: "column", lg: "row" }}
        >
          <Text
            textAlign="start"
            fontWeight={700}
            fontSize={36}
            textTransform="capitalize"
            lineHeight="shorter"
            w="5em"
          >
            About our Company
          </Text>

          <Text
            textAlign="start"
            fontWeight={500}
            fontSize={20}
            color="#5E181E"
            w={{ base: "full", lg: "790px" }}
          >
            We're a dedicated team of employee engagement and experiential
            learning specialists fueled by a shared mission: to empower
            organizations to boost profitability, expand market reach, enhance
            brand reputation, optimize costs, and thrive in competitive
            landscapes.
          </Text>
        </Flex>
        <Flex bg="white" px={{ base: '20px', lg:"64px"}} pb={10} direction="column" align="center">
          <Image
            src="/projdata.svg"
            mb={20}
            alt="projectosr records"
            pointerEvents={"none"}
          />
          <Image
            src={"/about-info.svg"}
            alt="about us"
            pointerEvents="none"
            w="full"
            display={{ base: 'none', md: 'block'}}
          />
          <Image
            src={"/mobile.svg"}
            alt="about us"
            pointerEvents="none"
            w="full"
            display={{ base: 'block', md: 'none'}}

          />
        </Flex>
        <Flex
          p={{ base: "20px", lg: "64px" }}
          h="full"
          color="white"
          align={"center"}
          direction={"column"}
        >
          <Text
            color="white"
            p={3}
            bg="#A83E47"
            w="40"
            textAlign={"center"}
            borderRadius={"full"}
            border="1px solid white"
          >
            Our Board
          </Text>
          <Text
            textAlign="center"
            fontWeight={700}
            fontSize={{ base: 40, lg: 60}}
            textTransform="capitalize"
          >
            Meet our Advisory Board Members
          </Text>
          {board.map((item, index) => (
            <Flex
              mt={10}
              justify="space-between"
              display={index === area ? "flex" : "none"}
              align="start"
              direction={{ base: 'column', lg: 'row' }}
            >
              <Image src={item.image} w="70%" borderRadius={"20px"} />
              <Flex direction="column" justify="space-between" ml={{ lg: 20}}>
                <Flex direction="column">
                  <Text fontWeight={600} fontSize={24} mb={10}>
                    {item.name}
                  </Text>
                  <Text>{item.snippet}</Text>
                </Flex>
                <Flex align="center" gap={5} mt={10}>
                  <IconButton
                    icon={<PiCaretLeft />}
                    size="sm"
                    isDisabled={area === 0}
                    aria-label="left"
                    onClick={() => setArea(area - 1)}
                    borderRadius={"full"}
                    bg="white"
                  />
                  <IconButton
                    icon={<PiCaretRight />}
                    size="sm"
                    isDisabled={area === board.length - 1}
                    onClick={() => setArea(area + 1)}
                    aria-label="right"
                    borderRadius={"full"}
                    _hover={{ bg: "gray.900" }}
                    bg="black"
                    color="white"
                  />
                </Flex>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>
     

      <Footer />
    </Flex>
  );
};

export default About;
