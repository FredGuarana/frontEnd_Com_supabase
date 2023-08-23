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
import supabase from '../config/auth/supabaseClient.jsx'

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleRegister = async () => {
    setError(null);
    
    try {
      const { user, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        setError(error.message);
      } else {
        // Registro bem-sucedido, você pode redirecionar o usuário ou realizar outras ações aqui
        console.log('Registro bem-sucedido:', user);
      }
    } catch (error) {
      console.error('Erro ao registrar:', error.message);
      setError('Erro ao registrar: ' + error.message);
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
        <FormLabel>Nome de Usuário</FormLabel>
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Senha</FormLabel>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
      <Button colorScheme="teal" onClick={handleRegister}>
        Registrar
      </Button>
    </VStack>
  );
}

export default RegistrationForm;