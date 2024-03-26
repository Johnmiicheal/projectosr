import {
  Flex,
  Text,
  Image,
  Button,
  Box,
  Collapse,
  ListItem,
  UnorderedList,
  Icon,
} from "@chakra-ui/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { programs } from "@/program";
import React from "react";
import { RxArrowTopRight } from "react-icons/rx";

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
          px={{ base: '20px', lg: "64px"}}
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
            Our Programs
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
            w={{ lg: "5em"}}
          >
            What we offer
          </Text>

          <Text
            textAlign="start"
            fontWeight={500}
            fontSize={20}
            color="#5E181E"
            w={{ lg: "790px" }}
          >
            Our experiential learning arm is a Strategic Learning Partner that assists in developing talent and significantly elevating levels of human performance, turning your people into the best hands & minds in your industry.
          </Text>
        </Flex>
        <Flex bg="white" px={{ base: "20px", lg: "64px" }} pb={10} direction="column" align="center">
          <Image
            src="/data.svg"
            mb={20}
            alt="projectosr records"
            pointerEvents={"none"}
          />
          <Flex w="full" direction={{ base: 'column', lg: 'row' }} gap={2} align="center" my={10}>
              <Flex
                bg="white"
                border="1px solid #E2E2E2"
                justify={"space-between"}
                borderRadius={"md"}
                p={3}
                w="full"
              >
                <Flex direction="column">
                  <Text fontWeight={600} fontSize={20} color="black">
                    Employee Engagement Consulting
                  </Text>
                  <Text
                    color="black"
                    w={{ base: "20em", lg: "30em"}}
                    fontSize={13}
                    fontWeight={400}
                    mt={3}
                  >
                    Our Employee Engagement Consulting services leverage
                    insights into employee motivation to enhance performance. We
                    analyze data to pinpoint areas for improvement and craft
                    tailored strategies to drive workforce engagement.
                  </Text>
                  <Flex
                    mt={5}
                    align="center"
                    cursor="pointer"
                  >
                    <Button
                      bg="#5E181E"
                      color="white"
                      _hover={{ bg: "#4A1015" }}
                      borderRadius={"full"}
                    >
                      Learn more
                    </Button>
                    <Flex
                      borderRadius={"full"}
                      bg="#5E181E"
                      color="white"
                      p={3}
                      ml={-1}
                    >
                      <Icon as={RxArrowTopRight} />
                    </Flex>
                  </Flex>
                </Flex>
                <Image src="/emp.png" w="32%" alt="Employee Counsulting" display={{ base: 'none', xl: 'block'}} />
              </Flex>

              <Flex
                bg="white"
                justify={"space-between"}
                borderRadius={"md"}
                p={3}
                border="1px solid #E2E2E2"
                w="full"

              >
                <Flex direction="column">
                  <Text fontWeight={600} fontSize={20} color="black">
                    Experiential Learning
                  </Text>
                  <Text
                    color="black"
                    w={{ base: "20em", lg: "30em"}}
                    fontSize={13}
                    fontWeight={400}
                    mt={3}
                  >
                    Progressive organizations are no longer interested in the
                    usual, mundane, traditional approach to trainings that puts
                    employees in a mold and has no impact whatsoever on human
                    behavior.
                  </Text>
                  <Flex
                    mt={5}
                    align="center"
                    cursor="pointer"
                  >
                    <Button
                      bg="#5E181E"
                      color="white"
                      _hover={{ bg: "#4A1015" }}
                      borderRadius={"full"}
                    >
                      Learn more
                    </Button>
                    <Flex
                      borderRadius={"full"}
                      bg="#5E181E"
                      color="white"
                      p={3}
                      ml={-1}
                    >
                      <Icon as={RxArrowTopRight} />
                    </Flex>
                  </Flex>
                </Flex>
                <Image src="/exp.png" w="32%" alt="Experiential Learning"  display={{ base: 'none', xl: 'block'}}  />
              </Flex>
            </Flex>
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
