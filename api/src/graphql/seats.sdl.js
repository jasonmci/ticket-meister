export const schema = gql`
  type Seat {
    id: Int!
    section: String!
    row: String!
    number: String!
    location: Location!
    locationId: Int!
  }

  type Query {
    seats: [Seat!]! @requireAuth
    seat(id: Int!): Seat @requireAuth
  }

  input CreateSeatInput {
    section: String!
    row: String!
    number: String!
    locationId: Int!
  }

  input UpdateSeatInput {
    section: String
    row: String
    number: String
    locationId: Int
  }

  type Mutation {
    createSeat(input: CreateSeatInput!): Seat! @requireAuth
    updateSeat(id: Int!, input: UpdateSeatInput!): Seat! @requireAuth
    deleteSeat(id: Int!): Seat! @requireAuth
  }
`
