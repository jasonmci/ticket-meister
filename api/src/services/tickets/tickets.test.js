import { Prisma } from '@prisma/client'

import {
  tickets,
  ticket,
  createTicket,
  updateTicket,
  deleteTicket,
} from './tickets'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('tickets', () => {
  scenario('returns all tickets', async (scenario) => {
    const result = await tickets()

    expect(result.length).toEqual(Object.keys(scenario.ticket).length)
  })

  scenario('returns a single ticket', async (scenario) => {
    const result = await ticket({ id: scenario.ticket.one.id })

    expect(result).toEqual(scenario.ticket.one)
  })

  scenario('creates a ticket', async (scenario) => {
    const result = await createTicket({
      input: {
        seatId: scenario.ticket.two.seatId,
        eventId: scenario.ticket.two.eventId,
        price: 11.33,
      },
    })

    expect(result.seatId).toEqual(scenario.ticket.two.seatId)
    expect(result.eventId).toEqual(scenario.ticket.two.eventId)
    expect(result.price).toEqual(new Prisma.Decimal(11.33))
  })

  scenario('updates a ticket', async (scenario) => {
    const original = await ticket({ id: scenario.ticket.one.id })
    const result = await updateTicket({
      id: original.id,
      input: { price: 10.00 },
    })

    expect(result.price).toEqual(new Prisma.Decimal(10.00))
  })

  scenario('deletes a ticket', async (scenario) => {
    const original = await deleteTicket({
      id: scenario.ticket.one.id,
    })
    const result = await ticket({ id: original.id })

    expect(result).toEqual(null)
  })
})
