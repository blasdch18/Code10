from flask import Flask, request
from flask_cors import CORS
#  si el archivo  es el archivo principal del proyecto su valor de la
#  variable  __ name __ sera  '__main__' caso contrario sera None (vacio)
app = Flask(__name__)
# patron de diseño de software (singleton)

# ahora configuraremos nuestro CORS ( control de acceso de REcursos Cruzados)
# origins = '*'
# methods = '*'
CORS(app=app, origins=['http://127.0.0.1:5500'], methods=['GET','POST'])

usuarios = [
    {
        'nombre':'Eduardo',
        'apellido':'Juarez'
    },
    {
        'nombre':'Juana',
        'apellido':'Rodriguez'
    },
    {
        'nombre':'Roberto',
        'apellido':'Castillo'
    }
]

# un decorador se usa con el '@' y sirve para poder modificar cierto
# metodo de una clase sin la necesidad de modificar el funcionamiento natural 
# (es una modificacion parcial) luego de utilizar  el decorador se crea una funcion 
# que sera la nueva funcionalidad de ese metodo 
@app.route('/') #endpoint

def inicio():
    return 'Hola desde mi servidor de Flask'

# ENDPOINT (punto final)  declaracion de la finalizacion de la URL que indicara 
# que accion se debe realizar 
@app.route('/mostrar-hora', methods = ['GET','POST'])
def mostrarHora():
    # CONTROLLER  (controlador) > es la funcionabilidad que se realizara dentro
    # de un determinado endpoint
    # request > me dara toda la informacion que viene desde el cliente
    print(request.method)
    # no se  suele retornar strings (cadena de texto)
    # sino que se utiliza diccionarios
    if request.method == 'GET':
        return {
            'content':'ME hiciste GET'
        }
    elif request.method == 'POST':
        return {
            'content':'Me hiciste POST'
        }
    # aqui no sera accesible ya que los metodos para acceder siempre sera GET o POST
    return {
        'content': '22:50:15'
    }
    
@app.route('/usuarios',methods=['GET','POST'])
def gestionUsuario():
    if request.method == 'GET':
        #devolvemos los usuarios
        return {
            'message':'Los usuarios son',
            'content': usuarios
        }
    elif request.method == 'POST':
        # agregar un nuevo usuario
        # request.data > mostrara la informacion proveniente del body en formato bytes
        # get_json() > convierte el body entrante en un diccionario  desde un JSON
        print(request.get_json())
        data = request.get_json()
        usuarios.append(data)
        return {
            'message':'Usuario agregado exitosamente'
        }
# debug > cada vez que modificamos algun archivo del proyecto y guardamos, se
# reiniciara el servidor 
app.run(debug=True)