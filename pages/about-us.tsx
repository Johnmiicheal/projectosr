import {
  Flex,
  Text,
  Image,
  Button,
  Box,
} from "@chakra-ui/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const tabStyle = {
    color: "white",
    bg: "#6D381C",
    borderRadius: "4",
  };
  const tabHover = {
    color: "white",
    fontWeight: 600,
    borderRadius: "4",
  };
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
            About Us
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
            About our Company
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
        <Image src="/projdata.svg" mb={20} alt="projectosr records" pointerEvents={"none"} />
          <Image src="/about-info.svg" alt="about us" pointerEvents="none" />
        </Flex>
      </Flex>

      <Footer />
    </Flex>
  );
};

export default About;
