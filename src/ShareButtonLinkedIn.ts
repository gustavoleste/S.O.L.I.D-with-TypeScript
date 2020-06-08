import AbstractShareButton from './AbstractShareButton'

export default class ShareButtonLinkedIn extends AbstractShareButton {
    
    constructor(clazz: string, url: string) {
        super(clazz, url)
        this.url = url
    }

    createLink(): string{
        return `http://www.linkedin.com/shareArticle?url=${this.url}`
    }
}