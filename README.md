# Vibra: recomendador de música

Proyecto web sencillo que recomienda canciones según el estado de ánimo. Cuenta con cuatro categorías: alegre, relajado, concentrado y enérgico. Al seleccionar una categoría se muestran cuatro canciones y un enlace para buscarlas en YouTube.

## Tecnologías

- HTML: estructura de la página.
- CSS: colores, diseño y adaptación a celulares.
- JavaScript: selección del estado de ánimo y presentación de las canciones.

No necesita instalar programas, servidor, base de datos ni claves de API. Las canciones están definidas como ejemplos en `script.js`; la aplicación no reproduce música directamente.

## Cómo probarlo

1. Descarga y descomprime el proyecto.
2. Abre la carpeta `recomendador-musical`.
3. Abre `index.html` con un navegador.
4. Selecciona un estado de ánimo y pulsa «Escuchar» en la canción que quieras buscar.

El diseño usa Google Fonts si hay conexión a internet y utiliza fuentes alternativas cuando no la hay. Los enlaces a YouTube necesitan conexión.

## Archivos

- `index.html`: contenido principal.
- `styles.css`: presentación y diseño adaptable.
- `script.js`: canciones y funcionamiento.
- `README.md`: descripción e instrucciones.

## Subir a GitHub y usar en Azure

Crea un repositorio en GitHub y sube los cuatro archivos directamente a la raíz del repositorio, de modo que `index.html` quede en el nivel principal. Después podrás conectar ese repositorio a Azure Static Web Apps. Como es una página estática sin compilación, los archivos de la aplicación están en la raíz del repositorio. La publicación y la configuración de Azure se realizarán por separado.
