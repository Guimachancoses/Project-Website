const nasc = document.getElementById('nasc');

function validateDate(item2){
    item2.setCustomValidity('');
    item2.checkValidity();

    if (item2 == nasc){
        let hoje = new Date(); //get date actually
        let dnasc = new Date(nasc.value);

        let idade = hoje.getFullYear() - dnasc.getFullYear();
        
        let m = hoje.getMonth() - dnasc.getMonth()
        if(m < 0 || (m === 0 && hoje.getDate() < dnasc.getDate())) { 
            idade--;
        }        
        if (idade <= 0 || idade > 130) item2.setCustomValidity('Há algo errado coma a sua idade');
        else if (idade >= 18 ) item2.setCustomValidity('');
        else item2.setCustomValidity('Você precisa ser maior de 18 anos para se cadastrar');
    }
}    

// Solicita validação a cada alteração de entrada

nasc.addEventListener('input', function () { validateDate(nasc) });
