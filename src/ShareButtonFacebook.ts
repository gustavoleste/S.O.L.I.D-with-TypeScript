import AbstractShareButton from './AbstractShareButton'

export default class ShareButtonFacebook extends AbstractShareButton {
    
    constructor(clazz: string, url: string) {
        super(clazz, url)
        this.url = url
    }

    createLink(): string{
        return `http://www.facebook.com/share.php?u=${this.url}`
    }
}