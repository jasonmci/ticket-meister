export const schema = gql`
  type Ticket {
    id: Int!
    seat: Seat!
    seatId: Int!
    event: Event!
    eventId: Int!
    price: Float!
  }

  type Query {
    tickets: [Ticket!]! @requireAuth
    ticket(id: Int!): Ticket @requireAuth
  }

  input CreateTicketInput {
    seatId: Int!
    eventId: Int!
    price: Float!
  }

  input UpdateTicketInput {
    seatId: Int
    eventId: Int
    price: Float
  }

  type Mutation {
    createTicket(input: CreateTicketInput!): Ticket! @requireAuth
    updateTicket(id: Int!, input: UpdateTicketInput!): Ticket! @requireAuth
    deleteTicket(id: Int!): Ticket! @requireAuth
  }
`
