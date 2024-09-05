Funcionalidades
---------------

### 1\. Visualizar Discografia

**Descrição:**\
Esta funcionalidade exibe a lista completa de álbuns lançados pela banda Iron Maiden. A interface apresenta cada álbum com sua capa, nome e ano de lançamento.

**Filtros Disponíveis:**

-   **Pesquisar Álbuns:**

    -   **Descrição:** Campo de pesquisa que permite aos usuários buscar álbuns pelo nome. À medida que o usuário digita no campo de pesquisa, a lista de álbuns é filtrada para mostrar apenas aqueles que correspondem ao texto inserido.
    -   **Funcionamento:** O sistema faz uma correspondência parcial com o texto inserido, mostrando os álbuns cujo nome contém o texto pesquisado.
-   **Filtrar por Ano:**

    -   **Descrição:** Seletor que permite aos usuários filtrar álbuns com base no ano de lançamento.
    -   **Funcionamento:** O usuário pode selecionar um ano específico do menu suspenso para ver apenas os álbuns lançados naquele ano.
-   **Filtrar por Produtor:**

    -   **Descrição:** Seletor que permite aos usuários filtrar álbuns com base no nome do produtor.
    -   **Funcionamento:** O usuário pode escolher um produtor específico do menu suspenso para ver apenas os álbuns produzidos por aquele produtor.

**Exemplo de Uso:**

-   **Procurar um Álbum Específico:** Se você deseja encontrar o álbum "Powerslave", digite "Powerslave" no campo de pesquisa para que apenas esse álbum apareça na lista.
-   **Filtrar Álbuns por Ano:** Se você deseja visualizar apenas os álbuns de 1982, selecione "1982" no seletor de ano.
-   **Filtrar por Produtor:** Para ver os álbuns produzidos por "Martin Birch", selecione "Martin Birch" no seletor de produtor.

### 2\. Pesquisar Faixas

**Descrição:**\
Esta funcionalidade permite aos usuários buscar faixas específicas dentro da discografia da banda Iron Maiden. O usuário pode pesquisar pelo nome da faixa para encontrar rapidamente a música desejada.

**Campo de Pesquisa:**

-   **Campo de Texto:**
    -   **Descrição:** Campo de entrada de texto onde o usuário pode digitar o nome da faixa que deseja buscar.
    -   **Funcionamento:** O sistema realiza uma busca por correspondência parcial do nome da faixa digitado. Todos os resultados correspondentes são exibidos, mostrando a faixa e o álbum ao qual pertence.

**Exemplo de Uso:**

-   **Buscar uma Faixa Específica:** Se você deseja encontrar a faixa "Hallowed Be Thy Name", digite "Hallowed" no campo de pesquisa de faixas. A lista exibirá todas as faixas que contêm "Hallowed" no nome, junto com o álbum correspondente.

Estrutura do Projeto
--------------------
### Arquivos e Diretórios

-   **`index.html`**: Página principal da aplicação com a interface para visualizar a discografia e pesquisar faixas.
-   **`album.html`**: Página de detalhes do álbum, exibindo informações detalhadas sobre um álbum específico.
-   **`styles.css`**: Folha de estilo para a formatação visual da aplicação.
-   **`data.js`**: Contém a base de dados da discografia (`Discografia`).
-   **`app.js`**: Script principal que lida com a lógica de exibição e filtragem dos álbuns e faixas na página principal.
-   **`album.js`**: Script para exibir detalhes do álbum na página `album.html`.
