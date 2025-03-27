API para Consulta de CEP
Este projeto implementa uma API simples utilizando Node.js e Express para realizar a consulta de endereços a partir de um CEP (Código de Endereçamento Postal) brasileiro. A API utiliza o pacote cep-promise para realizar a consulta e retornar informações como logradouro, bairro, cidade e estado.

Funcionalidades
Recebe um CEP via URL e retorna os dados do endereço correspondente.

Valida se o CEP possui 8 dígitos numéricos.

Responde com erros caso o CEP seja inválido ou não encontrado.

Tecnologias
Node.js: Ambiente de execução JavaScript no servidor.

Express: Framework para criar servidores web e APIs.

cep-promise: Biblioteca para consultar informações de endereço a partir do CEP.

CORS: Middleware para permitir requisições de diferentes origens.
