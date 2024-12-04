function status(request, response) {
  response.status(200).json({ chave: "Acima da média" }); //request é o que recebe de fora e response é o que é enviado. Por padrão 200 é o retorno que "deu certo".
}

export default status; //exportar por padrão status
