import { Link, routes } from '@redwoodjs/router'

import Tickets from 'src/components/Ticket/Tickets'

export const QUERY = gql`
  query FindTickets {
    tickets {
      id
      seatId
      eventId
      price
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No tickets yet. '}
      <Link to={routes.newTicket()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ tickets }) => {
  return <Tickets tickets={tickets} />
}
