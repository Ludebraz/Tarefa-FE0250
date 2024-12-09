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

let arrayT2 = [8, 6, 4 , 1, 59, 7, 9, 89, 5, 3]

function arrayMaxMin(arrayT2){

    let arrayRetorno = [0, 0]
    let aux = 0
    let n = arrayT2.length-1
        for(let j = 0; j < n; j++){
            for(let i = 0; i < n -j; i++){
                if(arrayT2[i] > arrayT2[i+1]){
                aux = arrayT2[i]
                arrayT2[i] = arrayT2[i+1]
                arrayT2[i+1] = aux       
                }
                
            }

        }
    arrayRetorno[0] = arrayT2[0]
    arrayRetorno[1] = arrayT2[9]
    return arrayRetorno
}
