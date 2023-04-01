export const schema = gql`
  type Location {
    id: Int!
    name: String!
    address: String!
    city: String!
    state: String!
    zip: String!
    events: [Event]!
  }

  type Query {
    locations: [Location!]! @requireAuth
    location(id: Int!): Location @requireAuth
  }

  input CreateLocationInput {
    name: String!
    address: String!
    city: String!
    state: String!
    zip: String!
  }

  input UpdateLocationInput {
    name: String
    address: String
    city: String
    state: String
    zip: String
  }

  type Mutation {
    createLocation(input: CreateLocationInput!): Location! @requireAuth
    updateLocation(id: Int!, input: UpdateLocationInput!): Location!
      @requireAuth
    deleteLocation(id: Int!): Location! @requireAuth
  }
`
