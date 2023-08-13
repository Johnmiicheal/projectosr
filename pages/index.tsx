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
} from "@chakra-ui/react";
import { ScrollerMotion } from "scroller-motion";
import { initialBlobityOptions } from "../blob.config";
import useBlobity from "blobity/lib/react/useBlobity";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";
import Header from "@/components/Header";
import { PiArrowCircleUpRightThin } from "react-icons/pi";
import VideoSection from "@/components/VideoSection";
import Marquee from "react-fast-marquee";
import Footer from "@/components/Footer";

const Home: React.FC = () => {
  const blobityInstance = useBlobity(initialBlobityOptions);

  React.useEffect(() => {
    if (blobityInstance.current) {
      // @ts-ignore for debugging purposes or playing around
      window.blobity = blobityInstance.current;
    }
  }, [blobityInstance]);
  const images = ["/1.png", "/2.png", "/3.png", "/4.png", "/5.png"];
  const members = [
    {
      img: "/members/marcella.png",
      name: "Marcella Imoisimi",
      pos: "SWE @ Ebay",
    },
    { img: "/members/oju.png", name: "Ojxu Junaid", pos: "UX @ Google" },
    {
      img: "/members/malcolm.png",
      name: "Malcolm Akinie",
      pos: "SWE II @ Slack",
    },
    {
      img: "/members/tayfacen.png",
      name: "Taylor Facen",
      pos: "Product @ AngelList",
    },
    {
      img: "/members/aminat.png",
      name: "Aminat Iriafen",
      pos: "Research @ Quantilope",
    },
    {
      img: "/members/eni.png",
      name: "Eni Asebiomo",
      pos: "Design @ Percapita",
    },
    {
      img: "/members/rahma.png",
      name: "Rahmana Muhammad",
      pos: "SWE @ Mastercard",
    },
    {
      img: "/members/johnathan.png",
      name: "Jonathan Anderson",
      pos: "SWE @ Vise",
    },
  ];
  const sponsors = [
    "/sponsors/bain-capital-logo.png",
    "/sponsors/brex.png",
    "/sponsors/contrary.png",
    "/sponsors/jpm.png",
    "/sponsors/mhackweek.png",
    "/sponsors/primitives.png",
    "/sponsors/slingshot.png",
    "/sponsors/svb.png",
  ];
  return (
    <ScrollerMotion>
      <Flex direction="column" bg="black" minH="100dvh">
        <Header />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Flex direction="column" px="64px" mt="28">
            <Text
              textAlign="start"
              fontStyle="italic"
              fontWeight={700}
              fontSize={28}
              color="white"
            >
              An invite-only conference for 300 Ambitious Black technologist in
              NYC this fall
            </Text>
            <Text
              textAlign="start"
              fontWeight={700}
              fontSize={92}
              textTransform="capitalize"
              letterSpacing="tighter"
              color="white"
              mt={-3}
            >
              THE BLACK TECH CONFERENCE
            </Text>
            <Text
              textAlign="start"
              fontWeight={700}
              fontSize={92}
              textTransform="capitalize"
              letterSpacing="tighter"
              color="white"
              mt={-3}
            ></Text>
            <Text
              textAlign="start"
              fontWeight={700}
              fontSize={28}
              color="white"
              mt={5}
            >
              Our 2nd Annual NYC Conference. SEPT 29 - OCT 1 2023
            </Text>
          </Flex>
          <Image
            src="/hero.png"
            w="full"
            alt="black tech conference at nyc"
            mt={24}
          />
          <Flex
            p="64px"
            bg="#6D381C"
            color="white"
            mt={24}
            justify="space-between"
            align="center"
          >
            <Flex direction="column">
              <Text
                textAlign="start"
                fontWeight={700}
                fontSize={60}
                textTransform="capitalize"
              >
                Apply to attend our conference
              </Text>
              <Text textAlign="start" fontWeight={500} fontSize={28}>
                A $250 ticket purchase is required if accepted to confirm your
                attendance
              </Text>
            </Flex>
            <Flex>
              <Icon as={PiArrowCircleUpRightThin} fontSize="128" data-blobity />
            </Flex>
          </Flex>

          <Flex p="64px" color="white" justify="space-between" align="center">
            <Text
              textAlign="start"
              fontWeight={700}
              fontSize={60}
              fontStyle={"italic"}
              textTransform="capitalize"
            >
              Our Agenda
            </Text>
            <Icon as={PiArrowCircleUpRightThin} fontSize="128" data-blobity />
          </Flex>
          <Flex
            p="64px"
            bg="#6D381C"
            color="white"
            justify="space-between"
            align="center"
          >
            <Flex direction="column">
              <Text
                textAlign="start"
                fontWeight={700}
                fontSize={60}
                textTransform="capitalize"
              >
                Become a sponsor
              </Text>
              <Text textAlign="start" fontWeight={500} fontSize={28}>
                Our sponsorship tiers for this conference are:
              </Text>
            </Flex>
            <Flex>
              <Icon as={PiArrowCircleUpRightThin} fontSize="128" data-blobity />
            </Flex>
          </Flex>
          <Flex
            p="64px"
            color="white"
            justify="space-between"
            align={{ lg: "center" }}
            gap={{ base: 10, lg:60 }}
            direction={{ base: "column", lg: "row" }}
          >
            <Text
              textAlign="start"
              fontWeight={700}
              fontSize={60}
              textTransform="capitalize"
            >
              Our Gatherings
            </Text>

            <Text
              textAlign="start"
              fontWeight={500}
              fontSize={28}
              color="#F9FAFB"
            >
              We partner with leading tech companies & brands to host brunches,
              co-living houses at conferences and concerts, pitch competitions,
              day parties, kickbacks, and more to bring driven Black people in
              tech together in meaningful ways that catalyse
              relationship-building among one another.
            </Text>
          </Flex>
          <VideoSection />
          <Marquee direction="left" speed={20}>
            <Flex h="30em" mt={{ base: -20, lg: 20 }}>
              {images.map((p) => (
                <Image src={p} w="100%" h="100%" ml={20} />
              ))}
            </Flex>
          </Marquee>

          <Flex p="64px" mt={20} bg="white" direction="column" align="center">
            <Text
              textAlign="center"
              fontWeight={500}
              fontSize={18}
              color="#111111"
              mb={10}
            >
              PREVIOUS SPONSORS
            </Text>
            <Flex gap={10} overflow="hidden">
              {sponsors.map((logo) => (
                <Image src={logo} alt="sponsor logo" />
              ))}
            </Flex>
          </Flex>

          <Flex
            p="64px"
            mt={18}
            direction="column"
            align="center"
            color="#F9FAFB"
          >
            <Text
              textAlign="center"
              fontWeight={700}
              fontSize={60}
              textTransform="capitalize"
            >
              Our Members
            </Text>
            <Text textAlign="center" fontWeight={500} fontSize={28}>
              They are building the next generation of technology & finance
              companies
            </Text>

            <Flex overflow="hidden" mt={28}>
              <SimpleGrid columns={4} spacing={10}>
                {members.map((member) => (
                  <Flex direction="column" key={member.img}>
                    <Image
                      src={member.img}
                      alt="members pictures"
                      fit="cover"
                      h={{ base: "140px", lg: "full" }}
                      mb={7}
                      borderRadius="full"
                      border="4px solid #F9FAFB"
                    />
                    <Text textAlign="center" fontWeight={700} fontSize={24} textTransform="capitalize">
                      {member.name}
                    </Text>
                    <Text textAlign="center" fontWeight={400} fontSize={16} textTransform="capitalize" mb={10}>{member.pos}</Text>
                  </Flex>
                ))}
              </SimpleGrid>
            </Flex>
            <Text textAlign="center" fontWeight={700} fontSize={32} textTransform="capitalize" color="#F9FAFB" mt={24} mb={14}> 
            They are founders, operators, investors, & alumni at institutions like
            </Text>
            <Image src="/Framer.png" alt="many many logo" w="full" />
          </Flex>


<Footer />
        </motion.div>
      </Flex>
    </ScrollerMotion>
  );
};

export default Home;
