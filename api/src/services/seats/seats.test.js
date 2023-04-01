import { seats, seat, createSeat, updateSeat, deleteSeat } from './seats'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('seats', () => {
  scenario('returns all seats', async (scenario) => {
    const result = await seats()

    expect(result.length).toEqual(Object.keys(scenario.seat).length)
  })

  scenario('returns a single seat', async (scenario) => {
    const result = await seat({ id: scenario.seat.one.id })

    expect(result).toEqual(scenario.seat.one)
  })

  scenario('creates a seat', async (scenario) => {
    const result = await createSeat({
      input: {
        section: 'String',
        row: 'String',
        number: 'String',
        locationId: scenario.seat.two.locationId,
      },
    })

    expect(result.section).toEqual('String')
    expect(result.row).toEqual('String')
    expect(result.number).toEqual('String')
    expect(result.locationId).toEqual(scenario.seat.two.locationId)
  })

  scenario('updates a seat', async (scenario) => {
    const original = await seat({ id: scenario.seat.one.id })
    const result = await updateSeat({
      id: original.id,
      input: { section: 'String2' },
    })

    expect(result.section).toEqual('String2')
  })

  scenario('deletes a seat', async (scenario) => {
    const original = await deleteSeat({ id: scenario.seat.one.id })
    const result = await seat({ id: original.id })

    expect(result).toEqual(null)
  })
})
