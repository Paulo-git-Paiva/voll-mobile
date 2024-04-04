const secoes = [
    {
      id: 1,
      titulo: 'Insira os dados de cadastro',
      entradaTexto: [
        {
          id: 1,
          label: 'Nome',
          placehoulder: 'Digite seu nome completo'
        },
        {
          id: 2,
          label: 'Email',
          placehoulder: 'Digite seu email'
        },
        {
          id: 2,
          label: 'Criar senha',
          placehoulder: 'Crie uma senha'
        },
        {
          id: 2,
          label: 'Confirmar senha',
          placehoulder: 'Confirme a senha'
        },
      ],
      checkbox: []
    },
    {
      id: 2,
      titulo: 'Insira os dados Pessoais',
      entradaTexto: [
        {
          id: 1,
          label: 'CEP',
          placehoulder: 'Digite seu CEP'
        },
        {
          id: 2,
          label: 'Endereço',
          placehoulder: 'Insira seu endereço'
        },
        {
          id: 2,
          label: 'Número',
          placehoulder: 'Insira seu número'
        },
        {
          id: 2,
          label: 'Complemento',
          placehoulder: 'Insira o conplemento'
        },
        {
          id: 2,
          label: 'Telefone',
          placehoulder: '(00) 0000-0000'
        },
      ],
      checkbox: []
    },
    {
      id: 3,
      titulo: 'Para finalizar quais são seus planos?',
      entradaTexto: [],
      checkbox: [
        {
          id: 1,
          value: 'Sulamerica',
        },
        {
          id: 2,
          value: 'Unimed',
        },
      ]
    }
  ]

export {secoes}