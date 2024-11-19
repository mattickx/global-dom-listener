export const SINGLETON_KEY = Symbol('instance')

type Constructor = new (...args: unknown[]) => unknown

type SingletonClass<T extends Constructor> = T & {
  [SINGLETON_KEY]: InstanceType<T>
}

export const Singleton = <T extends Constructor>(classTarget: T) =>
  new Proxy(classTarget, {
    construct(target: SingletonClass<T>, argArray, newTarget) {
      if (target.prototype !== newTarget.prototype) {
        return Reflect.construct(target, argArray, newTarget)
      }
      if (!target[SINGLETON_KEY]) {
        target[SINGLETON_KEY] = Reflect.construct(target, argArray, newTarget)
      }
      return target[SINGLETON_KEY]
    },
  })
