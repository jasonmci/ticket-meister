import { events, event, createEvent, updateEvent, deleteEvent } from './events'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('events', () => {
  scenario('returns all events', async (scenario) => {
    const result = await events()

    expect(result.length).toEqual(Object.keys(scenario.event).length)
  })

  scenario('returns a single event', async (scenario) => {
    const result = await event({ id: scenario.event.one.id })

    expect(result).toEqual(scenario.event.one)
  })

  scenario('creates a event', async (scenario) => {
    const result = await createEvent({
      input: {
        name: 'String',
        datetime: '2023-04-01T00:35:47.246Z',
        locationId: scenario.event.two.locationId,
        description: 'String',
      },
    })

    expect(result.name).toEqual('String')
    expect(result.datetime).toEqual(new Date('2023-04-01T00:35:47.246Z'))
    expect(result.locationId).toEqual(scenario.event.two.locationId)
    expect(result.description).toEqual('String')
  })

  scenario('updates a event', async (scenario) => {
    const original = await event({ id: scenario.event.one.id })
    const result = await updateEvent({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a event', async (scenario) => {
    const original = await deleteEvent({ id: scenario.event.one.id })
    const result = await event({ id: original.id })

    expect(result).toEqual(null)
  })
})
