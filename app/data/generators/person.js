module.exports = (faker) => {
  const sex = faker.random.arrayElement(['Male', 'Male', 'Male', 'Male', 'Female'])
  const firstName = faker.name.firstName(sex)
  const lastName = faker.name.lastName(sex)
  const fullName = `${firstName} ${lastName}`
  const email = faker.internet.exampleEmail(firstName, lastName)
  return { sex, firstName, lastName, fullName, email }
}
