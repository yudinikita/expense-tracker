export const generateColor = (): string => {
  const randNum = Math.random().toString(16)
  return '#' + randNum.substring(randNum.length - 6)
}

export const getFormattedAnalytics = (array: any[], total: number): any[] => {
  return array.map(analyticsExpenseItem => {
    const amount = Math.abs(analyticsExpenseItem?.amount)
    const percent = Math.abs(amount * 100 / total)
    const color = generateColor()
    return {
      id: analyticsExpenseItem?.category?.id,
      title: analyticsExpenseItem?.category?.title,
      amount,
      percent,
      color
    }
  })
}
