import { VStack, Image, Text, Box, FormControl, Input, Button, Link } from 'native-base';
import { TouchableOpacity } from 'react-native';
import Logo from './assets/Logo.png';
import { Titulo } from './component/Titulo';

export default function Login({navigation}) {
  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Image source={Logo} alt='Logo Voll' />

      <Titulo>
        Faça login em sua conta
      </Titulo>
      <Box>
        <FormControl mt={3}>
          <FormControl.Label>Email</FormControl.Label>
          <Input 
            placeholder='Insira seu endereço de email'
            size='lg'
            w="90%"
            borderRadius='lg'
            bgColor='gray.100'
            shadow={3}>
          </Input>
        </FormControl>
        <FormControl mt={3}>
          <FormControl.Label>Senha</FormControl.Label>
          <Input 
            placeholder='Insira sua senha'
            size='lg'
            w="90%"
            borderRadius='lg'
            bgColor='gray.100'
            shadow={3}>
          </Input>
        </FormControl>
      </Box>
      <Button
      w='90%'
      bg="blue.800"
      mt={10}
      borderRadius="lg">
        Entrar
      </Button>
      <Link href='' mt={2}>Esqueceu sua senha?</Link>
      <Box w="90%" flexDirection="row" justifyContent="center" mt={8}>
        <Text>Ainda não tem Cadastro? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text color="blue.500">Faça seu Cadastro!</Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}
