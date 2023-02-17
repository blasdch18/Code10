from flask import Flask, render_template, request, redirect, url_for
from productos import Productos

app = Flask(__name__)

lista_productos = [
    Productos('COMPUTADOR','COMPUTADOR 5TA GEN', 2700),
    Productos('IMPRESORA','EPSON STYLUS', 200),
    Productos('USB','SAMSUNG', 30),
]

@app.route("/")
def index():
    return render_template('lista_productos.html', productos=lista_productos)

app.run(debug=True)