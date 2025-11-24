<?php
session_start();
require_once 'config.php';

if (empty($_SESSION['email'])) {
    header('Location: usuarios.php');
    exit();
}
?>
<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
    <title>Perfil</title>
    <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
     <style>
      html, body { height: 100%; }
      body { display: flex; flex-direction: column; margin: 0; }
      main { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 1rem; }

      .big-title {
        font-size: 2.25rem;
        font-weight: 800;
        margin-bottom: 1.25rem;
        text-align: center;
        color: #083344;
      }

      /* Contenedor de botones: en móvil apilan, en desktop lado a lado */
      .sections {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 1100px;
        gap: 1rem;
      }

      /* Botones muy grandes que ocupan pantalla disponible */
      .section-btn {
        width: 100%;
        height: calc(40vh - 2rem); /* ocupa altura significativa */
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2.5rem;
        font-weight: 700;
        border-radius: 1rem;
        padding: 1rem;
        box-shadow: 0 6px 18px rgba(0,0,0,0.08);
      }

      /* variantes de color */
      .section-btn.caja { background: linear-gradient(180deg,#000000 5%, #0b5ed7 100%); color:#fff; border: none; }
      .section-btn.cocina { background: linear-gradient(180deg,#000000 5%, #0b5ed7 100%); color:#fff; border: none; }

      /* en pantallas grandes poner lado a lado */
      @media(min-width: 900px) {
        .sections { flex-direction: row; height: 60vh; }
        .section-btn { height: 100%; font-size: 3rem; }
      }

      /* asegurar contraste al enfocar */
      .section-btn:focus { outline: 4px solid rgba(0,0,0,0.08); outline-offset: 2px; }
    </style>
  </head>
   <body class="bg-success"  style="--bs-bg-opacity: .60;">
    <nav class="navbar navbar-expand-lg bg-light text-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.php"><img src="images/logo.jpg" alt="Jinambou" width="50" height="50"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item"><a class="nav-link" href="menu.php">Menu</a></li>
            <li class="nav-item"><a class="nav-link" href="carrito.php">Carrito</a></li>
            <li class="nav-item"><a class="nav-link" href="cerrar_sesion.php">Cerrar Sesión</a></li>
          </ul>
        </div>
      </div>
    </nav>

    <main class="container">
      <div class="w-100 text-center">
        <div class="big-title">¿Qué deseas hacer?</div>

        <div class="sections mx-auto">
          <a href="menu.php" class="section-btn caja" role="button" aria-label="Ir a Caja">
            Hacer Orden
          </a>

          <a href="referencia.php" class="section-btn cocina" role="button" aria-label="Ir a Cocina/Entregas">
            Orden Activa
          </a>
        </div>
        <div class="mt-4" style="max-width:1100px;margin:1rem auto 0;">
        <form method="post" action="cerrar_sesion.php" style="margin:0;">
          <button type="submit" class="btn btn-danger" style="width:100%; padding:1.25rem 1rem; font-size:1.5rem; font-weight:700; border-radius:1rem;">
            Cerrar sesión
          </button>
        </form>
      </div>
      </div>
    </main>
  </body>
</html>
