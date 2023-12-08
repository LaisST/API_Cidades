db.aluno.insertOne({
    "nome": "Maria Oliveira",
    "idade": 30,
    "curso": "Psicologia",
    "matricula": "2023102",
    "notas": {
        "psicologia_clinica": 9.0,
        "psicologia_social": 8.5,
        "psicopatologia": 7.8
    },
    "endereco": {
        "rua": "Avenida da Paz, 456",
        "cidade": "Cidadela",
        "estado": "Exemplolandia",
        "CEP": "54321-987"
    }
})


db.aluno.insertMany([{
        "nome": "João Silva",
        "idade": 25,
        "curso": "Engenharia Civil",
        "matricula": "2023103",
        "notas": {
            "mecânica_dos_sólidos": 8.5,
            "estruturas": 9.2,
            "termodinâmica": 7.0
        },
        "endereco": {
            "rua": "Rua das Engenharias, 123",
            "cidade": "Construçãoville",
            "estado": "Engenharolândia",
            "CEP": "12345-678"
        }
    },
    {
        "nome": "Ana Souza",
        "idade": 28,
        "curso": "Medicina",
        "matricula": "2023104",
        "notas": {
            "anatomia": 9.8,
            "farmacologia": 8.0,
            "cirurgia": 8.5
        },
        "endereco": {
            "rua": "Avenida da Saúde, 789",
            "cidade": "Hospitalândia",
            "estado": "Medicinópolis",
            "CEP": "98765-432"
        }
    },
    {
        "nome": "Luiz Ferreira",
        "idade": 22,
        "curso": "Ciência da Computação",
        "matricula": "2023105",
        "notas": {
            "algoritmos": 9.5,
            "redes": 8.9,
            "inteligência_artificial": 9.2
        },
        "endereco": {
            "rua": "Rua da Tecnologia, 567",
            "cidade": "Techville",
            "estado": "Informáticópolis",
            "CEP": "54321-123"
        }
    }
])