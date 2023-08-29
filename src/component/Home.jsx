import { VStack, Flex, Container, Heading, Box, Stack, Text, Center } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Image } from '@chakra-ui/react'

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
      >
        <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Canil Frida</Heading>
      <Heading size="xl">Selecione a opção </Heading>
        <Stack direction={['row', 'column']} spacing='24px' shadow='md' borderWidth='1px' p={10}>
          <Box h= '40px' bg='green.100'>
            <Link to="cadastrocao"> Cadastrar um cão</Link>
          </Box>
          <Box h= '40px' bg='green.100'>
            <Link to="listagemcaes"> Listar os cães cadastrados</Link>
          </Box>
          <Box h= '40px' bg='green.100'>
            <Link to="registration"> Registrar-se</Link>
          </Box>
        </Stack>

        </VStack>
      
      </VStack>
      <VStack
        w="full"
        h="full"
        p={10}
        spacing={10}
        alignItems="flex-start"
        bg="green.50"
      >
       <Box boxSize='sm' align='baseline'  borderWidth='1px'  borderRadius='lg' >
       <Image
          alt={'Login Image'}
          objectFit={'cover'}
         
          src={
            'FavFrida.png'
          }
        />
      </Box>
      </VStack>
    </Flex>
  </Container>
);

}

export default Home;