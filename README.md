# PanelMatic

Proyecto para usar una página como fondo durante clases online, mostrándola en OBS en determinadas circunstancias como por ejemplo, cronométro de tiempo durante los descansos, ejercicios prácticos.

## Uso

El documento se irá desarrollando a la vez que la aplicación.

## Despliege

La aplicación se despliega automáticamente en https://panel-o-matic.netlify.app/. 
Cualquier cambio realizado en la rama `master`, provocará un despliege automático en el servidor de netlify, ejecutando el comando `ng build` y actualizando la web. 

Así también probamos herramientas de desarrollo e integración contínua.

### Ruta correcta del despliege

Para que Netlify despliege correctamente la aplicación, deberemos poner en 
`Build Settings` --> `Publish Directory` --> `dist/nombre-aplicacion`. Nombre aplicación será la carpeta que crea Angular dentro de la carpeta `dist`.

### Activar routing en Netlify

Para que Netlify active correctamente el routing de Angular, deberemos crear un archivo llamado `_redirects` en la carpeta `src` (donde está index.html y demás).

Si no hacemos los siguientes cambios, la aplicación arrancará, pero es posible que los enlaces o rutas a otros componentes nos lleve a una página de error de ``404 Page not found``.

Añadirle el siguiente contenido al archivo `_redirects`.

```html
/*  /index.html 200
```

Y añadir lo siguiente al `angular.json`, en el atributo `assets`

```json
...
"assets": [
    "src/favicon.ico",
    "src/assets",
    {
        "glob": "_redirects",
        "input": "src",
        "output": "/"
    }
],
...
```
