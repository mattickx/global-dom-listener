import { Singleton } from "./singleton"

type Listener = {
  selector: string
  controller: AbortController
  callback: (e: Event) => void
}

type EventName = string
type DOMSelector = string

@Singleton
class GlobalDOMListener {
  public isBrowser = typeof window !== 'undefined'
  private listeners: Record<EventName, Listener[]> = {}
  private useCaptureEventNames: EventName[] = ['blur', 'error', 'focus', 'load', 'resize', 'scroll'] as const

  constructor() {
    this.init()
  }

  on(
    eventName: EventName,
    selector: DOMSelector,
    callback: Listener['callback']
  ): AbortController {
    if (!this.listeners[eventName]) {
      this.listeners[eventName] = []
      this.bindListener(eventName)
    }
    const controller = new AbortController()
    this.listeners[eventName].push({ selector, controller, callback })
    return controller
  }

  private isListenerAborted(listener: Listener) {
    return listener.controller.signal.aborted
  }

  private shouldUseCapture(eventName: EventName) {
    return this.useCaptureEventNames.includes(eventName)
  }

  private bindListener(eventName: EventName) {
    if (!this.isBrowser) return
    window.document.addEventListener(
      eventName,
      this._handleEvent.bind(this),
      this.shouldUseCapture(eventName),
    )
  }

  private init() {
    if (!this.isBrowser) return
    for (const eventName in this.listeners) {
      this.bindListener(eventName)
    }
  }

  private _handleEvent(
    e:
      | MouseEvent
      | KeyboardEvent
      | TouchEvent
      | PointerEvent
      | WheelEvent
      | InputEvent
      | FocusEvent
      | Event
  ) {
    if (!e.target) return
    const eventName = e.type
    for (let i = this.listeners[eventName]?.length - 1; i >= 0; i--) {
      const listener = this.listeners[eventName][i]
      if (this.isListenerAborted(listener)) {
        this.listeners[eventName].splice(i, 1)
        continue
      }
      const target = (e.target as Element).closest(listener.selector)
      if (target && target.matches(listener.selector)) {
        listener.callback({ ...e, target })
      }
    }
  }
}

export const GlobalDOMListenerInstance = new GlobalDOMListener()

if (GlobalDOMListenerInstance.isBrowser) {
  window.GlobalDOMListener = GlobalDOMListenerInstance
}
