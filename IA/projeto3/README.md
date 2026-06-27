# 🤖 QA REST API Test Designer

> Ferramenta baseada em Inteligência Artificial para geração automatizada de cenários e casos de teste para APIs REST.

---

## 📋 Sobre o Projeto

O **QA REST API Test Designer** é uma aplicação de IA desenvolvida para auxiliar engenheiros de qualidade (QA) e desenvolvedores na criação de casos de teste para APIs REST de forma automatizada e inteligente.

A ferramenta analisa contratos de API (OpenAPI/Swagger, endpoints, métodos HTTP) e gera automaticamente:

- Cenários de teste positivos e negativos
- Casos de teste em formato Gherkin (BDD)
- Validações de status code, headers e corpo da resposta
- Cobertura de fluxos funcionais, de segurança e não funcionais

---

## 🚀 Funcionalidades

- ✅ Geração automática de casos de teste a partir de especificações OpenAPI/Swagger
- ✅ Suporte a múltiplos métodos HTTP: `GET`, `POST`, `PUT`, `PATCH`, `DELETE`
- ✅ Geração de cenários BDD no formato **Gherkin** (`.feature`)
- ✅ Cobertura de testes positivos, negativos e de borda
- ✅ Validação de contratos de API
- ✅ Integração com IA para sugestão inteligente de dados de teste
- ✅ Suporte a autenticação (Bearer Token, API Key, OAuth2)

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição |
|---|---|
| **Python** | Linguagem principal do projeto |
| **OpenAI / Claude API** | Motor de IA para geração dos testes |
| **FastAPI** | Framework para exposição dos serviços |
| **Pydantic** | Validação e modelagem de dados |
| **Pytest** | Framework de execução de testes |
| **Gherkin / Behave** | Formato BDD para escrita de cenários |
| **Requests** | Biblioteca HTTP para chamadas às APIs |

---

## 📂 Estrutura do Projeto

```
QA-REST-API-Test-Designer/
├── app/
│   ├── main.py               # Ponto de entrada da aplicação
│   ├── designer.py           # Lógica de geração de testes com IA
│   ├── parser.py             # Parser de especificações OpenAPI/Swagger
│   └── models.py             # Modelos de dados (Pydantic)
├── tests/
│   ├── features/             # Cenários Gherkin gerados
│   └── test_generated.py     # Testes gerados automaticamente
├── examples/
│   └── sample_spec.yaml      # Exemplo de especificação OpenAPI
├── requirements.txt
├── .env.example
└── README.md
```

---

## ⚙️ Pré-requisitos

- Python 3.10+
- Chave de API válida (OpenAI ou Anthropic Claude)
- pip ou Poetry para gerenciamento de dependências

---

## 🔧 Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/antoniogmartins/Services.git
cd Services/IA/projeto3/QA-REST-API-Test-Designer

# 2. Crie e ative um ambiente virtual
python -m venv venv
source venv/bin/activate   # Linux/macOS
venv\Scripts\activate      # Windows

# 3. Instale as dependências
pip install -r requirements.txt

# 4. Configure as variáveis de ambiente
cp .env.example .env
# Edite o arquivo .env com suas chaves de API
```

---

## 🔑 Configuração

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
# Chave da API de IA (OpenAI ou Anthropic)
ANTHROPIC_API_KEY=sua_chave_aqui
# ou
OPENAI_API_KEY=sua_chave_aqui

# URL base da API a ser testada (opcional)
TARGET_API_BASE_URL=https://sua-api.com
```

---

## ▶️ Como Usar

### Via linha de comando

```bash
# Gerar casos de teste a partir de uma especificação OpenAPI
python app/main.py --spec examples/sample_spec.yaml --output tests/features/

# Gerar testes para um endpoint específico
python app/main.py --url https://api.exemplo.com --endpoint /users --method GET
```

### Via API REST (FastAPI)

```bash
# Iniciar o servidor
uvicorn app.main:app --reload
```

Acesse a documentação interativa em: `http://localhost:8000/docs`

#### Exemplo de requisição:

```bash
curl -X POST "http://localhost:8000/generate-tests" \
  -H "Content-Type: application/json" \
  -d '{
    "endpoint": "/api/v1/users",
    "method": "POST",
    "description": "Cria um novo usuário",
    "schema": {
      "name": "string",
      "email": "string",
      "age": "integer"
    }
  }'
```

#### Exemplo de resposta:

```json
{
  "scenarios": [
    {
      "type": "positive",
      "title": "Criar usuário com dados válidos",
      "gherkin": "Dado que eu tenho dados válidos de usuário\nQuando eu envio POST para /api/v1/users\nEntão o status code deve ser 201\nE o corpo da resposta deve conter o ID do usuário criado"
    },
    {
      "type": "negative",
      "title": "Criar usuário sem e-mail",
      "gherkin": "Dado que eu omito o campo 'email'\nQuando eu envio POST para /api/v1/users\nEntão o status code deve ser 400\nE a resposta deve conter a mensagem de erro 'email is required'"
    }
  ]
}
```

---

## 🧪 Executando os Testes Gerados

```bash
# Executar todos os testes gerados com pytest
pytest tests/ -v

# Executar cenários BDD com behave
behave tests/features/
```

---

## 📊 Tipos de Cenários Gerados

| Categoria | Descrição |
|---|---|
| **Positivos** | Fluxos de sucesso com dados válidos |
| **Negativos** | Dados inválidos, campos obrigatórios ausentes |
| **Limites** | Valores extremos, strings vazias, tamanhos máximos |
| **Autenticação** | Token ausente, expirado ou inválido |
| **Segurança** | Injeção de dados, XSS, permissões indevidas |
| **Performance** | Timeouts e comportamento sob carga |

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Siga os passos abaixo:

1. Faça um fork do projeto
2. Crie sua branch: `git checkout -b feature/minha-feature`
3. Faça o commit das alterações: `git commit -m 'feat: adiciona minha feature'`
4. Envie para o repositório remoto: `git push origin feature/minha-feature`
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está licenciado sob a licença **MIT**. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👤 Autor

**Antonio G. Martins**

[![GitHub](https://img.shields.io/badge/GitHub-antoniogmartins-181717?style=flat&logo=github)](https://github.com/antoniogmartins)

---

## ⭐ Se este projeto foi útil, deixe uma estrela!

[![Stars](https://img.shields.io/github/stars/antoniogmartins/Services?style=social)](https://github.com/antoniogmartins/Services)
