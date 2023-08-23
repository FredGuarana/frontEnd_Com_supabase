import { useState, useEffect } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  VStack,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';

function ListagemCaes() {
  const [caes, setCaes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Substitua esta lógica pela obtenção real dos dados dos cães do seu backend ou Supabase.
    // Por exemplo:
    // const fetchData = async () => {
    //   try {
    //     const { data, error } = await supabase.from('caes').select('*');
    //     if (error) {
    //       setError(error.message);
    //     } else {
    //       setCaes(data);
    //     }
    //   } catch (error) {
    //     console.error('Erro ao buscar dados dos cães:', error.message);
    //     setError('Erro ao buscar dados dos cães: ' + error.message);
    //   }
    // };
    // fetchData();

    // Simule a lista de cães com dados de exemplo para este exemplo.
    const dadosExemplo = [
      {
        id: 1,
        nomeCao: 'Rex',
        tutor: 'João',
        dataNascimento: '2021-01-15',
        raca: 'Labrador',
        peso: 30,
      },
      {
        id: 2,
        nomeCao: 'Bella',
        tutor: 'Maria',
        dataNascimento: '2020-05-10',
        raca: 'Golden Retriever',
        peso: 25,
      },
      // Adicione mais dados de exemplo conforme necessário
    ];

    setCaes(dadosExemplo);
  }, []);

  return (
    <VStack spacing={4}>
      {error && (
        <Alert status="error">
          <AlertIcon />
          {error}
        </Alert>
      )}
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>Nome do Cão</Th>
            <Th>Tutor</Th>
            <Th>Data de Nascimento</Th>
            <Th>Raça</Th>
            <Th>Peso (kg)</Th>
          </Tr>
        </Thead>
        <Tbody>
          {caes.map((cao) => (
            <Tr key={cao.id}>
              <Td>{cao.nomeCao}</Td>
              <Td>{cao.tutor}</Td>
              <Td>{cao.dataNascimento}</Td>
              <Td>{cao.raca}</Td>
              <Td>{cao.peso}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </VStack>
  );
}

export default ListagemCaes;