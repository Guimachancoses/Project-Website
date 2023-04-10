<!DOCTYPE html>
<?php require_once "connect.php"?>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Alocação de Laboratório</title>
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
    <div class="section">
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
                          <div class="remember-forgot">
                              <label><input type="checkbox">Manter-se conectado</label>
                          </div>
                          <button name="login" class="btn mt-4">Entrar</button>
                          <p class="mb-0 mt-4 text-center">
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
                      </div>
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
<script src = "../js/jquery.js"></script>
<script src = "../js/bootstrap.js"></script>
</html>