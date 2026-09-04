# 📁 Projeto 01 — Project Structure

```text
restassured01/
│
├── src/
│   ├── main/
│   │   └── java/
│   │       └── com/
│   │           └── thecat/
│   │               │
│   │               ├── Client/
│   │               │
│   │               ├── Config/
│   │               │
│   │               ├── DTO/
│   │               │   ├── Request/
│   │               │   └── Response/
│   │               │
│   │               ├── Validator/
│   │               │
│   │               └── Utils/
│   │
│   └── test/
│       ├── java/
│       │   └── com/
│       │       └── thecat/
│       │           └── Tests/
│       │
│       └── resources/
│           └── testdata/
│
├── pom.xml
├── README.md
└── .gitignore
```

## 📦 Packages

| Package   | Responsabilidade    |
| --------- | ------------------- |
| Client    | Comunicação com API |
| Config    | Configuração        |
| DTO       | Request / Response  |
| Validator | Validações          |
| Utils     | Utilitários         |
| Tests     | Casos automatizados |
| testdata  | Massa de testes     |

