export type RecursivePartial<T> = Partial<{
  [P in keyof T]: T[P] extends Record<string, any> ? RecursivePartial<T[P]> : T[P]
}>

export const deepMerge = <T extends Record<K, any>, K extends keyof T>(
  source: T,
  additional: RecursivePartial<T>,
): T => {
  const result: T = { ...source }
  ;(Object.keys(additional) as K[]).forEach((key) => {
    if (
      key in source &&
      key in additional &&
      typeof source[key] === 'object' &&
      typeof additional[key] === 'object'
    ) {
      result[key] = deepMerge(source[key], additional[key] as RecursivePartial<T[K]>)
    } else {
      if (typeof source[key] === 'object' && additional[key] === undefined) return
      result[key] = additional[key] as T[K]
    }
  })
  return result
}
