function verifyWord(word){
    if(typeof word == "number"){
        console.log(`Você digitou: ${word}. Números não são válidos!`)
    } else{
        verifyPalindrome(word);
    }
}

verifyWord("OVo")

function verifyPalindrome(word){
    var wordToUpperCase = word.toUpperCase()
    var reverse = word.toUpperCase().split('').reverse().join('')
    if(wordToUpperCase == reverse){
        console.log(`A palavra ${wordToUpperCase} é um Palíndromo.`)

    } else {
        console.log(`A palavra "${wordToUpperCase}" não é um Palíndromo. \nO resultado desta palavra revertida é ${reverse} `)
    }
}
