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
  Icon,
} from "@chakra-ui/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PiArrowCircleUpRightThin } from "react-icons/pi";

const Tickets = () => {
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
            fontSize={92}
            textTransform="capitalize"
            letterSpacing="tighter"
            color="white"
            mt="60vh"
            position={"relative"}
            zIndex={3}
          >
            Get A Ticket
          </Text>
        </Box>

        <Flex
          p="64px"
          direction="column"
          color="white"
          justify="space-between"
          gap={5}
        >
          <Text
            textAlign="start"
            fontWeight={700}
            fontSize={60}
            textTransform="capitalize"
            lineHeight="shorter"
          >
            Our sponsorship tiers for this conference are:
          </Text>

          <Text
            textAlign="start"
            fontWeight={500}
            fontSize={28}
            color="#F9FAFB"
          >
            They are building the next generation of technology companies and
            wield enormous levels of influence and buying power due to their
            high-impact, high-paying roles in tech and finance.
          </Text>
        </Flex>
        <Flex direction="column" mb="10" justify="center" w="full" px="64px">
          <TableContainer borderRadius="20px" border="2px solid #FFFFFF">
            <Table variant="simple" color="white">
              <Thead>
                <Tr>
                  <Th color="white" fontSize={24} fontWeight={600}>
                    Host
                  </Th>
                  <Th color="white" fontSize={24} fontWeight={700}>
                    GIZMODO
                  </Th>
                  <Th color="white" fontSize={24} fontWeight={700}>
                    GIZMODO
                  </Th>
                  <Th color="white" fontSize={24} fontWeight={700}>
                    GIZMODO
                  </Th>
                  <Th color="white" fontSize={24} fontWeight={700}>
                    GIZMODO
                  </Th>
                  <Th color="white" fontSize={24} fontWeight={700}>
                    GIZMODO
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td p={10} fontSize={24} fontWeight={600}>
                    COST
                  </Td>
                  <Td fontSize={24}>$500</Td>
                  <Td fontSize={24}>$300</Td>
                  <Td fontSize={24}>$1,725</Td>
                  <Td fontSize={24}>$575</Td>
                  <Td fontSize={24}>$250</Td>
                </Tr>
                <Tr>
                  <Td p={10} fontSize={24} fontWeight={600}>
                    DURATION
                  </Td>
                  <Td fontSize={24}>Three Days</Td>
                  <Td fontSize={24}>Two Days</Td>
                  <Td fontSize={24}>Ten Days</Td>
                  <Td fontSize={24}>Five Days</Td>
                  <Td fontSize={24}>Three Days</Td>
                </Tr>
                <Tr>
                  <Td p={10} fontSize={24} fontWeight={600}>
                    LOCATION
                  </Td>
                  <Td fontSize={24}>Austin</Td>
                  <Td fontSize={24}>Nash Ville</Td>
                  <Td fontSize={24}>Austin</Td>
                  <Td fontSize={24}>Kansas City</Td>
                  <Td fontSize={24}>NYC</Td>
                </Tr>
               
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>
          <Flex
            p="64px"
            bg="#000000"
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
      </Flex>

      <Footer />
    </Flex>
  );
};

export default Tickets;
