#Resumen del Proyecto - Página Jinanmbou
Este es un sistema de comercio electrónico (e-commerce) para una tienda llamada Jinanmbou, desarrollado en PHP con MySQL. El proyecto incluye funcionalidades de compra, gestión de pedidos y un panel de empleados.

#🎯 Características Principales
Para Clientes:
Autenticación: Registro e inicio de sesión en usuarios.php
Catálogo de Productos: Menú con productos en menu.php
Carrito de Compras: Gestión dinámica en carrito.php
Proceso de Pago: Generación de órdenes en pagos.php
Referencia de Pago: Descarga de recibo PDF en referencia.php
Recuperación de Contraseña: Sistema de tres pasos en recuperacion.php
Perfil de Usuario: Panel personal en perfil.php

Para Empleados:
Panel de Empleados: Selección de rol (Caja/Cocina) en perfil_empleado.php
Gestión de Pedidos: Vista en pedidos.php con cambio de estado
Entregas: Lista de pedidos listos en entrega.php
Cambio de Estado: Transiciones En Preparación → Listo → Entregado en cambiar_estado.php

#🗄️ Base de Datos
usuarios_db: Tabla usuarios (Nombre, Email, Contraseña, Rol)
pedidos_db: Tabla pedidos (Pedido JSON, Estado, Fecha)
Configuración en config.php

#🎨 Tecnologías
Backend: PHP con MySQLi
Frontend: Bootstrap 5.3.8, CSS personalizado
JavaScript: store.js para carrito dinámico, html2pdf para recibos
Estilos: styles.css

#Estructura
Carpeta/
├── Autenticación: usuarios.php, usuarios_registro.php, recuperacion.php
├── Tienda: index.php, menu.php, carrito.php, añadir_a_carrito.php
├── Pagos: pagos.php, referencia.php
├── Empleados: perfil_empleado.php, pedidos.php, entrega.php, cambiar_estado.php
├── Utilidades: cerrar_sesion.php, config.php
├── Frontend: store.js, styles.css
└── Imágenes: /images/
