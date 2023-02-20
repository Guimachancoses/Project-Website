const pwd = document.getElementById('pwd');
const pwd2 = document.getElementById('pwd2');

function validateRx(){
var pwdv = pwd.value;

    const regx = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/ ;

    if(regx.test(pwdv)){
        pwd.style.background = "white";
        return true;
    }else {
        alert('Senha fora dos padrões permitidos');
        pwd.style.background = "lightyellow";
        return false;
    }
}

function validatePwd(item){
    item.setCustomValidity('');
    item.checkValidity();

    if (item == pwd2){
        if (item.value === pwd.value){
                item.setCustomValidity('');
                pwd2.style.background = "white";
        }else{ item.setCustomValidity('As senhas digitadas estão diferentes');
            pwd2.style.background = "lightyellow";
        }
    }
    
}    

// Solicita validação a cada alteração de entrada

pwd.addEventListener('input', function(){validatePwd(pwd) });
pwd2.addEventListener('input', function(){validatePwd(pwd2) });