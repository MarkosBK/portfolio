export const getCategoryColor = (category: string): string => {
  switch (category) {
    case 'current':
      return 'text-green-600 bg-green-100 dark:bg-green-900/20'
    case 'previous':
      return 'text-blue-600 bg-blue-100 dark:bg-blue-900/20'
    case 'personal':
      return 'text-purple-600 bg-purple-100 dark:bg-purple-900/20'
    case 'first':
      return 'text-orange-600 bg-orange-100 dark:bg-orange-900/20'
    default:
      return 'text-primary bg-primary/10'
  }
}

export const getCategoryLabel = (category: string): string => {
  switch (category) {
    case 'current':
      return 'Current Work'
    case 'previous':
      return 'Previous Work'
    case 'personal':
      return 'Personal'
    case 'first':
      return 'First Experience'
    default:
      return category.toUpperCase()
  }
}
