import { LitElement, html} from './web_modules/lit-element.js'

class MyElement extends LitElement {
    render() {
        return html`Hello Pika Web!`
    }
}

customElements.define('my-element', MyElement);