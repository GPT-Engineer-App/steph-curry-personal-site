import { Box, Container, Flex, Heading, Text, Image, Stack, Button, Link, Icon, useColorModeValue } from "@chakra-ui/react";
import { FaTwitter, FaInstagram, FaBasketballBall } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.700", "gray.200");

  return (
    <Container maxW="container.xl" p={4}>
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between">
        <Box flex="1" p={4}>
          <Heading as="h1" size="xl" mb={6}>
            Stephen Curry
          </Heading>
          <Text fontSize="lg" color={textColor} mb={6}>
            Professional basketball player for the Golden State Warriors. 2-time MVP and 3-time NBA champion.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button leftIcon={<FaBasketballBall />} colorScheme="yellow" variant="solid">
              Career Highlights
            </Button>
            <Button as={Link} href="https://twitter.com/StephenCurry30" isExternal leftIcon={<FaTwitter />} colorScheme="twitter" variant="outline">
              Follow on Twitter
            </Button>
            <Button as={Link} href="https://www.instagram.com/stephencurry30/" isExternal leftIcon={<FaInstagram />} colorScheme="pink" variant="outline">
              Follow on Instagram
            </Button>
          </Stack>
        </Box>
        <Box flex="1" textAlign="center">
          <Image borderRadius="full" objectFit="cover" boxSize="300px" src="https://images.unsplash.com/photo-1644349315426-a8f62ac75c2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxTdGVwaGVuJTIwQ3Vycnl8ZW58MHx8fHwxNzEwMTg5Nzc0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Stephen Curry" m={{ base: 6, md: 0 }} />
        </Box>
      </Flex>
      <Box bg={bgColor} p={6} rounded="md" mt={10}>
        <Heading as="h2" size="lg" mb={4}>
          About Stephen
        </Heading>
        <Text color={textColor} mb={4}>
          Wardell Stephen "Steph" Curry II is an American professional basketball player for the Golden State Warriors of the National Basketball Association (NBA). Many players and analysts have called him the greatest shooter in NBA history. He is credited with revolutionizing the game of basketball by inspiring teams to regularly utilize the three-point shot.
        </Text>
        <Text color={textColor}>Curry was selected with the seventh overall pick in the 2009 NBA draft by the Warriors. In 2015, he won his first MVP award and led the Warriors to their first championship since 1975. The following season, he became the first player in NBA history to be elected MVP by a unanimous vote and to lead the league in scoring while shooting above 50–40–90. During the 2018–19 season, he set the NBA record for most three-pointers made in a single postseason.</Text>
      </Box>
    </Container>
  );
};

export default Index;
