import { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Alert,
  AlertIcon,
  Toast,
  ToastOptionProvider,
} from '@chakra-ui/react';
import supabase from '../config/auth/supabaseClient';

function CadastroCao() {
  const [nomeCao, setNomeCao] = useState('');
  const [tutor, setTutor] = useState('');
  const [data_nasc, setDataNascimento] = useState('');
  const [raca, setRaca] = useState('');
  const [peso, setPeso] = useState('');
  const [error, setError] = useState(null);

  const handleCadastro = async () => {
    setError(null);

    try {
        const { error } = await supabase.from('cadastroCaes').insert([{ nomeCao, tutor, dataNascimento: data_nasc, raca, peso }]);
      if (error) {
        throw error;
      }
    } catch (error) {
      Toast({
        ...ToastOptionProvider,
        title: 'Erro ao cadastrar cão.',
        description: error.message,
        status: 'error',
      });
      console.error('Erro ao cadastrar cão:', error.message);
      setError('Erro ao cadastrar cão: ' + error.message);
    }
  };

  return (
    <VStack spacing={4}p='10'>
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
          value={data_nasc}
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
