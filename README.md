# Desafio DevQuest PokéDex

<div align="center">

<a href="https://devemdobro.com" target="_blank"><img src="https://github.com/HumbertoFox/repository/assets/126817628/91143a1c-dd01-4d83-b067-cf8aea0266ee" width="150px" target="_blank"/></a>

</div>

### Objetivo da Aplicação

Mostrar uma lista de pokemon e ao clicar no Pokemon mostrar alguns detalhes do pokemon.

### Funcionalidade da Aplicação

Mostrar uma lista de Pokemon com 10 pokemons, com o nome e a imagem do pokemon ao clicar no botão "Load More" carrega mais 10 pokemons.
Caixa de texto com pesquisar pokemon por nome na lista mostrada ao clicar no botão Search "Pesquisar".
Menu mostrando todos os tipos de pokemon ao selecionar mostra 10 pokemons do tipo selecionado, o botão "Load More" carrega mais 10 do tipo selecionado.
Ao clicar no Pokemon mostrar alguns detalhes como imagem, nome, lista de movimentos e uma lista de habilidades com o nome e descrição dele.
Conter um botão para mudar de theme "tema", light "claro" e dark "escuro".

### Como será exibido em diferentes telas ou dispositivos:

<div align="center">

### <img src="https://github.com/HumbertoFox/repository/assets/126817628/414c30be-1874-47b1-bf98-816b0d612221" width="450px"/>

### <img src="https://github.com/HumbertoFox/repository/assets/126817628/66fc62cb-a2c7-447e-bbcc-6ab58e34a9a4" width="450px"/>

### <img src="https://github.com/HumbertoFox/repository/assets/126817628/0584e5ba-1e48-4ab7-adc3-c94b1fbba74e" width="250px" />

### <img src="https://github.com/HumbertoFox/repository/assets/126817628/d392c19e-b9cd-4f0c-bf08-6fa9a2d2ca5b" width="250px"/>

### <img src="https://github.com/HumbertoFox/repository/assets/126817628/f7507de6-d7f1-4300-9ca9-7440ed72a1a7" width="250px"/>

### <img src="https://github.com/HumbertoFox/repository/assets/126817628/66c56bdf-ea4f-40a3-8566-3ba7f73e8a59" width="450px"/>

### <img src="https://github.com/HumbertoFox/repository/assets/126817628/6d78732d-ecf3-4529-b787-6015abb3558e" width="450px"/>

### <img src="https://github.com/HumbertoFox/repository/assets/126817628/c84001d4-817d-432c-b751-06b1e99d22dd" width="250px" />

### <img src="https://github.com/HumbertoFox/repository/assets/126817628/8ec82c9e-e554-416f-bf08-08edd1705042" width="250px" />

</div>

### Componentes usados para funcionamento da aplicação em desenvolvimento!

### npm install React + Vite

### npm install react-hook-form
### npm install react-router-dom

### npm install styled-components

### npm install axios

### npm install @fortawesome/fontawesome-svg-core
### npm install @fortawesome/free-solid-svg-icons
### npm install @fortawesome/react-fontawesome

### npm i --save-dev jest @types/jest ts-jest
### npm i --save-dev babel-jest @babel/core @babel/preset-env @babel/preset-react
### npm i --save-dev @testing-library/jest-dom @testing-library/react @testing-library/user-event identity-obj-proxy jest-environment-jsdom

### Para usar o jest foi criado um diretório .jest dentro da raiz do sistema e não dentro do SRC e dentro dele foi criado outro diretório mocks.
### Foi criado o teste em um único componente HeaderPage para verificar se alguns componentes foram renderizado.

### No .jest
### setup-tests.js

```

    import '@testing-library/jest-dom'

```

### No mocks
### fileMock.js

```

    module.exports = 'test-file-stub'

```

### Foi criado um arquivo babel.config.json para configuração dos presets env e react também dentro da raiz do sistema e não dentro do SRC, com os seguintes textos:
### babel.config.json

```

    {
        "presets": [
            [
                "@babel/preset-env",
                {
                    "targets": {
                        "esmodules": true
                    }
                }
            ],
            [
                "@babel/preset-react",
                {
                    "runtime": "automatic"
                }
            ]
        ]
    }

```

### Para rodar o teste pode ser usado os seguintes comandos no terminal:

### npm run test

### npx jest

## Desenvolvido em:

<div>
  
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" width="30px"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="30px"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="30px"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" width="30px"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg" width="30px"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="30px"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" width="30px"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" width="30px/>
          
</div>