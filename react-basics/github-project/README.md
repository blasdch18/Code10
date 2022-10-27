# REACT JS

Es una biblioteca de Js para construir interfaces de usuario

## REGLAS

1. Todo componente debe ser una funcion.
2. Todo componente debe empezar con "mayuscula"

``` Js

function MyCard () {
    return <div> My Card </div>
}
```

3. Todo componente debe retornar un solo elemento padre.

``` Js

function MyCard() {
    return (
        <div>
            <h1>Titulo</h1>
            <p> Parrafo </p>
            <div>
                <p> Parrafo hijo 1 </p>
                <div> 
                    <p> Parrafo hijo 2 </p>
    )
}
```

- Nota : Dentro de mi componente puede mas funciones y esas ya no llevan mayuscula
- Eventos : Los nombre de los eventos en React son CamelCase
    -onclick -> onClick
    -onchange -> onChange
    -onsubmit -> onSubmit

``` Js

function MyCard () {
    function mostrarMensaje() {
        console.log('Hola Mundo');
    }
}
