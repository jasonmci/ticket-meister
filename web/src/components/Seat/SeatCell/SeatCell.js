import Seat from 'src/components/Seat/Seat'

export const QUERY = gql`
  query FindSeatById($id: Int!) {
    seat: seat(id: $id) {
      id
      section
      row
      number
      locationId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Seat not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ seat }) => {
  return <Seat seat={seat} />
}
