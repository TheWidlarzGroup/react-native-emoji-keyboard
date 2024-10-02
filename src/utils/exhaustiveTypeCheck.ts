export const exhaustiveTypeCheck = (arg: never, strict = true) => {
  console.log(`unhandled union case for : ${arg}`)
  if (strict) {
    throw new Error(`unhandled union case for : ${arg}`)
  }
}
