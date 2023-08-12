import { Flex, Text, Button, Link, Divider, SimpleGrid, Box} from "@chakra-ui/react";
import { useRouter } from "next/router";

const Footer = () => {
    return(
        <Flex bg="white" p="64px" w="full" direction="column">
            <Flex mt={32} justify="space-between">
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
        </Flex>
    )
}

export default Footer;