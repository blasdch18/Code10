from flask import Flask

app = Flask(__name__)

@app.route('/')

def index():
    return "Hola mundo desde Flask - Python - CODIGO"

app.run(debug=True, port=8000)
