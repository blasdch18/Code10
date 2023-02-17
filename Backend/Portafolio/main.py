from flask import Flask
from flask import render_template

app = Flask(__name__)
@app.route('/')
def index():
    skills = [
        {
            "curso":"PYTHON",
            "imagen":"img/python.png",
            "descripcion": "Intermedia,Avanzado",
        },
        {
            "curso":"DJANGO",
            "imagen":"img/icon.png",
            "descripcion": "Avanzado",
        },
        {
            "curso":"HTML5",
            "imagen":"img/HTML5.png",
            "descripcion": "Avanzado",
        },
    ]
    return render_template('home.html',skills=skills)
    

app.run(debug=True)