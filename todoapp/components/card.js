// Card hereda del objeto HTMLElement(objeto de la libreria Js)
class Card extends HTMLElement { 
    constructor () {
        super(); // tu hijo te esta instanciando
        this.class = "card p-3";
        this.classname = "";
    }

    static get observedAttributes() {// es como un listener
        return ["class", "classname" , "shadow"];
    }

    attributeChangedCallback(prop, oldValue , newValue) { // Atributo que se esta cambiando
        this[prop] = newValue;
        if( prop == "shadow") {
            this.classList.remove("shadow","shadow-sm","shadow-lg");
            if(newValue == "true") this.classList.add("shadow");
        }
        // [ ] para modificar this.name (prop de objetos) this[name] (diccionaro de datos)
    }

    connectedCallback() {// hace alteraciones y se agregan al DOM
        if(this.class) {
            const classList = this.class.split(" ");
            classList.forEach((xclass) => {
                this.classList.add(xclass);
            });
        }

        if(this.classname) {
            const classList = this.classname.split(" ");
            classList.forEach((xclass) => {
                this.classList.add(xclass);
            }) 
        }
    }

    disconnectCallback () {

    }
}

customElements.define("my-card",Card);