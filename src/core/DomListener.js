import { capitalize } from "./utils"

export class DomListener {
    constructor($root, listeners = []) {
        if (!$root) {
            throw new Error(`No root provided for DomListener`)
        }
        this.$root = $root
        this.listeners = listeners
    }
    initDOMListeners() {
        // console.log(this.listeners)j

        this.listeners.forEach((listener) => {
           const method = getMethodName(listener)
           if (!this[method]) {
               throw new Error(`Method ${method} is not emplemented in
                ${this.name} Component`)
           }

            // same as addEventListener in dom.js
            this.$root.on(listener, this[method].bind(this))
        })
    }
    removeDOMListener() {
    }
}

function getMethodName(eventName) {
return 'on' + capitalize(eventName)
}