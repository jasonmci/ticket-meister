export const schema = gql`
  type Event {
    id: Int!
    name: String!
    datetime: DateTime!
    location: Location!
    locationId: Int!
    description: String!
  }

  type Query {
    events: [Event!]! @requireAuth
    event(id: Int!): Event @requireAuth
  }

  input CreateEventInput {
    name: String!
    datetime: DateTime!
    locationId: Int!
    description: String!
  }

  input UpdateEventInput {
    name: String
    datetime: DateTime
    locationId: Int
    description: String
  }

  type Mutation {
    createEvent(input: CreateEventInput!): Event! @requireAuth
    updateEvent(id: Int!, input: UpdateEventInput!): Event! @requireAuth
    deleteEvent(id: Int!): Event! @requireAuth
  }
`
