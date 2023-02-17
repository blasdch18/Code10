from flask import Flask
app = Flask(__name__)
#Decorador 
@app.route('/')
def index():
    return "Hola munde desde flask"
app.run()