#   SISTEMA BANCÁRIO

## Estrutura de Dados

### Contas:

* `nome`
* `CPF`(único)
* `data` de nascimento (idade >18)
* `saldo` (começa zerado)
* `extrato` (array de transações)
    * `valor`
    * `data`
    * `descrição`

## Funcionalidades

### Criar Conta

* Informar `nome`, `CPF` e `data` de nascimento

### Pegar Saldo

* Passando `nome` e `CPF`.

### Adicionar Saldo

* Passando `nome`, `CPF` e `valor`

### Pagar Conta

* Passando `valor`, `descrição` e `data` de pagamento.
* Caso ele não informe a `data`,considerar pagamento no mesmo dia.
* Não pode haver agendamento para `data` passada
* Não pode haver pagamento sem que haja `saldo` suficiente.

### Transferência Interna

* Informar `nome`, `CPF`, nome do destinatário, `CPF` do destinatário e `valor`
* Não podem ser agendadas
* Devem respeitar o saldo do usuário remetente.

### Requisitos Mínimos

* Criar Conta,
* Pegar contas e
* Adicionar validação de idade.

### Etapas de Desenvolvimento

* 1.Crie um tipo para representar uma `conta` para o usuário
* 2.Crie um array que armazene usuários na aplição.Caso queira,pode iniciar este array com valores pré-definidos.
* 3.Crie mais um tipo:para representar as transações que serão salvas no extrato
* 4.Dentro da definição do usuário,crie um array que armazene as transações de um cliente.
* 5.Crie um endpoint que utilize o método `POST` da entidade `users` que será responsável por cadastrar um usuário em um array de usuários.
* 6.Crie um método `GET` na entidade `users` que será responsável por pegar os usuários existentes no array de usuários.
* 7.Adicione,uma validação no item 1(criar conta):o usuário deve possuir masi do que 18 anos para conseguir se cadastrar.Caso não possua, exiba uma mensagem de rro.
