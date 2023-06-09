import { db } from 'src/lib/db'

export const tickets = () => {
  return db.ticket.findMany()
}

export const ticket = ({ id }) => {
  return db.ticket.findUnique({
    where: { id },
  })
}

export const createTicket = ({ input }) => {
  return db.ticket.create({
    data: input,
  })
}

export const updateTicket = ({ id, input }) => {
  return db.ticket.update({
    data: input,
    where: { id },
  })
}

export const deleteTicket = ({ id }) => {
  return db.ticket.delete({
    where: { id },
  })
}

export const Ticket = {
  seat: (_obj, { root }) => {
    return db.ticket.findUnique({ where: { id: root?.id } }).seat()
  },
  event: (_obj, { root }) => {
    return db.ticket.findUnique({ where: { id: root?.id } }).event()
  },
}
