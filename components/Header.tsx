import { Flex, Text, Button, Link, Divider} from "@chakra-ui/react";
import { useRouter } from "next/router";

const Header = () => {
    const router = useRouter();
    const links = [
        {path: "/", text: "Home",},
        {path: "/agenda", text: "Agenda",},
        {path: "/sponsor", text: "Become a sponsor",}
    ]
    return(
        <Flex justify={"space-between"} bg="black" w='full' px="64px" py={3} pos="fixed" zIndex={99} top={0} borderBottom="1px solid #FFFFFF20">
            <Flex align="center">
                <Text fontSize={32} fontWeight={"black"} color="white">
                    Kinfolq
                </Text>
            </Flex>
            <Flex gap={8} align="center">
                {links.map((link) => (
                    <Link href={link.path} key={link.path} fontWeight={router.pathname === link.path ? 'bold' : 'normal'} color={router.pathname === link.path ? 'white' : '#C1C1C1'} _hover={{ color: "white" }}>
                        {link.text}
                    </Link>
                ))}
                <Divider orientation="vertical"/>
                <Button bg="#6D381C" color="white" _hover={{ bg: "#6D381C" }} onClick={() => router.push('/tickets')}>
                    Buy tickets
                </Button>
            </Flex>
        </Flex>
    )
}

export default Header;