import AbstractLinkShareButton from './AbstractLinkShareButton'

export default class ShareButtonLinkedIn extends AbstractLinkShareButton {
    
    constructor(clazz: string, url: string) {
        super(clazz, url)
        this.url = url
    }

    createLink(): string{
        return `http://www.linkedin.com/shareArticle?url=${this.url}`
    }
}