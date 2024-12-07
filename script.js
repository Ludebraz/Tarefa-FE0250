function isPalindrome(frase){
    let fraseLower = frase.toLowerCase()
    let fraseSSpace = fraseLower.replace(/\s+/g, "")
    let vetor_palavra = fraseSSpace.split("")


    for(let i = 0; i < frase.length; i++){
        if(vetor_palavra[i] !== vetor_palavra.reverse()[i]){
           return false
        }
    }  
    return true
}

function arrayMaxMin(arr){
    /* Seu código aqui */
}
