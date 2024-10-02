export const getHeight = (value: string | number, screenHeight: number) =>
  typeof value === 'number' ? value : (screenHeight / 100) * parseInt(value.replace('%', ''), 10)
