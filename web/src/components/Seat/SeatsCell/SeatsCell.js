import { Link, routes } from '@redwoodjs/router'

import Seats from 'src/components/Seat/Seats'

export const QUERY = gql`
  query FindSeats {
    seats {
      id
      section
      row
      number
      locationId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No seats yet. '}
      <Link to={routes.newSeat()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ seats }) => {
  return <Seats seats={seats} />
}
