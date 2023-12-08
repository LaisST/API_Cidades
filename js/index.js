function listar() {
    const url = "http://localhost:3000/consulta";
    const options = {
        method: 'GET',
        mode: 'cors', // Adicione esta opção para tratar o CORS
    };

    fetch(url, options)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Erro na requisição dos dados: " + response.status);
            }
        })
        .then(data => {
            console.log("Os dados da API: ", data);
        })
        .catch(error => {
            console.log("Erro na solicitação da API: ", error.message);
        });
}

listar();
