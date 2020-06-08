import AbstractShareButton from './AbstractShareButton'

export default class ShareButtonTwitter extends AbstractShareButton {
    
    constructor(clazz: string, url: string) {
        super(clazz, url)
        this.url = url
    }

    createLink(): string{
        return `https://twitter.com/share?url=${this.url}`
    }
}