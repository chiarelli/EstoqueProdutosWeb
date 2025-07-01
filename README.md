# 🧾 Estoque de Produtos - Admin Frontend

Frontend desenvolvido com **Angular 20** e **CoreUI Free Template** para consumo da [API REST de Estoque de Produtos](https://github.com/chiarelli/estoqueProdutos).

Este projeto faz parte do curso **Web Developer Java** e tem como objetivo aplicar conhecimentos práticos em:

- Angular moderno com CoreUI
- Integração com API REST (CRUD completo)
- Organização modular de componentes
- Requisições assíncronas com RxJS/HttpClient
- Validação de formulários e mensagens de erro
- Estilização com tema administrativo responsivo (CoreUI)

---

## 🖥️ Visão Geral

A aplicação permite:

- 📦 **Cadastrar, editar e excluir produtos** de supermercado
- 📊 **Visualizar lista de produtos com categorias**
- 📂 **Consumir todas as rotas da API de backend**
- 🎨 **Usar o CoreUI Free Template para layout administrativo**

---

## 🛠️ Tecnologias Utilizadas

| Categoria        | Tecnologias                                                        |
|------------------|---------------------------------------------------------------------|
| Frontend         | Angular 20, RxJS, TypeScript, CoreUI 5 Free                        |
| Estilização      | Bootstrap 5 (via CoreUI), SCSS                                     |
| Comunicação API  | `HttpClient` do Angular com tipagem forte                          |
| Validação        | `Reactive Forms`, validações personalizadas                        |

---

## 📂 Estrutura de Pastas Relevantes

```bash
src/
├── app/
│   ├── components/
│   │   ├── produto-form/        # Formulário reutilizável
|   |   ├── item-feedback/       # Componente de feedback de sucesso ou erro
│   │   └── modal-exclusao-item/ # Modal de exclusão de item
│   ├── pages/
│   │   ├── produto-create/      # Página de criação
│   │   ├── produto-edit/        # Página de edição
│   │   └── produto-list/        # Página de listagem
│   ├── services/
│   │   ├── produto.service.ts   # Consumo da API
│   │   └── categoria.service.ts
````

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

* Node.js >= 20
* NPM >= 9
* Angular CLI >= 20
* Backend da API rodando em `http://localhost:8080`

### Passos

1. **Clone o repositório**

```bash
git clone https://github.com/chiarelli/EstoqueProdutosWeb.git
cd EstoqueProdutosWeb
```

2. **Instale as dependências**

```bash
npm install
```

3. **Execute o projeto**

```bash
npm start
```

O projeto estará acessível via:
📍 `http://localhost:4200`

---

## 🔄 Integração com a API

Este frontend consome todos os endpoints da [API REST Estoque de Produtos](https://github.com/chiarelli/estoqueProdutos):

* `/api/v1/produtos`
* `/api/v1/produtos/{id}`
* `/api/v1/categorias`
* `/api/v1/categorias/{id}`

Todas as operações de **criação**, **listagem**, **edição** e **remoção** estão implementadas com validações em tempo real e exibição de mensagens amigáveis.

---

## 👨‍💻 Autor

Feito por **Raphael Mathias Chiarelli Gomes** durante o curso de Java Web Developer na [COTI Informática](https://www.cotiinformatica.com.br/curso/java).

📬 [chiarelli.rm@gmail.com](mailto:chiarelli.rm@gmail.com)
🔗 [github.com/chiarelli](https://github.com/chiarelli)