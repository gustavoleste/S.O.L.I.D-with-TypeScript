import EventHandler from './EventHandler'

export default abstract class AbstractShareButton {
    eventHnadler: EventHandler
    clazz: string

    constructor(eventHandler: EventHandler, clazz: string) {
        this.clazz = clazz
        this.eventHnadler = eventHandler
    }

    abstract createAction(): any

    bind() {
        let action = this.createAction()        
        this.eventHnadler.addEventListenerToClass(this.clazz, 'click', action)
    }
}