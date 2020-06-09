import AbstractShareButton from './AbstractShareButton'

export default class ShareButtonPrint extends AbstractShareButton {
    
    constructor(clazz: string, url: string) {
        super(clazz, url)
        this.url = url
    }

    createLink(): string{
        throw new Error('Unsuported Method Exception')
    }
}