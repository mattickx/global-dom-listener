import { GlobalDOMListenerFactory, GlobalDOMListenerInstance } from './index'

declare global {
  interface Window {
    GlobalDOMListenerFactory: typeof GlobalDOMListenerFactory
    GlobalDOMListenerInstance: typeof GlobalDOMListenerInstance
  }
}

type EventName = string
