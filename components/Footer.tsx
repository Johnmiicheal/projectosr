import { Flex, Text, Button, Link, Divider, SimpleGrid, Box} from "@chakra-ui/react";
import { useRouter } from "next/router";

const Footer = () => {
    const links = [
        {path: "/terms", text: "Terms",},
        {path: "/privacy", text: "Privacy",},
        {path: "/cookies", text: "Cookies",}
    ]
    return(
        <Flex bg="white" p="64px" w="full" direction="column">
            <Flex mt={32} justify="space-between" direction={{ base: "column", lg: "row"}} gap={{ base: 8, lg: 0 }}>
                <Flex>
                <Text
                textAlign="start"
                fontWeight={700}
                fontSize={60}
                textTransform="capitalize"
                >
                Contact our Team
                </Text>

                </Flex>
                <Flex>
                    <SimpleGrid columns={2} spacing={10}>
                    <Text
                    textAlign="center"
                    fontWeight={700}
                    fontSize={24}
                    textTransform="capitalize"
                    >
                    Timi Dayo-Kayode👋🏾
                    </Text>
                    <Text
                    textAlign="center"
                    fontWeight={700}
                    fontSize={24}
                    textTransform="capitalize"
                    >
                    Insta: @oversabiboyy
                    </Text>
                    <Text
                    textAlign="center"
                    fontWeight={700}
                    fontSize={24}
                    textTransform="capitalize"
                    >
                    Email: t@kinfolq.com
                    </Text>
                    <Text
                    textAlign="center"
                    fontWeight={700}
                    fontSize={24}
                    textTransform="capitalize"
                    >
                    Twitter: @heistimi
                    </Text>
                
                    </SimpleGrid>
                </Flex>
            </Flex>
            <Divider mt={14} />
            <Flex justify="space-between" mt={14}>
                <Text>
                Kinfolq@2023 - All rights reserved.
                </Text>
                <Flex gap ={10}>
                    {links.map((link) => (
                        <Link href={link.path} key={link.path} color="black" _hover={{ color: "gray.600" }}>
                            {link.text}
                        </Link>
                    ))}
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Footer;