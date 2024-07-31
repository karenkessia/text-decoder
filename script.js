document.addEventListener('DOMContentLoaded', function () {
    let campoTexto = document.getElementById('areaTexto');
    let btoCriptografar = document.getElementById('btoCriptografar');
    let btoDescriptografar = document.getElementById('btoDescriptografar');
    let textoDestino = document.getElementById('areaCopia');
    let btoCopiar = document.getElementById('botaoCopiar');
    let campoCopia = document.getElementById('areaCopia');
    let conteudoAreaCopia = document.querySelector('.container__project__copia');
    let conteudoMensagens = document.querySelector('.container__project__principal');
    let logo = document.querySelector('.logo');

    
    logo.addEventListener('click', function () {
        location.reload();
    });

    
    function verificarTexto() {
        let textoNoCampo = campoTexto.value.trim();
        btoCriptografar.disabled = textoNoCampo === '';
        btoDescriptografar.disabled = textoNoCampo === '';
    }

    
    campoTexto.addEventListener('input', function () {
        this.value = this.value.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        this.value = this.value.replace(/[^\w\s]/gi, "");


        verificarTexto();
    });

    btoCriptografar.addEventListener('click', function () {
        if (!this.disabled) {

            let textoCriptografado = campoTexto.value;

            
            let textoModificado = textoCriptografado.replace(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/a/g, "ai")
                .replace(/o/g, "ober")
                .replace(/u/g, "ufat");

            textoDestino.textContent = textoModificado;
            textoDestino.classList.add('ativo');

            conteudoAreaCopia.style.display = 'block';
            conteudoMensagens.style.display = 'none';
        }
    });

    btoDescriptografar.addEventListener('click', function () {
        if (!this.disabled) {

            let textoDescriptografado = campoTexto.value;

            
            let textoModificado = textoDescriptografado.replace(/enter/g, "e")
                .replace(/imes/g, "i")
                .replace(/ai/g, "a")
                .replace(/ober/g, "o")
                .replace(/ufat/g, "u");

            textoDestino.textContent = textoModificado;
            textoDestino.classList.add('ativo');

            conteudoAreaCopia.style.display = 'block';
            conteudoMensagens.style.display = 'none';
        }
    });

    
    btoCopiar.addEventListener('click', function () {
        if (campoCopia.value.length > 0) {
            campoCopia.select();
            campoCopia.setSelectionRange(0, 99999);
            document.execCommand('copy');
        }
    });

    
    verificarTexto();
});