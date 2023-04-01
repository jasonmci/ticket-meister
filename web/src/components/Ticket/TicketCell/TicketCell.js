import Ticket from 'src/components/Ticket/Ticket'

export const QUERY = gql`
  query FindTicketById($id: Int!) {
    ticket: ticket(id: $id) {
      id
      seatId
      eventId
      price
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Ticket not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ ticket }) => {
  return <Ticket ticket={ticket} />
}
