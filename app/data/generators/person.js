module.exports = (faker) => {
  const gender = faker.random.arrayElement(['Male', 'Male', 'Male', 'Male', 'Female'])
  const firstName = faker.name.firstName(gender)
  const lastName = faker.name.lastName(gender)
  const fullName = `${firstName} ${lastName}`
  const email = faker.internet.exampleEmail(firstName, lastName)
  return { gender, firstName, lastName, fullName, email }
}
