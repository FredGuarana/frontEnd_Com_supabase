import { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';

function CadastroCao() {
  const [nomeCao, setNomeCao] = useState('');
  const [tutor, setTutor] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [raca, setRaca] = useState('');
  const [peso, setPeso] = useState('');
  const [error, setError] = useState(null);

  const handleCadastro = async () => {
    setError(null);

    try {
      // Aqui você pode usar o Supabase ou outra solução de armazenamento de dados
      // para salvar as informações do cão no banco de dados.
      // Por exemplo:
      // const { data, error } = await supabase
      //   .from('caes')
      //   .insert([{ nomeCao, tutor, dataNascimento, raca, peso }]);

      // Lide com o resultado da inserção conforme necessário.

    } catch (error) {
      console.error('Erro ao cadastrar cão:', error.message);
      setError('Erro ao cadastrar cão: ' + error.message);
    }
  };

  return (
    <VStack spacing={4}>
      {error && (
        <Alert status="error">
          <AlertIcon />
          {error}
        </Alert>
      )}
      <FormControl>
        <FormLabel>Nome do Cão</FormLabel>
        <Input
          type="text"
          value={nomeCao}
          onChange={(e) => setNomeCao(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Tutor</FormLabel>
        <Input
          type="text"
          value={tutor}
          onChange={(e) => setTutor(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Data de Nascimento</FormLabel>
        <Input
          type="date"
          value={dataNascimento}
          onChange={(e) => setDataNascimento(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Raça</FormLabel>
        <Input
          type="text"
          value={raca}
          onChange={(e) => setRaca(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Peso</FormLabel>
        <Input
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
      </FormControl>
      <Button colorScheme="teal" onClick={handleCadastro}>
        Cadastrar Cão
      </Button>
    </VStack>
  );
}

export default CadastroCao;