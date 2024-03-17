import {
  Flex,
  Text,
  Button,
  Link,
  Divider,
  SimpleGrid,
  Icon,
  Box,
  Image,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { RxArrowTopRight } from "react-icons/rx";
import { IoLocationOutline, IoCallOutline  } from "react-icons/io5";


const Footer = () => {
  const links = [
    { path: "/terms", text: "Terms" },
    { path: "/privacy", text: "Privacy" },
    { path: "/cookies", text: "Cookies" },
  ];
  return (
    <Flex bg="white" w="full" direction="column">
      <Flex
        direction="column"
        bgImg="/foot.png"
        bgRepeat={"no-repeat"}
        bgSize="cover"
        bgPos="center"
        w="full"
        align="center"
        p={10}
      >
        <Text
          color="white"
          p={3}
          bg="#A83E47"
          w="44"
          textAlign={"center"}
          borderRadius={"full"}
          border="1px solid white"
        >
          Let's Work Together
        </Text>
        <Text
          color="white"
          fontSize={32}
          fontWeight={600}
          mt={10}
          px={48}
          textAlign={"center"}
        >
          Ready to take your organization to the next level? Contact us today to
          learn more about how ProjectOne can help you achieve your goals.
        </Text>
        <Flex mt={8} align="center" cursor="pointer">
          <Button
            bg="#FFF"
            color="black"
            _hover={{ bg: "gray.100" }}
            borderRadius={"full"}
          >
            Give us a call
          </Button>
          <Flex borderRadius={"full"} bg="white" color="black" p={3} ml={-1}>
            <Icon as={RxArrowTopRight} />
          </Flex>
        </Flex>
      </Flex>
      <Flex
        p={10}
        justify="center"
        align="center"
        direction={"column"}
        gap={{ base: 8, lg: 0 }}
      >
        <Image src="/projicon.png" alt="Project One Logo" w="10%" pointerEvents={"none"} />
        <Flex direction={{ base: 'column', lg: 'row'}} align={"start"} gap={{ base: 10, lg: 20}}>
          <Flex direction="column" mb={3}>
            <Text><Icon as={IoLocationOutline} fontSize={14} /> Our Locations: </Text>
            <Text fontSize={13} lineHeight={2}>
              Lagos: Plot 1, Akiogun Road, Oniru, Lekki, Lagos.
              <br />
              Abuja: Plot 741, Aminu Kano Crescent, Wuse 2, Abuja. <br />
              Dubai: P. O. Box 16929, Jebel Ali Free zone, Dubai, U.A.E
              <br />
              Accra: 22, Bank Road, Nungua, Accra <br />
              London: 2, leathwell road, SE8 4JL, London, UK
              <br />
            </Text>
          </Flex>
          <Flex direction="column">
          <Text><Icon as={IoCallOutline} fontSize={14} /> Our Telephone Lines: </Text>
            <Text lineHeight={2} fontSize={13}>
              +234 816-0067-183
              <br />
              +234 816-0061-000
            </Text>
          </Flex>
        </Flex>
        <Text fontSize={14}>
          &copy; {new Date().getFullYear()} Project One Strategy and Resources -
          All rights reserved.
        </Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
