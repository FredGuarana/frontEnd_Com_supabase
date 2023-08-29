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
    
     const fetchData = async () => {
       try {
         const { data, error } = await supabase.from('cadastroCaes').select('*');
         if (error) {
           setError(error.message);
         } else {
          setCaes(data);
         }
       } catch (error) {
         console.error('Erro ao buscar dados dos cães:', error.message);
         setError('Erro ao buscar dados dos cães: ' + error.message);
       }
     };
     fetchData();

  return (
    <VStack spacing={4} p='10'>
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
              <Td>{cao.nome_cao}</Td>
              <Td>{cao.tutor}</Td>
              <Td>{cao.data_nasc}</Td>
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
