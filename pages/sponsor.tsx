import { Flex, Text, UnorderedList, ListItem, Box, Divider } from "@chakra-ui/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Sponsor = () => {
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
            Become A Sponsor
          </Text>
        </Box>

        <Flex p="64px" direction="column" color="white" gap={5}>
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
        <Flex direction="column" mb="10" gap={14} justify="center" w="full" px="64px">
          <Flex justify="space-between" >
            <Flex direction="column" color="white">
              <Text fontWeight={500} fontSize={28}>
                Gold Sponsor
              </Text>
              <Text fontWeight={700} fontSize={60}>
                $15K+
              </Text>
            </Flex>
            <Flex direction="column" color="white" fontSize={24}>
              <Text mb={7}>PERKS:</Text>
              <UnorderedList spacing={3}>
                <ListItem>
                  <Text>
                    A dedicated email blast to the Kinfolq community about your<br/>
                    company/initiatives
                  </Text>
                </ListItem>
                <ListItem>
                  <Text>Hackathon prize named after your organization</Text>
                </ListItem>
                <ListItem>
                  <Text>
                    Speaking opportunity on one of our conference panels
                  </Text>
                </ListItem>
                <ListItem>
                  <Text>
                    In-person recognition during every day of programming
                  </Text>
                </ListItem>
                <ListItem>
                  <Text>
                    Shared speaking slot with industry leaders at the conference
                  </Text>
                </ListItem>
                <ListItem>
                  <Text>Represent your company at our career fair</Text>
                </ListItem>
                <ListItem>
                  <Text>
                    Logo placement & recognition on the conference website &
                    materials
                  </Text>
                </ListItem>
                <ListItem>
                  <Text>
                    Access to attendee resume book & hackathon semifinalists
                  </Text>
                </ListItem>
                <ListItem>
                  <Text>Two free tickets for you or anyone you nominate</Text>
                </ListItem>
              </UnorderedList>
              <Divider mt={14} />
            </Flex>
          </Flex>

          <Flex justify="space-between">
            <Flex direction="column" color="white">
              <Text fontWeight={500} fontSize={28}>
                Silver Sponsor
              </Text>
              <Text fontWeight={700} fontSize={60}>
                $7500
              </Text>
            </Flex>
            <Flex direction="column" color="white" fontSize={24}>
              <Text mb={7}>PERKS:</Text>
              <UnorderedList spacing={3}>
                <ListItem>
                  <Text>
                    Speaking opportunity on one of our conference panels
                  </Text>
                </ListItem>
                <ListItem>
                  <Text>
                    In-person recognition during every day of programming
                  </Text>
                </ListItem>
                <ListItem>
                  <Text>
                    Shared speaking slot with industry leaders at the conference
                  </Text>
                </ListItem>
                <ListItem>
                  <Text>Represent your company at our career fair</Text>
                </ListItem>
                <ListItem>
                  <Text>
                    Logo placement & recognition on the conference website &
                    materials
                  </Text>
                </ListItem>
                <ListItem>
                  <Text>
                    Access to our resume book & hackathon semifinalists
                  </Text>
                </ListItem>
                <ListItem>
                  <Text>Two free tickets for you or anyone you nominate</Text>
                </ListItem>
              </UnorderedList>
              <Divider mt={14} />
            </Flex>
          </Flex>

          <Flex justify="space-between">
            <Flex direction="column" color="white">
              <Text fontWeight={500} fontSize={28}>
                Bronze Sponsor
              </Text>
              <Text fontWeight={700} fontSize={60}>
                $5000
              </Text>
            </Flex>
            <Flex direction="column" color="white" fontSize={24}>
              <Text mb={7}>PERKS:</Text>
              <UnorderedList spacing={3}>
                <ListItem>
                  <Text>
                    Logo placement & recognition on the conference website &
                    materials
                  </Text>
                </ListItem>
                <ListItem>
                  <Text>
                    Access to attendee resume book & hackathon semifinalists
                  </Text>
                </ListItem>
                <ListItem>
                  <Text>One free ticket for you or anyone you nominate</Text>
                </ListItem>
              </UnorderedList>
              <Divider mt={14} />
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Footer />
    </Flex>
  );
};

export default Sponsor;
