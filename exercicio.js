

    window.alert('Seja bem vindo a minha pagina de teste')
    window.confirm('Voce esta gostando das aulas de Javascript?')
    var nome= window.prompt('Qual é o seu nome?') //Comentário do Javascript*/
    window.alert('É um prazer te conhecer!') // o sinal de + significa concatenação



    //conversão de dados - Numeros inteiros 
    var n1 = Number.parseInt(window.prompt('Digite um numero:'))
    var n2 = Number.parseInt(window.prompt('Digite outro numero:'))
    var soma = n1 + n2
    //duas formas de mostrar o resultado
    window.alert(`A soma entre os numeros ${n1} e ${n2} é ${n3}`)
    window.alert('A soma entre os numeros' + n1 + 'e' + n2 + 'é' + soma) //concatenação


    //conversão de dados - string 
    var nome = window.prompt('Qual é o seu nome?')
    document.write(`Ola, ${nome}! Seu nome tem ${nome.length} letras <br>`) //mostra o tamanho da string
    document.write(`Seu nome em maiusculo é ${nome.toUpperCase()} <br>`)
    document.write(`Seu nome em minusculo é ${nome.toLowerCase()} <br>`)