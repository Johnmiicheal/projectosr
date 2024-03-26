import {
  Flex,
  Text,
  Button,
  Link,
  Divider,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  IconButton,
  Image,
  Box,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { IoMenu } from "react-icons/io5";
import { RxArrowTopRight } from "react-icons/rx";

const Header = () => {
  const router = useRouter();
  const links = [
    { path: "/", text: "Home" },
    { path: "/about-us", text: "About Us" },
    { path: "/programs", text: "Programs" },
  ];
  return (
    <Flex
      justify={"space-between"}
      bg="#5e181e20"
      css={{
        "-webkit-backdrop-filter": "blur(5px)",
        "backdrop-filter": "blur(5px)",
      }}
      w="full"
      px={{ base: "10px", lg: "64px" }}
      py={3}
      pos="fixed"
      zIndex={99}
      top={0}
    >
      <Flex align="center">
        <Flex borderRadius={"full"} w={{ base: '45px', lg: "60px"}} h={{ base: '45px', lg: "60px"}} bg="white" p={2} align="center" overflow={"hidden"}>
        <Image src="/projicon.png" alt="Project One Logo" />
        </Flex>
        <Text
        ml={-2}
          fontSize={{ base: 14, md: 24 }}
          fontWeight={"700"}
          bg="white"
          py={3}
          px={4}
          borderRadius={"full"}
          color="#5E181E"
        >
          ProjectOne
        </Text>
      </Flex>
      <Flex gap={8} align="center" display={{ base: "none", lg: "flex" }}>
        {links.map((link) => (
          <Link
            href={link.path}
            key={link.path}
            fontWeight={router.pathname === link.path ? "bold" : "normal"}
            color={router.pathname === link.path ? "white" : "#C1C1C1"}
            _hover={{ color: "white" }}
          >
            {link.text}
          </Link>
        ))}
        <Divider orientation="vertical" />
        <Flex align="center" cursor="pointer" onClick={() => window.open('https://wa.me/08160067183')}>
          <Button
            bg="#FFF"
            color="black"
            _hover={{ bg: "#5E181E" }}
            borderRadius={"full"}
          >
            Work with Us
          </Button>
          <Flex borderRadius={"full"} bg="white" p={3} ml={-1}>
            <Icon as={RxArrowTopRight} />
          </Flex>
        </Flex>
      </Flex>

      <Flex align="center" gap={3} display={{ base: "flex", lg: "none" }}>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="options"
            icon={<IoMenu />}
            variant="ghost"
            color="white"
          />
          <MenuList>
            {links.map((link) => (
              <MenuItem onClick={() => router.push(link.path)}>
                {link.text}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
        <Flex align="center" cursor="pointer">
          <Button
            bg="#FFF"
            color="black"
            _hover={{ bg: "#5E181E" }}
            borderRadius={"full"}
            size="sm"
          >
            Work with Us
          </Button>
          <Flex borderRadius={"full"} bg="white" p={2} ml={-1}>
            <Icon as={RxArrowTopRight} />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
