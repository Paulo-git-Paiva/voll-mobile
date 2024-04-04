import { VStack, Image, Text, Box, FormControl, Input, Button, Link, Checkbox, ScrollView } from 'native-base';
import Logo from './assets/Logo.png';
import { Titulo } from './component/Titulo';
import { EntradaTexto } from './component/EntradaTexto';
import { Botao } from './component/Botao';
import { useState } from 'react';
import { secoes } from './utils/CadastroEntradaTexto';

export default function Cadastro() {
  const [numSecao, setNumSecao] = useState(0)

  function avacarSecao(){
    if(numSecao < secoes.length - 1){
      setNumSecao(numSecao+1)
    }
  }
  function voltarSecao(){
    if(numSecao > 0){
      setNumSecao(numSecao-1)
    }
  }
  return (
    <ScrollView flex={1} p={5}>
      <Image source={Logo} alt='Logo Voll' alignSelf="center" mt={10} />

      <Titulo>
        {
          secoes[numSecao].titulo
        }
      </Titulo>
      <Box>
        {
          secoes[numSecao]?.entradaTexto?.map(entrada => {
            return <EntradaTexto label={entrada.label}
             placeholder={entrada.placehoulder}
              key={entrada.id} />
          })
        }
      </Box>
      <Box>
        <Text color="blue.800" fontWeight="bold" fontSize="md" mt={2} mb={2}>Selecione o plano:</Text>
        {
         secoes[numSecao]?.checkbox?.map(checkbox => {
            return <Checkbox key={checkbox.id} value={checkbox.value}>
               {checkbox.value}</Checkbox> 
          })
        }
      </Box>
      {numSecao > 0 && <Botao onPress={() => voltarSecao()} bgColor="gray.400" >Voltar</Botao>} 
      <Botao onPress={() => avacarSecao()} mt={4} >Avançar</Botao>
    </ScrollView>
  );
}
