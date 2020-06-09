import AbstractShareButton from './AbstractShareButton'
import ShareButtonTwitter from './ShareButtonTwitter'
import ShareButtonFacebook from './ShareButtonFacebook'
import ShareButtonLinkedIn from './ShareButtonLinkedIn'
import ShareButtonPrint from './ShareButtonPrint'
import DOMEventHandler from './DOMEventHandler'
import MockEventHandler from './MockEventHandler'

const eventHandler = new DOMEventHandler()
const mockeventHandler = new MockEventHandler()

const twitter: AbstractShareButton = new ShareButtonTwitter(eventHandler,'.btn-twitter','https://www.youtube.com/rodrigobranas')
twitter.bind()
const facebook: AbstractShareButton = new ShareButtonFacebook(eventHandler, '.btn-facebook', 'https://www.youtube.com/rodrigobranas')
facebook.bind()
const linkedIn: AbstractShareButton = new ShareButtonLinkedIn(eventHandler, '.btn-linkedin', 'https://www.youtube.com/rodrigobranas')
linkedIn.bind()
const print: AbstractShareButton = new ShareButtonPrint(eventHandler, '.btn-print')
print.bind()
const mock: AbstractShareButton = new ShareButtonPrint(mockeventHandler, '.btn-mock')
mock.bind()
