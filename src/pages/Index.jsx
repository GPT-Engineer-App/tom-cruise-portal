import React from "react";
import { Box, VStack, HStack, Heading, Text, Image, Divider, Link, Container, Button } from "@chakra-ui/react";
import { FaImdb, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="gray.100" minH="100vh">
      <Container maxW="container.lg" py={8}>
        <VStack spacing={8} align="center">
          <Image borderRadius="full" boxSize="200px" src="https://images.unsplash.com/photo-1589428031082-e5dd0272cf1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0b20lMjBjcnVpc2UlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTMyNzc2NDV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Tom Cruise" />
          <Heading as="h1" size="2xl">
            Tom Cruise
          </Heading>
          <Text fontSize="xl" textAlign="center">
            Actor | Producer | Philanthropist
          </Text>
          <HStack spacing={4}>
            <Link href="https://www.imdb.com/name/nm0000129/" isExternal>
              <FaImdb size={24} />
            </Link>
            <Link href="https://twitter.com/TomCruise" isExternal>
              <FaTwitter size={24} />
            </Link>
            <Link href="https://www.instagram.com/tomcruise/" isExternal>
              <FaInstagram size={24} />
            </Link>
          </HStack>
          <Button
            onClick={() => {
              localStorage.removeItem("auth_token");
              window.location.href = "/login";
            }}
          >
            Logout
          </Button>
          <Divider />
          <Box textAlign="center">
            <Heading as="h2" size="xl" mb={4}>
              About Me
            </Heading>
            <Text fontSize="lg">Tom Cruise is an American actor and producer. He has received various accolades for his work, including three Golden Globe Awards and three nominations for Academy Awards. He is one of the highest-paid actors in the world.</Text>
          </Box>
          <Divider />
          <Box textAlign="center">
            <Heading as="h2" size="xl" mb={4}>
              Notable Films
            </Heading>
            <VStack spacing={4}>
              <Text fontSize="lg">Top Gun (1986)</Text>
              <Text fontSize="lg">Mission: Impossible (1996)</Text>
              <Text fontSize="lg">Jerry Maguire (1996)</Text>
              <Text fontSize="lg">Minority Report (2002)</Text>
              <Text fontSize="lg">War of the Worlds (2005)</Text>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;
