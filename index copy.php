<!DOCTYPE html>
<?php require_once "connect.php"?>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Reserve Lab</title>

    <link rel="icon" 
        type="image/jpg" 
        href="https://scontent.fcpq8-1.fna.fbcdn.net/v/t39.30808-6/328476839_904244333952155_2647975080732862430_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFTl15UXEzg_5M_mkXUeo2FhL8UvCp3iAaEvxS8KneIBsT-xoZUE2Vlf9A6rZZootsRgjQ33X1-iZxGCAaSWvgb&_nc_ohc=bZq4bTH6s0gAX_RHhWa&_nc_ht=scontent.fcpq8-1.fna&oh=00_AfCThSnTT5trsoDKxGZO-PvXg-VGx6fKJOT2CRrp3Gd4jw&oe=6439D9E5" />
 
<!-- Calender CSS -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      href="https://unicons.iconscout.com/release/v2.1.9/css/unicons.css"
    />
    <link rel="stylesheet" type = "text/css" href="css/stylelg.css" />
  </head>
  <body>
    <!-- partial:index.partial.html -->
      <div class="container">
        <div class="row full-height justify-content-center">
          <div class="col-12 text-center align-self-center py-5">
            <div class="section pb-5 pt-5 pt-sm-2 text-center">
              <h6 class="mb-0 pb-3">
                <span>Login</span><span>Cadastre-se</span>
              </h6>
              <div id='msgError'></div>
              <input
                class="checkbox"
                type="checkbox"
                id="reg-log"
                name="reg-log"
              />
              <label for="reg-log"></label>
              <div class="card-3d-wrap mx-auto">
                <div class="card-3d-wrapper">
                  <div class="card-front">
                    <div class="center-wrap">
                      <form method="POST" action="">
                        <div class="section text-center">
                          <div class="logoeinstein" align="left">
                            <img src="https://portal.einstein-net.com.br/moodle/pluginfile.php/1/theme_moove/logo/1674527758/logo.png">
                          </div>
                          <div class="form-group">
                            <input
                              type="text"
                              name="ra"
                              maxlength="7"
                              class="form-style"
                              placeholder="Digite seu RA"
                              id="usuario"
                              autocomplete="on"
                            />
                            <i class="input-icon uil uil-at"></i>
                          </div>
                          <div class="form-group mt-2">
                            <input
                              type="password"
                              name="password"
                              class="form-style"
                              placeholder="Digite sua senha"
                              id="senha"
                              autocomplete="off"
                              required
                            />
                            <i class="input-icon uil uil-lock-alt"></i>
                          </div>
                          <button name="login" class="btn mt-4">Entrar</button>
                          <p class="mb-0 mt-3 text-center">
                            <a href="#" onclick="entrar()" class="link">Esqueceu sua senha?</a>
                          </p>
                        </div>
                      </form>
                      <?php require_once 'login.php'?>
                    </div>
                  </div>
                  <div class="card-back">
                    <div class="center-wrap">
                      <div class="section text-center">
                        <img class="logoeinstein" src="https://portal.einstein-net.com.br/moodle/pluginfile.php/1/theme_moove/logo/1674527758/logo.png">
                        
                        <form method="POST" action="" id="form-cadastro" onsubmit="enviarCadastro(event)">
                        <div class="form-group">
                          <input
                            type="text"
                            name="logname"
                            class="form-style"
                            placeholder="Digite seu nome completo"
                            id="logname"
                            autocomplete="on"
                          />
                          <i class="input-icon uil uil-user"></i>
                        </div>
                        <div class="form-group mt-2">
                          <input
                            type="email"
                            name="logemail"
                            class="form-style"
                            placeholder="Digite seu email"
                            id="logemail"
                            autocomplete="on"
                          />
                          <i class="input-icon uil uil-at"></i>
                        </div>
                        <div class="form-group mt-2">
                          <input
                            type="password"
                            name="logpass"
                            class="form-style"
                            placeholder="Digite sua senha"
                            id="logpass"
                            autocomplete="off"
                          />
                          <i class="input-icon uil uil-lock-alt"></i>
                        </div>
                        <a href="#" class="btn mt-4">Enviar</a>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <!-- partial -->
  </body>
<script src = "./js/jquery.js"></script>
<script src = "./js/bootstrap.js"></script>
<script src="./js/send_register.js"></script>

<script>

const input = document.getElementById('usuario');

// adiciona um evento para formatar o número ao perder o foco do input
input.addEventListener('blur', function() {
  const value = this.value;
  
  // verifica se o valor tem 7 caracteres e contém apenas números
  if (value.length === 7 && /^\d+$/.test(value)) {
    const formattedValue = formatNumber(value);
    
    // define o valor formatado como o valor do input
    this.value = formattedValue;
  } else {
    // alert('Por favor, digite um número de 7 dígitos.');
    this.focus();
  }
});

// função para formatar o número
function formatNumber(number) {
  const firstPart = number.substring(0, 4);
  const secondPart = number.substring(4, 6);
  const thirdPart = number.substring(6, 7);
  
  return `${firstPart}/${secondPart}-${thirdPart}`;
}
</script>
</html>