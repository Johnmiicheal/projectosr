import {
  Center,
  Flex,
  Text,
  Image,
  Icon,
  Box,
  Link,
  Button,
  SimpleGrid,
  IconButton,
} from "@chakra-ui/react";
import { ScrollerMotion } from "scroller-motion";
import { initialBlobityOptions } from "../blob.config";
import useBlobity from "blobity/lib/react/useBlobity";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Header from "@/components/Header";
import {
  PiCaretLeft,
  PiCaretRight,
} from "react-icons/pi";
import Marquee from "react-fast-marquee";
import Footer from "@/components/Footer";
import { RxArrowTopRight } from "react-icons/rx";
import { testimonials } from "@/testimonials";
import { faculty } from "@/faculty";

const Home: React.FC = () => {
  const router = useRouter();
  const images = [
    "/1.png",
    "/2.png",
    "/3.png",
    "/4.png",
    "/5.png",
    "/6.png",
    "/7.png",
    "/8.png",
    "/9.png",
    "/10.png",
  ];
  const [pos, setPos] = useState(0);
  const [area, setArea] = useState(0);
  return (
    <ScrollerMotion>
      <Flex direction="column" bg="#5E181E" minH="100dvh">
        <Header />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Flex
            direction="column"
            bgImg="/heroobg.png"
            bgPos="top"
            bgSize="cover"
            bgRepeat={"no-repeat"}
            align="center"
            px="20"
            pb={32}
            pt="32"
          >
            <Text
              textAlign="center"
              fontWeight={500}
              fontSize={14}
              color="white"
              bg="#A83E47"
              border="1px solid white"
              p={3}
              borderRadius="full"
            >
              Management Consulting and Learning & Development
            </Text>
            <Text
              textAlign="center"
              fontWeight={700}
              fontSize={58}
              textTransform="capitalize"
              letterSpacing="tight"
              lineHeight={"short"}
              color="white"
              mt={3}
            >
              Empowering Organizations to Excel: Elevating your workforce,
              Cultivating Excellence
            </Text>

            <Text
              textAlign="center"
              fontWeight={400}
              px={20}
              fontSize={20}
              color="white"
              mt={5}
            >
              Unleash the full potential of your organization with our dedicated
              team of employee engagement experts and experiential learning
              consultants.
            </Text>
            <Flex gap={6} align="center" mt={6}>
              <Button borderRadius={"full"}>Work with Us</Button>
              <Button
                variant={"outline"}
                color="white"
                _hover={{ color: "black", bg: "white" }}
                borderRadius={"full"}
              >
                Learn More
              </Button>
            </Flex>
            <Image
              src="/herosr.png"
              w="full"
              pointerEvents={"none"}
              alt="project one lecture sessions"
              mt={24}
            />
          </Flex>

          <Flex
            p="64px"
            bg="#FFF"
            color="#5E181E"
            bgImg="/grid.png"
            align="center"
            direction="column"
          >
            <Flex justify={"space-between"} align="center" w="full">
              <Flex direction="column">
                <Text
                  textAlign="start"
                  fontWeight={700}
                  fontSize={48}
                  textTransform="capitalize"
                >
                  What makes us special?
                </Text>
                <Text textAlign="start" fontWeight={500} fontSize={24}>
                  Driven by the desire for your organization’s success
                </Text>
              </Flex>
              <Flex w="400px">
                <Text fontSize={14}>
                  Our dedication to continuous learning and growth distinguishes
                  us. We lead in industry trends, best practices, and emerging
                  tech, delivering innovative solutions for lasting impact.
                </Text>
              </Flex>
            </Flex>
            <Image
              src="/special.png"
              w="full"
              alt="Driven by the desire for your organization’s success"
              pointerEvents={"none"}
              mt={10}
            />
          </Flex>

          <Flex
            p="64px"
            direction="column"
            bgImg="grid.png"
            color="white"
            align="start"
          >
            <Flex align="start" justify={"space-between"} w="full">
              <Flex direction="column">
                <Text
                  p={3}
                  bg="#A83E47"
                  w="32"
                  textAlign={"center"}
                  borderRadius={"full"}
                  border="1px solid white"
                >
                  Our Solutions
                </Text>
                <Text
                  textAlign="start"
                  fontWeight={700}
                  fontSize={48}
                  textTransform="capitalize"
                >
                  Revolutionize your Business
                </Text>
                <Text w="400px">
                  At ProjectOne Strategy & Resources, we tailor solutions to
                  each client, aligning with their goals, culture, and
                  aspirations, recognizing their unique challenges and
                  opportunities.
                </Text>
                <Flex
                  mt={8}
                  align="center"
                  onClick={() => router.push("/tickets")}
                  cursor="pointer"
                >
                  <Button
                    bg="#FFF"
                    color="black"
                    _hover={{ bg: "gray.100" }}
                    borderRadius={"full"}
                  >
                    Tell me more
                  </Button>
                  <Flex
                    borderRadius={"full"}
                    bg="white"
                    color="black"
                    p={3}
                    ml={-1}
                  >
                    <Icon as={RxArrowTopRight} />
                  </Flex>
                </Flex>
              </Flex>
              <Image src="/sols.png" w="35%" alt="our solutions, project one" />
            </Flex>
            <Flex w="full" gap={2} align="center" mt={10}>
              <Flex
                bg="white"
                justify={"space-between"}
                borderRadius={"md"}
                p={3}
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
                    onClick={() => router.push("/tickets")}
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
                <Image src="/emp.png" w="32%" alt="Employee Counsulting" />
              </Flex>

              <Flex
                bg="white"
                justify={"space-between"}
                borderRadius={"md"}
                p={3}
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
                    onClick={() => router.push("/tickets")}
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
                <Image src="/exp.png" w="32%" alt="Experiential Learning" />
              </Flex>
            </Flex>
          </Flex>

          <Flex
            p="64px"
            bg="#FFF"
            color="#5E181E"
            align="center"
            direction="column"
          >
            <Flex direction="column" align="center">
              <Text
                color="white"
                p={3}
                bg="#A83E47"
                w="32"
                textAlign={"center"}
                borderRadius={"full"}
                border="1px solid white"
              >
                Testimonials
              </Text>
              <Text
                textAlign="center"
                fontWeight={700}
                fontSize={60}
                textTransform="capitalize"
              >
                Cultivating Excellence with our outstanding service
              </Text>
              <Text
                textAlign="center"
                mt={6}
                fontWeight={400}
                px={56}
                fontSize={14}
              >
                Over the years, we have been privileged to be entrusted with
                very crucial projects for very prestigious organizations and
                other times, some leading consulting firms have asked us to
                partner/collaborate with them on similar projects. Below are a
                few of client organizations we have added value to over the
                years
              </Text>
            </Flex>
            <Flex mt={10} align="start" justify="space-between" w="full">
              <Flex
                border="1px solid"
                borderColor={"white"}
                borderRadius="15px"
                boxShadow="lg"
                gap={2}
                overflow="hidden"
                direction="column"
                w={{ base: "30em", md: "50em" }}
              >
                <Marquee speed={20}>
                  <Flex h="5em" direction="row-reverse">
                    {images.map((p) => (
                      <Image
                        src={p}
                        w="50%"
                        h="100%"
                        borderRadius="8px"
                        ml={2}
                      />
                    ))}
                  </Flex>
                </Marquee>

                <Marquee direction="right" speed={20}>
                  <Flex h="5em">
                    {images.map((p) => (
                      <Image
                        src={p}
                        w="50%"
                        h="100%"
                        borderRadius="8px"
                        ml={2}
                      />
                    ))}
                  </Flex>
                </Marquee>
              </Flex>
              <Flex direction="column" ml={20} w="full">
                {testimonials.map((item, index) => (
                  <Flex
                    direction="column"
                    w="full"
                    display={index === pos ? "block" : "none"}
                  >
                    <Text>"{item.review}"</Text>
                    <Text mt={3}>
                      {" "}
                      - {item.client}, {item.role}
                    </Text>
                  </Flex>
                ))}
                <Flex align="center" gap={5} mt={3}>
                  <IconButton
                    icon={<PiCaretLeft />}
                    size="sm"
                    isDisabled={pos === 0}
                    aria-label="left"
                    onClick={() => setPos(pos - 1)}
                    borderRadius={"full"}
                    variant={"outline"}
                  />
                  <IconButton
                    icon={<PiCaretRight />}
                    size="sm"
                    isDisabled={pos === testimonials.length - 1}
                    onClick={() => setPos(pos + 1)}
                    aria-label="right"
                    borderRadius={"full"}
                    variant={"outline"}
                  />
                </Flex>
              </Flex>
            </Flex>
          </Flex>

          <Flex p="64px" h="full" color="white" align={"center"} direction={"column"}>
            <Text
              color="white"
              p={3}
              bg="#A83E47"
              w="40"
              textAlign={"center"}
              borderRadius={"full"}
              border="1px solid white"
            >
              Our Instructors
            </Text>
            <Text
              textAlign="center"
              fontWeight={700}
              fontSize={60}
              textTransform="capitalize"
            >
              Meet our Faculty Members
            </Text>
            {faculty.map((item, index) => (
              <Flex
                mt={10}
                justify="space-between"
                display={index === area ? "flex" : "none"}
                align="start"
              >
                <Image src={item.image} w="70%" borderRadius={"20px"} />
                <Flex direction="column" justify="space-between" ml={20}>
                  <Flex direction="column">
                  <Text fontWeight={600} fontSize={24} mb={10}>
                    {item.name}
                  </Text>
                  <Text>{item.snippet}</Text>
                  <Flex
                  mt={8}
                  align="center"
                  onClick={() => router.push("/tickets")}
                  cursor="pointer"
                >
                  <Button
                    bg="#FFF"
                    color="black"
                    _hover={{ bg: "gray.100" }}
                    borderRadius={"full"}
                  >
                    Read more
                  </Button>
                  <Flex
                    borderRadius={"full"}
                    bg="white"
                    color="black"
                    p={3}
                    ml={-1}
                  >
                    <Icon as={RxArrowTopRight} />
                  </Flex>
                </Flex>
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
                    isDisabled={area === faculty.length - 1}
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
          <Footer />
        </motion.div>
      </Flex>
    </ScrollerMotion>
  );
};

export default Home;
