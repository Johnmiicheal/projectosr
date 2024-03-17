import {
  Flex,
  Text,
  Image,
  Button,
  Box,
  Collapse,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { programs } from "@/program";
import React from "react";

const Programs = () => {
  const [show, setShow] = React.useState(false);
  const [showIndex, setShowIndex] = React.useState<number>();

  return (
    <Flex direction="column" bg="#6D381C" minH="100dvh">
      <Header />
      <Flex direction="column">
        <Box
          bgImg="/about.png"
          bgSize="cover"
          bgRepeat="no-repeat"
          h="50dvh"
          px="64px"
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
            fontSize={{ base: 72, lg: 92 }}
            textTransform="capitalize"
            letterSpacing="tighter"
            color="white"
            mt="30vh"
            position={"relative"}
            zIndex={3}
          >
            Our Programs
          </Text>
        </Box>

        <Flex
          p="64px"
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
            Programs our Company
          </Text>

          <Text
            textAlign="start"
            fontWeight={500}
            fontSize={20}
            color="#5E181E"
            w={{ lg: "790px" }}
          >
            We're a dedicated team of employee engagement and experiential
            learning specialists fueled by a shared mission: to empower
            organizations to boost profitability, expand market reach, enhance
            brand reputation, optimize costs, and thrive in competitive
            landscapes.
          </Text>
        </Flex>
        <Flex bg="white" px="64px" pb={10} direction="column" align="center">
          <Image
            src="/projdata.svg"
            mb={20}
            alt="projectosr records"
            pointerEvents={"none"}
          />
          <Flex w="full" direction="column" gap="8">
            {programs.map((item, index) => (
              <Flex
                border="1px solid #E2E2E2"
                borderRadius={"10px"}
                p={2}
                gap={10}
                key={index}
              >
                <Image
                  src={item.image}
                  w="25%"
                  h="25%"
                  alt="project one courses"
                  borderRadius="7px"
                />
                <Flex direction="column" gap={2} w="50em" mt={2}>
                  <Text fontWeight={600}>{item.title}</Text>
                  <Collapse startingHeight={40} in={show && showIndex === index}>
                    <Text fontWeight={400} fontSize={14}>
                      {item.about}
                    </Text>
                    <UnorderedList mt={3}>                      
                      {item.outlines.map((items, index) => (
                        <ListItem fontWeight={400} fontSize={14} key={index}>{items}</ListItem>
                      ))}
                    </UnorderedList>
                  </Collapse>
                  <Box>
                  <Button size="sm" onClick={ () => {setShowIndex(index); showIndex !== index ? setShow(true) : setShow(!show); }} mt="1rem">
                    Show {show && showIndex === index ? "Less" : "More"}
                  </Button>

                  </Box>
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Flex>

      <Footer />
    </Flex>
  );
};

export default Programs;
