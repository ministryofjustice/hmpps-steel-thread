module.exports = (faker) => {
  return [
    faker.address.streetAddress(),
    faker.address.city(),
    faker.address.county(),
    faker.address.zipCode()
  ]
}
