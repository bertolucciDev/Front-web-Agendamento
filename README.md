# ✨ Agendaqui ✨

Bem-vindo ao repositório do **Agendaqui**! Este documento serve como um guia para desenvolvedores, ajudando a entender a estrutura do projeto, as bibliotecas utilizadas e como contribuir de forma eficaz.

## 🚀 Começando

Para rodar o projeto em sua máquina local, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone <url-do-seu-repositorio>
    cd Front-web-Agendaqui
    ```

2.  **Instale as dependências:**
    O projeto utiliza `pnpm` como gerenciador de pacotes.
    ```bash
    pnpm install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    pnpm dev
    # ou
    pnpm run dev
    ```
    O projeto estará disponível em `http://localhost:5173` (a porta pode variar).

---

## 🛠️ Tecnologias e Bibliotecas

Aqui estão as principais tecnologias que usamos para construir o Agendaqui.

### ⚛️ React

A base da nossa aplicação. Utilizamos a versão 19 do React, aproveitando o poder dos componentes e hooks para criar interfaces de usuário reativas e modulares.

- **[Documentação Oficial do React](https://react.dev/)**

### 💅 Tailwind CSS

Para a estilização, escolhemos o Tailwind CSS. Ele é um framework *utility-first* que nos permite construir designs customizados diretamente no HTML (ou JSX), sem sair do arquivo.

- **[Documentação Oficial do Tailwind CSS](https://tailwindcss.com/docs)**

### 🧩 Shadcn/ui

Shadcn/ui não é uma biblioteca de componentes tradicional. Em vez disso, é uma **coleção de componentes reutilizáveis** que você pode copiar e colar em seu projeto. Isso nos dá total controle sobre o código, aparência e comportamento dos componentes.

**Como funciona?**
Você usa a CLI do Shadcn para adicionar novos componentes conforme a necessidade.

- **[Documentação Oficial do Shadcn/ui](https://ui.shadcn.com/)**

###  Swal (SweetAlert2)

Para alertas e modais bonitos e personalizáveis. O SweetAlert2 é perfeito para criar pop-ups de confirmação, mensagens de sucesso, erro, e muito mais, de forma simples e elegante.

**Instalação:**
Como ainda não está no projeto, você pode adicioná-lo com:
```bash
pnpm add sweetalert2
```

- **[Documentação Oficial do SweetAlert2](https://sweetalert2.github.io/)**

---

## 💡 Exemplos de Código

Para facilitar o entendimento, aqui estão alguns exemplos práticos de como utilizamos essas ferramentas.

### Hooks do React

Hooks são funções que permitem "enganchar" o estado e o ciclo de vida do React em componentes de função.

**1. `useState` - Gerenciando o estado local**
Usado para adicionar uma variável de estado a um componente.

```jsx
import { useState } from 'react';

function Counter() {
  // Declara uma nova variável de estado chamada "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>
        Clique aqui
      </button>
    </div>
  );
}
```

**2. `useEffect` - Executando efeitos colaterais**
Usado para executar código após a renderização do componente, como buscar dados de uma API ou manipular o DOM.

```jsx
import { useState, useEffect } from 'react';

function UserData({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // A função dentro do useEffect será executada após a renderização
    fetch(`https://api.example.com/users/${userId}`)
      .then(response => response.json())
      .then(data => setUser(data));

    // A função de retorno (opcional) é executada quando o componente é desmontado
    return () => {
      console.log('Componente desmontado!');
    };
  }, [userId]); // O efeito será executado novamente apenas se `userId` mudar

  if (!user) {
    return <p>Carregando...</p>;
  }

  return <p>Nome do usuário: {user.name}</p>;
}
```

### Exemplos de Tailwind CSS

Estilize elementos diretamente no JSX com classes utilitárias.

**1. Criando um Card Simples**

```jsx
<div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
  <div className="shrink-0">
    {/* Ícone ou Imagem */}
  </div>
  <div>
    <div className="text-xl font-medium text-black">Agendaqui</div>
    <p className="text-slate-500">Seu agendamento fácil!</p>
  </div>
</div>
```

**2. Design Responsivo**
Use prefixos como `sm:`, `md:`, `lg:` para aplicar estilos em diferentes tamanhos de tela.

```jsx
{/* O container terá padding de 4 em telas pequenas e padding de 8 em telas médias ou maiores */}
<div className="p-4 md:p-8">
  {/* O texto será centralizado em telas pequenas, mas alinhado à esquerda em telas grandes ou maiores */}
  <h1 className="text-center lg:text-left">Bem-vindo!</h1>
</div>
```

### Usando Shadcn/ui

**1. Adicionando um novo componente (Ex: Botão)**
Abra seu terminal e rode o comando:
```bash
npx shadcn-ui@latest add button
```
Isso criará um arquivo `button.tsx` dentro da sua pasta `components/ui`.

**2. Usando o componente no seu código**

```jsx
import { Button } from "@/components/ui/button"; // O caminho pode variar

function MyComponent() {
  return (
    <div>
      <Button>Clique aqui</Button>
      <Button variant="destructive">Cancelar</Button>
      <Button variant="outline">Ver Detalhes</Button>
    </div>
  );
}
```

### Usando SweetAlert2

**1. Alerta de Sucesso**

```jsx
import Swal from 'sweetalert2';

function showSuccess() {
  Swal.fire({
    title: 'Sucesso!',
    text: 'Sua operação foi concluída com êxito.',
    icon: 'success',
    confirmButtonText: 'Ok'
  });
}
```

**2. Diálogo de Confirmação**

```jsx
import Swal from 'sweetalert2';

function confirmAction() {
  Swal.fire({
    title: 'Você tem certeza?',
    text: "Você não poderá reverter isso!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sim, delete isso!',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deletado!',
        'Seu arquivo foi deletado.',
        'success'
      );
      // Aqui você executa a lógica de deleção
    }
  });
}
```
---

## 🔗 Links Úteis

-   **[React](https://react.dev/)**
-   **[Tailwind CSS](https://tailwindcss.com/docs)**
-   **[Shadcn/ui](https://ui.shadcn.com/)**
-   **[SweetAlert2](https://sweetalert2.github.io/)**