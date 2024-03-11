# Biblioteca de Campo de CPF/CNPJ

Esta biblioteca fornece um componente de campo de entrada para CPF/CNPJ, utilizando Material UI e React. O componente realiza a formatação do valor inserido pelo usuário.

## Instalação

Para instalar esta biblioteca, você pode usar o npm ou yarn:

```bash
npm install --save  format-cpf-cnpj-liber
```
ou
```bash
yarn add format-cpf-cnpj
```

## Uso

Para usar este componente em seu projeto, importe-o e use-o em seu componente:


```ts
import { CpfCnpjField } from 'format-cpf-cnpj';

// ...

<CpfCnpjField value={value} onChange={handleChange} />
```

## Props

O componente CpfCnpjField aceita as seguintes props:

- value (string): O valor atual do campo.
- onChange (function): Uma função para ser chamada quando o valor do campo muda.
- error (boolean, opcional): Se verdadeiro, o campo será exibido com um erro visual.
- helperText (string, opcional): Texto de ajuda a ser exibido abaixo do campo.


## Contribuindo

Contribuições são bem-vindas! Por favor, abra um issue ou pull request para contribuir.
