import { Flex, Text, Button, Link, Divider, Icon} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { RxArrowTopRight } from "react-icons/rx";

const Header = () => {
    const router = useRouter();
    const links = [
        {path: "/", text: "Home",},
        {path: "/about-us", text: "About Us",},
        {path: "/programs", text: "Programs",}
    ]
    return(
        <Flex justify={"space-between"} bg="transparent" w='full' px="64px" py={3} pos="fixed" zIndex={99} top={0} >
            <Flex align="center">
                <Text fontSize={32} fontWeight={"black"} color="white">
                    Project One
                </Text>
            </Flex>
            <Flex gap={8} align="center">
                {links.map((link) => (
                    <Link href={link.path} key={link.path} fontWeight={router.pathname === link.path ? 'bold' : 'normal'} color={router.pathname === link.path ? 'white' : '#C1C1C1'} _hover={{ color: "white" }}>
                        {link.text}
                    </Link>
                ))}
                <Divider orientation="vertical"/>
                <Flex align="center" cursor="pointer">
                    <Button bg="#FFF" color="black" _hover={{ bg: "#5E181E" }} borderRadius={"full"} >
                        Work with Us
                    </Button>
                    <Flex borderRadius={"full"} bg="white" p={3} ml={-1}>
                        <Icon as={RxArrowTopRight} />
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Header;