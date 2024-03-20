const textArea = document.querySelector(".text-area");
const Mensaje = document.querySelector(".mensaje");

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    Mensaje.value = textoEncriptado;
    textArea.value = "";
    Mensaje.style.backgroundImage = "none";
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    Mensaje.value = textoEncriptado;
    textArea.value = "";
}

function btnCopiar(){
    navigator.clipboard.writeText(Mensaje.value)
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }

    }
    return stringEncriptado
}


function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }

    }
    return stringDesencriptado
}

