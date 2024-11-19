import { GlobalDOMListenerInstance } from './index'

declare global {
  interface Window {
    GlobalDOMListener: typeof GlobalDOMListenerInstance
  }
}

type EventName = string
