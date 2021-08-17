

### Exercicio 1

> CREATE TABLE Actor ( 	id VARCHAR(255) PRIMARY KEY,
>     nome VARCHAR(255) NOT NULL,
>     salary FLOAT NOT NULL,
>     gender VARCHAR(6) NOT NULL );

-- a)varchar usado para até 255 caracteres,Date usado para datas
SHOW DATABASES;-- b)SHOWDATABASES mostra os bancos de dados,SHOWTABLES as Tabelas do banco 
 SHOW TABLES;
 DESCRIBE Actor;-- c)Revela a estrutura da tabela
 
### Exercicio  2
 

> INSERT INTO Actor (id, nome, salary, birth_date, gender)-- a)  VALUES(
> 	"001",
>     "Tony Ramos",
>     400000,
>     "1948-08-25",
>     "male"  );

 
 DESCRIBE Actor;
ALTER TABLE Actor
ADD Birth_Date Date;
 
 -- 
 

> INSERT INTO Actor (id, nome, salary, Birth_Date, gender)-- b)  VALUES(
> "002",  "Glória Pires",  1200000,  "1963-08-23",  "female");

  INSERT INTO Actor (id, nome ,salary , Birth_Date, gender)--`
       c)erro de entrada duplicada codigo 1062 na entrada PRIMARY``
     

>   VALUES( "002", "Glória Pires", "1200", "1963-08-23", "female" );

-- c)
INSERT INTO Actor (id, nome, salary, Birth_Date, gender)` contagem das colunas não bate com a coluna declada`
**solução:Adicionado  os itens faltantes na declaração**

> VALUES(   "003",    "Fernanda Montenegro",   300000,   "1929-10-19",  
> "female" );

-- d)campo nome nao foi informado,

> INSERT INTO Actor (id, nome, salary, birth_date, gender)`foi
> adicionado o parametro nome e o nome generico "bananinha"` VALUES(  
> "004",   "bananinha",   400000,   "1949-04-18",    "male" );

-- e)o tipo do valor da coluna Birth_date está errado

> INSERT INTO Actor (id, nome, salary, birth_date, gender) VALUES(  
> "005",    "Juliana Paes",
>   719333.33,   "1979-03-26", -- adicionado as ""(aspas)    "female" );

-- f)erro de entrada de id duplicado

> INSERT INTO Actor (id, nome, salary, birth_date, gender) VALUES(  
> "006", -- resolução: alterado o ID   "Fernanda Montenegro",   300000, 
> "1929-10-19",    "female" );
> 
> SELECT * FROM Actor;
> 
> SELECT id, salary FROM Actor;
> 
> SELECT nome, salary from Actor;
> 
> SELECT id, nome from Actor WHERE gender = "male";

### Exercicio 3
-- a)retornando Atrizes

> SELECT id, nome, salary, Birth_Date from Actor WHERE gender =
> "female";

-- b)retorna salário do  Tony Ramos

> SELECT salary from Actor WHERE nome ="Tony Ramos";

-- c)

-- d)retorna id, nome e salario  de quem recebe até  500.000

> SELECT id, nome, salary from Actor WHERE salary <= 500000;

-- e)erro de coluna desconhecida,correção mudar o nome da 

> query SELECT id, name from Actor WHERE id = "002";  `query com erro`
> SELECT id, nome from Actor WHERE id = "002" ;` Query corrigida`

### Exercicio 4

> SELECT * FROM Actor-- a) a query pesquisa na tabela Actor, nome que
> comecem com A ou J e que ganham mais de 300.000 WHERE (nome LIKE "A%"
> OR nome LIKE "J%") AND salary > 300000;

-- b)atores que nao comecem com a letra A  e tenham salario maior do que 350.000

> SELECT * FROM Actor WHERE (nome NOT LIKE "A%") AND salary > 350000;

-- c)atores que possuam "G" ou "g" em qualquer parte do nome.

> SELECT * FROM Actor WHERE (nome BETWEEN "%G%" AND "%g%");

-- d)atores com letras "a","A","g","G" e salario 350.000 e 900.000

> SELECT * FROM Actor WHERE (nome LIKE "%a%" OR "%A%" OR "%g%" OR "%G%")
> AND  (salary BETWEEN 35000 AND 900000);

### Exercicio  5
-- a) criar um tabela filmes com id, nome, sinopse, data de lançamento e avaliação(de 0 à 10)

> CREATE TABLE filmes ( 	id VARCHAR (255) PRIMARY KEY,
>     nome VARCHAR (255) NOT NULL,
>     sinopse TEXT NOT NULL,
>     data_de_lancamento DATE NOT NULL,
>     avaliacao INT NOT NULL );

-- b) filme 001

> INSERT INTO filmes (id, nome, sinopse, data_de_lancamento, avaliacao)
> VALUE( 	"001",
>     "Se Eu Fosse Você",
>     "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e
> trocam de corpos",
>     "2006/01/06",
>     7 );

-- c)filme 002
INSERT INTO filmes (id, nome, sinopse, data_de_lancamento, avaliacao)

> VALUE( 	"002",
>     "Doce de mãe",
>     "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma
> reviravolta depois que Zaida, empregada e amiga de Dona Picucha,
> anuncia que vai se casar e não poderá mais morar com ela",
>     "2012-12-27",
>     10 );

-- d) filme 003
INSERT INTO filmes (id, nome , sinopse, data_de_lancamento, avaliacao)

> VALUE ( 	"003",
>     "Dona Flor e Seus Dois Maridos",
>     "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de
> abusos acaba por acarretar sua morte precoce.",
>     "2017-11-02",
>     8 );

-- e) filme 004 , filme aleatório

> INSERT INTO filmes (id, nome, sinopse, data_de_lancamento, avaliacao)
> VALUE ( 	"004",
>     "O alto da Compadecida",
>     "O filme mostra as aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver.Somente a
> aparição da Nossa Senhora poderá salvar esta dupla.",
>     "2000-09-10",
>     10
>     );

    
    -- filme bonus
    

> INSERT INTO filmes (id, nome, sinopse, data_de_lancamento, avaliacao)
>     VALUE( 		"005",
>         "Cinderela Baiana",
>         "Uma família pobre, mora em uma cidade perto de Salvador. O pai é faxineiro e, a mãe e a filha ajudam fazendo pequenos serviços. A
> filha, Carla, ao ficar em contato com a música, descobre sua
> verdadeira vocação e se torna uma dançarina de muito sucesso",
>         "1998-09-4",
>         1
>     );

### Exercicio 

a)retorne o Id,Título e avaliação a partir de um id específico; 	

> SELECT id, nome, avaliacao FROM filmes WHERE id ="004";

 b)retorne um filme a partir de um nome especifico; SELECT * 

> FROM  filmes WHERE nome ="Se eu Fosse Você";

 c)retorne o id, título e sinopse dos filmes com avaliação minima de 7

> SELECT id, nome, sinopse FROM filmes WHERE avaliacao >= 7;

### Exercicio 7
-- a)Retorna filme  cujo titulo contenha a palavra  vida

> SELECT * FROM filmes  WHERE nome LIKE "%vida";

-- b)pesquise no titulo ou na sinopse

> SELECT * FROM filmes WHERE nome OR sinopse LIKE "%vida%";

-- c)procure por todos os filmes que já tenham lançado

> SELECT * FROM filmes

-- d)enunciado meio abstrato, não entendi.



