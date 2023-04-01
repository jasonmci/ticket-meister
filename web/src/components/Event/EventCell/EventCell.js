import Event from 'src/components/Event/Event'

export const QUERY = gql`
  query FindEventById($id: Int!) {
    event: event(id: $id) {
      id
      name
      datetime
      locationId
      description
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Event not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ event }) => {
  return <Event event={event} />
}
