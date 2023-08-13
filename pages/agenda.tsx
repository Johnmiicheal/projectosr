import {
  Flex,
  Text,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  Box,
} from "@chakra-ui/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Agenda = () => {
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
          bgImg="/hero.png"
          bgSize="cover"
          bgRepeat="no-repeat"
          h="90dvh"
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
            fontSize={{ base: 72, lg: 92}}
            textTransform="capitalize"
            letterSpacing="tighter"
            color="white"
            mt="60vh"
            position={"relative"}
            zIndex={3}
          >
            Agenda
          </Text>
        </Box>

        <Flex
          p="64px"
          color="white"
          justify="space-between"
          align="center"
          gap={{ base: 10, lg: 40}}
          direction={{ base: "column", lg: "row"}}
        >
          <Text
            textAlign="start"
            fontWeight={700}
            fontSize={60}
            textTransform="capitalize"
            lineHeight="shorter"
            w="4em"
          >
            Our Agenda
          </Text>

          <Text
            textAlign="start"
            fontWeight={500}
            fontSize={28}
            color="#F9FAFB"
            w={{ lg: "790px"}}
          >
            They are building the next generation of technology companies and
            wield enormous levels of influence and buying power due to their
            high-impact, high-paying roles in tech and finance.
          </Text>
        </Flex>
        <Flex direction="column" mb="10" justify="center" w="full" px={{ lg: "64px"}}>
          <Tabs variant="unstyled" isFitted w="full">
            <TabList bg="black" w="full" p={4} borderRadius="4" color="white">
              <Tab _selected={{ ...tabStyle }} _hover={{ ...tabHover }}>
                Day 1 ,Friday, September 15th
              </Tab>
              <Tab _selected={{ ...tabStyle }} _hover={{ ...tabHover }}>
                Day 1 ,Friday, September 15th
              </Tab>
              <Tab _selected={{ ...tabStyle }} _hover={{ ...tabHover }}>
                Day 1 ,Friday, September 15th
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel mt={10}>
                <TableContainer borderRadius="20px" border="1px solid #FFFFFF">
                  <Table variant="simple" color="white">
                    <Thead>
                      <Tr>
                        <Th color="white" fontSize={{ base: 18, lg: 24}} fontWeight={700}>
                          TIME
                        </Th>
                        <Th color="white" fontSize={{ base: 18, lg: 24}} fontWeight={700}>
                          EVENT
                        </Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td p={{ lg: 10}} fontSize={{ base: 18, lg: 24}}>
                          6pm - 6:30pm
                        </Td>
                        <Td fontSize={{ base: 18, lg: 24}}>Check ins</Td>
                      </Tr>
                      <Tr>
                        <Td p={{ lg: 10}} fontSize={{ base: 18, lg: 24}}>
                          6pm - 6:30pm
                        </Td>
                        <Td fontSize={{ base: 18, lg: 24}}>Welcome Keynote</Td>
                      </Tr>
                      <Tr>
                        <Td p={{ lg: 10}} fontSize={{ base: 18, lg: 24}}>
                          6pm - 6:30pm
                        </Td>
                        <Td fontSize={{ base: 18, lg: 24}}>Career Fair Mixer</Td>
                      </Tr>
                      <Tr>
                        <Td p={{ lg: 10}} fontSize={{ base: 18, lg: 24}}>
                          6pm - 6:30pm
                        </Td>
                        <Td fontSize={{ base: 18, lg: 24}}>VIP Dinner w Speakers</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </TabPanel>
              <TabPanel>
                <TableContainer borderRadius="20px" border="1px solid #FFFFFF">
                  <Table variant="simple" color="white">
                    <Thead>
                      <Tr>
                        <Th color="white" fontSize={{ base: 18, lg: 24}} fontWeight={700}>
                          TIME
                        </Th>
                        <Th color="white" fontSize={{ base: 18, lg: 24}} fontWeight={700}>
                          EVENT
                        </Th>
                      </Tr>
                    </Thead>
                    <Tbody >
                      <Tr>
                        <Td p={{ lg: 10}} fontSize={{ base: 18, lg: 24}}>
                          6pm - 6:30pm
                        </Td>
                        <Td fontSize={{ base: 18, lg: 24}}>Check ins</Td>
                      </Tr>
                      <Tr>
                        <Td p={{ lg: 10}} fontSize={{ base: 18, lg: 24}}>
                          6pm - 6:30pm
                        </Td>
                        <Td fontSize={{ base: 18, lg: 24}}>Welcome Keynote</Td>
                      </Tr>
                      <Tr>
                        <Td p={{ lg: 10}} fontSize={{ base: 18, lg: 24}}>
                          6pm - 6:30pm
                        </Td>
                        <Td fontSize={{ base: 18, lg: 24}}>Career Fair Mixer</Td>
                      </Tr>
                      <Tr>
                        <Td p={{ lg: 10}} fontSize={{ base: 18, lg: 24}}>
                          6pm - 6:30pm
                        </Td>
                        <Td fontSize={{ base: 18, lg: 24}}>VIP Dinner w Speakers</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </TabPanel>
              <TabPanel>
                <TableContainer borderRadius="20px" border="2px solid #FFFFFF">
                  <Table variant="simple" color="white">
                    <Thead>
                      <Tr>
                        <Th color="white" fontSize={{ base: 18, lg: 24}} fontWeight={700}>
                          TIME
                        </Th>
                        <Th color="white" fontSize={{ base: 18, lg: 24}} fontWeight={700}>
                          EVENT
                        </Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td p={{ lg: 10}} fontSize={{ base: 18, lg: 24}}>
                          6pm - 6:30pm
                        </Td>
                        <Td fontSize={{ base: 18, lg: 24}}>Check ins</Td>
                      </Tr>
                      <Tr>
                        <Td p={{ lg: 10}} fontSize={{ base: 18, lg: 24}}>
                          6pm - 6:30pm
                        </Td>
                        <Td fontSize={{ base: 18, lg: 24}}>Welcome Keynote</Td>
                      </Tr>
                      <Tr>
                        <Td p={{ lg: 10}} fontSize={{ base: 18, lg: 24}}>
                          6pm - 6:30pm
                        </Td>
                        <Td fontSize={{ base: 18, lg: 24}}>Career Fair Mixer</Td>
                      </Tr>
                      <Tr>
                        <Td p={{ lg: 10}} fontSize={{ base: 18, lg: 24}}>
                          6pm - 6:30pm
                        </Td>
                        <Td fontSize={{ base: 18, lg: 24}}>VIP Dinner w Speakers</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </TabPanel>
            </TabPanels>
          </Tabs>
          <Button ml={{ base: 4, lg: 0}} bg="black" color="white" w="40" mt={10} px={{ base: 18, lg: 24}} py={6} _hover={{ bg: "gray.800"}}>
            Purchase A Ticket
          </Button>
        </Flex>
      </Flex>

      <Footer />
    </Flex>
  );
};

export default Agenda;
