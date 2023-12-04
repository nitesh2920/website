import { isPlatformBrowser } from '@angular/common'
import {
  Component,
  ElementRef,
  Inject,
  PLATFORM_ID,
  ViewChild
} from '@angular/core'

@Component({
  selector: 'app-live-code-hero',
  templateUrl: './live-code-hero.component.html',
  styleUrls: ['./live-code-hero.component.scss']
})
export class LiveCodeHeroComponent {
  @ViewChild('typewriter', { static: true }) typewriter: ElementRef

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const typewriter = this.setupTypewriter(this.typewriter.nativeElement)
      typewriter.type()
    }
  }

  setupTypewriter(t: any) {
    var HTML = t.innerHTML

    t.innerHTML = ''

    var cursorPosition = 0,
      tag: any = '',
      writingTag = false,
      tagOpen = false,
      typeSpeed = 5,
      tempTypeSpeed = 0

    var type = function () {
      if (writingTag === true) {
        tag += HTML[cursorPosition]
      }

      if (HTML[cursorPosition] === '<') {
        tempTypeSpeed = 0
        if (tagOpen) {
          tagOpen = false
          writingTag = true
        } else {
          tag = ''
          tagOpen = true
          writingTag = true
          tag += HTML[cursorPosition]
        }
      }
      if (!writingTag && tagOpen) {
        tag.innerHTML += HTML[cursorPosition]
      }
      if (!writingTag && !tagOpen) {
        if (HTML[cursorPosition] === ' ') {
          tempTypeSpeed = 0
        } else {
          tempTypeSpeed = Math.random() * typeSpeed + 20
        }
        t.innerHTML += HTML[cursorPosition]
      }
      if (writingTag === true && HTML[cursorPosition] === '>') {
        tempTypeSpeed = Math.random() * typeSpeed + 20
        writingTag = false
        if (tagOpen) {
          var newSpan = document.createElement('span')
          t.appendChild(newSpan)
          newSpan.innerHTML = tag
          tag = newSpan.firstChild
        }
      }

      cursorPosition += 1
      if (cursorPosition < HTML.length - 1) {
        setTimeout(type, tempTypeSpeed)
      }
    }

    return {
      type: type
    }
  }
}
