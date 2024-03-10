import {
  Flex,
  Text,
  Button,
  Link,
  Divider,
  SimpleGrid,
  Icon,
  Box,
  Image
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { RxArrowTopRight } from "react-icons/rx";

const Footer = () => {
  const links = [
    { path: "/terms", text: "Terms" },
    { path: "/privacy", text: "Privacy" },
    { path: "/cookies", text: "Cookies" },
  ];
  return (
    <Flex bg="white" w="full" direction="column">
      <Flex direction="column" bgImg="/foot.png" bgRepeat={"no-repeat"} bgSize="cover" bgPos="center" w="full" align="center" p={10}>
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
        <Image src="/projicon.png" alt="Project One Logo" w="10%" />
        <Text fontSize={14}>
          &copy; {new Date().getFullYear()} Project One Strategy and Resources -
          All rights reserved.
        </Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
