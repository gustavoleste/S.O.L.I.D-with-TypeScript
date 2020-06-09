import AbstractShareButton from './AbstractShareButton'

export default abstract class AbstractLinkShareButton extends AbstractShareButton{
    url: string

    constructor(clazz: string, url: string) {
        super(clazz)
        this.url = url
    }

    abstract createLink(): string
    
    createAction(): any {
        const link = this.createLink()
        return () => window.open(link)
    }
    bind() {
        let link = this.createLink()        
        this.eventHnadler.addEventListenerToClass(this.clazz, 'click', () => window.open(link))
    }
}