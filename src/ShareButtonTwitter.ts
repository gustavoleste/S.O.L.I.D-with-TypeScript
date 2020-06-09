import AbstractLinkShareButton from './AbstractLinkShareButton'

export default class ShareButtonTwitter extends AbstractLinkShareButton {
    
    constructor(clazz: string, url: string) {
        super(clazz, url)
        this.url = url
    }

    createLink(): string{
        return `https://twitter.com/share?url=${this.url}`
    }
}