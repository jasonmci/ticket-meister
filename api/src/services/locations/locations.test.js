import {
  locations,
  location,
  createLocation,
  updateLocation,
  deleteLocation,
} from './locations'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('locations', () => {
  scenario('returns all locations', async (scenario) => {
    const result = await locations()

    expect(result.length).toEqual(Object.keys(scenario.location).length)
  })

  scenario('returns a single location', async (scenario) => {
    const result = await location({ id: scenario.location.one.id })

    expect(result).toEqual(scenario.location.one)
  })

  scenario('creates a location', async () => {
    const result = await createLocation({
      input: {
        name: 'String',
        address: 'String',
        city: 'String',
        state: 'String',
        zip: 'String',
      },
    })

    expect(result.name).toEqual('String')
    expect(result.address).toEqual('String')
    expect(result.city).toEqual('String')
    expect(result.state).toEqual('String')
    expect(result.zip).toEqual('String')
  })

  scenario('updates a location', async (scenario) => {
    const original = await location({
      id: scenario.location.one.id,
    })
    const result = await updateLocation({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a location', async (scenario) => {
    const original = await deleteLocation({
      id: scenario.location.one.id,
    })
    const result = await location({ id: original.id })

    expect(result).toEqual(null)
  })
})
