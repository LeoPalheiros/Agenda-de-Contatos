const form = document.getElementById('form-agenda')
const contatos = []
const telefones = []
let linhas = ''


form.addEventListener('submit', function(e) { 
	e.preventDefault()


	adicionaLinha ()
	atualizaAgenda ()
})


function adicionaLinha () {
	const inputContato = document.getElementById('contato')
	const inputTelefone = document.getElementById('telefone')


	if (contatos.includes(inputContato.value)) {
		alert(`O contato: ${inputContato.value} já foi cadastrado`)
	} else { 
		contatos.push(inputContato.value)
		telefones.push(parseInt(inputTelefone.value))


		let linha = ''
		linha += `<tr><td>${inputContato.value}</td>`
		linha += `<td>${inputTelefone.value}</td></tr>`


		linhas += linha // Correção: adiciona a nova linha à variável linhas
	}


	inputContato.value = ''
	inputTelefone.value = ''
}


function atualizaAgenda () {
    const contatoAprovado = document.querySelector('tbody')
    contatoAprovado.innerHTML = linhas
}