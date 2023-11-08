'use strict'

const cepInput = document.getElementById('cep')

cepInput.addEventListener('focusout', preencherCampos)

async function pegarCep(cep) {

    const url = `https://viacep.com.br/ws/${cep}/json/`
    const response = await fetch(url)
    const cepInfo = await response.json()
    return cepInfo

}

async function preencherCampos() {

    const cep = await pegarCep(cepInput.value)

    const endereco = document.getElementById('endereco')
    const bairro = document.getElementById('bairro')
    const cidade = document.getElementById('cidade')
    const estado = document.getElementById('estado')

    console.log('Testando...')

    endereco.value = cep.logradouro
    bairro.value = cep.bairro
    cidade.value = cep.localidade
    estado.value = cep.uf

}
