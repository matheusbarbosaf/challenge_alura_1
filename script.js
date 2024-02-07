document.addEventListener('DOMContentLoaded', function () {
    let campoTexto = document.getElementById('area-do-texto')
    let btnCriptografar = document.getElementById('btn-criptografar')
    let btnDescriptografar = document.getElementById('btn-descriptografar')
    let textoDestino = document.getElementById('area-de-copia')
    let btnCopiar = document.getElementById('btn-copiar')
    let campoCopia = document.getElementById('area-de-copia')
    let conteudoAreaCopia = document.querySelector('.conteudo-principal-copyarea')
    let conteudoMensagens = document.querySelector('.conteudo-principal-messages')
    let logoAlura = document.querySelector('.logo-alura')

    logoAlura.addEventListener('click', function () {
        location.reload()
    })

    function verificarTexto() {
        let textoNoCampo = campoTexto.value.trim()
        btnCriptografar.disabled = textoNoCampo === ''
        btnDescriptografar.disabled = textoNoCampo === ''
    }

    campoTexto.addEventListener('input', function () {
        this.value = this.value.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        this.value = this.value.replace(/[^\w\s]/gi, '')

        verificarTexto()
    })

    btnCriptografar.addEventListener('click', function () {
        if (!this.disabled) {

            let textoCriptografado = campoTexto.value

            let textoModificado = textoCriptografado.replace(/e/g, 'enter')
                .replace(/i/g, 'imes')
                .replace(/a/g, 'ai')
                .replace(/o/g, 'ober')
                .replace(/u/g, 'ufat')

            textoDestino.textContent = textoModificado;
            textoDestino.classList.add('ativo')

            conteudoAreaCopia.style.display = 'block'
            conteudoMensagens.style.display = 'none'
        }
    });

    btnDescriptografar.addEventListener('click', function () {
        if (!this.disabled) {

            let textoDescriptografado = campoTexto.value

            let textoModificado = textoDescriptografado.replace(/enter/g, 'e')
                .replace(/imes/g, 'i')
                .replace(/ai/g, 'a')
                .replace(/ober/g, 'o')
                .replace(/ufat/g, 'u')

            textoDestino.textContent = textoModificado
            textoDestino.classList.add('ativo')

            conteudoAreaCopia.style.display = 'block'
            conteudoMensagens.style.display = 'none'
        }
    })

    btnCopiar.addEventListener('click', function () {
        if (campoCopia.value.length > 0) {
            campoCopia.select()
            campoCopia.setSelectionRange(0, 99999)
            document.execCommand('copy')
            alert ("Texto copiado para area de tranferencia")
        }
    })

    verificarTexto()
})