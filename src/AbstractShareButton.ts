import EventHandler from './EventHandler'

export default abstract class AbstractShareButton {
    eventHnadler: EventHandler
    clazz: string
    url: string

    constructor(clazz: string, url: string) {
        this.clazz = clazz
        this.url = url
        this.eventHnadler = new EventHandler()
    }

    abstract createLink(): string
    bind() {
        let link = this.createLink()        
        this.eventHnadler.addEventListenerToClass(this.clazz, 'click', () => window.open(link))
    }
}