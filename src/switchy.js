function switchy(input) {
  switch (input) {
    case 'A':
    case 'B':
      return 'A or B'
    case 'C':
      return 'C'
    default:
      return 'other'
               }
}

module.exports = { switchy }
