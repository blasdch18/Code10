from flask import Flask 
#  si el archivo  es el archivo principal del proyecto su valor de la
#  variable  __ name __ sera  '__main__' caso contrario sera None (vacio)
app = Flask(__name__)
# patron de diseño de software (singleton)

# un decorador se usa con el '@' y sirve para poder modificar cierto
# metodo de una clase sin la necesidad de modificar el funcionamiento natural 
# (es una modificacion parcial) luego de utilizar  el decorador se crea una funcion 
# que sera la nueva funcionalidad de ese metodo 
@app.route('/')

def inicio():
    return 'Hola desde mi servidor de Flask'


# debug > cada vez que modificamos algun archivo del proyecto y guardamos, se
# reiniciara el servidor 
app.run(debug=True)