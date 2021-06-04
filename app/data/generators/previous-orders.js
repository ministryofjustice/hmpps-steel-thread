module.exports = (faker, currentOrder, generatorHelpers) => {
  return [
    {
      'title': 'ORA Community Order (12 Months)',
      'description': 'Careless driving - 80400',
      'endDate': generatorHelpers.toISODate(faker.date.between('1999-01-01', currentOrder.convictionDate))
    }
  ]
}
