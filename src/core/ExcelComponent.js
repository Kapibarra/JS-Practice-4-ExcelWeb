import { DomListener } from '@core/Domlistener'

export class ExcelComponent extends DomListener {
    constructor($root, options = {}) {
            super($root, options.listeners)
            this.name = options.name || ''
            this.emitter = options.emitter
            this.unsubscribers = []
            this.prepare()
        }
        // Настраиваем компонент до init
    prepare() {}

    // Возвращаем шаблон компонента
    toHTML() {
            return ''
        }
        // Уведомляем слушателей про событие event
    $emit(event, ...args) {
            this.emitter.emit(event, ...args)
        }
        // Подписываемчся на событие Event
    $on(event, fn) {
        const unsub = this.emitter.subscribe(event, fn)
        this.unsubscribers.push(unsub)
    }

    // Добавляем DOM слушателей и инициализируем компонент
    init() {
            this.initDOMListeners()
        }
        // Удаляем слушателей
    destroy() {
        this.removeDOMListeners()
        this.unsubscribers.forEach((unsub) => unsub())
    }
}