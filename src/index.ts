import { Singleton } from "./singleton"

type Listener = {
  selector: string
  controller: AbortController
  callback: (e: Event) => void
}

type EventName = string
type DOMSelector = string

const isBrowser = typeof window !== 'undefined'

@Singleton
class GlobalDOMListener {
  private listeners: Record<EventName, Listener[]> = {}

  constructor() {
    this._init()
  }

  on(
    eventName: EventName,
    selector: DOMSelector,
    callback: Listener['callback']
  ): AbortController {
    if (!this.listeners[eventName]) {
      this.listeners[eventName] = []
      this._bindListener(eventName)
    }
    const controller = new AbortController()
    this.listeners[eventName].push({ selector, controller, callback })
    return controller
  }

  private _isListenerAborted(listener: Listener) {
    return listener.controller.signal.aborted
  }

  private _bindListener(eventName: EventName) {
    if (!isBrowser) return
    window.document.body.addEventListener(
      eventName,
      this._handleEvent.bind(this)
    )
  }

  private _init() {
    if (!isBrowser) return
    for (const eventName in this.listeners) {
      this._bindListener(eventName)
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
      if (this._isListenerAborted(listener)) {
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
