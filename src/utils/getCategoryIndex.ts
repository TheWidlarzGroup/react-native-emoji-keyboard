import { CATEGORIES, type CategoryTypes } from '../types'

export const getCategoryIndex = (disabledCategory: CategoryTypes[], category: CategoryTypes) => ({
  index: CATEGORIES.filter((name) => !disabledCategory.includes(name)).indexOf(category),
})
