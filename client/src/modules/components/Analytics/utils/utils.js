export const generateColor = () => {
  return '#' + Math.random().toString(16).substr(-6)
}

export const getTotal = (array) => {
  let total = 0
  array.forEach(item => {
    total += Math.abs(item?.amount)
  })
  return total
}

export const getFormattedAnalytics = (array, total) => {
  return array.map(analyticsExpenseItem => {
    const amount = Math.abs(analyticsExpenseItem?.amount)
    const percent = amount * 100 / total
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
