import { db } from 'src/lib/db'

export const seats = () => {
  return db.seat.findMany()
}

export const seat = ({ id }) => {
  return db.seat.findUnique({
    where: { id },
  })
}

export const createSeat = ({ input }) => {
  return db.seat.create({
    data: input,
  })
}

export const updateSeat = ({ id, input }) => {
  return db.seat.update({
    data: input,
    where: { id },
  })
}

export const deleteSeat = ({ id }) => {
  return db.seat.delete({
    where: { id },
  })
}

export const Seat = {
  location: (_obj, { root }) => {
    return db.seat.findUnique({ where: { id: root?.id } }).location()
  },
}
