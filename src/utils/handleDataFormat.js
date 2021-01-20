const handleDataFormat = (data, paginationLength) => {
  // sort
  data.sort((a, b) => (a.name >= b.name) ? 1 : -1)

  //pagination
  let pagesOfCards = []
  let  pagLength = Math.ceil(data.length / paginationLength)
  for (let i=0; i<data.length; i+=paginationLength) {
      let chunk = data.slice(i, i+paginationLength)
      pagesOfCards.push(chunk)
  }
  return [ pagesOfCards, pagLength]
}

export default handleDataFormat