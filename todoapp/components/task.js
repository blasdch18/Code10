
class Task extends HTMLElement {
    constructor(_text ="") {
        super();
        this.text = _text;
        this.status = "created";
        this.created_at = new Date();
    }
    static get observedAttributes (){
        return ["text","status"];
    }

    setAttribute(attr, value) {
        super.setAttribute(attr, value);
        this.connectedCallback();
    }

    attributeChangeCallback(prop, oldValue, newValue) {
        this[prop] = newValue;
    }

    connectedCallback () {
        const className = {
            created: "",
            done: "bg-primary bg-opacity-25",
            deleted: "bg-danger bg-opacity-25",
        };

        this.innerHTML = `
            <my-card classname="${classname[this.status]}">
                ${this.text}
            </my-card>
        `;
    }
}