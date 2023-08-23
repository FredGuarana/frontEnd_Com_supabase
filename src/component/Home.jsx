import { VStack, Flex, Container, Text } from '@chakra-ui/react';

function Home() {
  return (
    <Container maxW="container.xl" p={0}>
    <Flex h="100vh" py={20}>
      <VStack
        w="full"
        h="full"
        p={10}
        spacing={10}
        alignItems="flex-start"
      ><Text>
        Meu canil
      </Text>

      </VStack>
      <VStack
        w="full"
        h="full"
        p={10}
        spacing={10}
        alignItems="flex-start"
        bg="gray.50"
      ></VStack>
    </Flex>
  </Container>
);

}

export default Home;