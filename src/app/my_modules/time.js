const FindYearJSX = () => {
  const curYear = new Date().getFullYear()
  return `Сейчас на дворе ${curYear} год`
}

export const CurrentYearJSX = FindYearJSX()
