import AbstractLinkShareButton from './AbstractLinkShareButton'
import EventHandler from './EventHandler'

export default class ShareButtonLinkedIn extends AbstractLinkShareButton {
    
    constructor(eventHandler: EventHandler, clazz: string, url: string) {
        super(eventHandler,clazz, url)
        this.url = url
    }

    createLink(): string{
        return `http://www.linkedin.com/shareArticle?url=${this.url}`
    }
}