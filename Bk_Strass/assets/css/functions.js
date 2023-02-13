// 
//  * Trabalho - Web Site - Faculdade Einstein Limeira - 11/2022
//  *
//  *  Turma - 2º Semestre - TADS
//  *  Alunos: 
//  *          Guilherme Luiz Machado Machancoses - RA: 0005/22-1
//  *          Bruno dos Santos Gomes - RA: 0035/22-1
//  *          Carlos Danilo Alves de Souza - RA: 0322/22-1
//  

function valida_form (){
    const nome = document.getElementById("nome").value.length;
    const sobrenome = document.getElementById("sobrenome").value.length;
    const email = document.getElementById("email").value.length;
    if(nome < 3 && nome == ""){
        alert('Por favor, preencha o campo nome');
        document.getElementById("nome").focus();
        return false
    }else if(sobrenome < 3 && sobrenome == ""){
        alert('Por favor, preencha o campo sobrenome');
        document.getElementById("sobrenome").focus();
        return false
    }else if(email < 3 && email == ""){
        alert('Por favor, preencha o campo email');
        document.getElementById("email").focus();
        return false
    }else{
        alert("Por favor prencha tudo");
    }
}