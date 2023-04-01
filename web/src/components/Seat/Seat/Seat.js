import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import 'src/lib/formatters'

const DELETE_SEAT_MUTATION = gql`
  mutation DeleteSeatMutation($id: Int!) {
    deleteSeat(id: $id) {
      id
    }
  }
`

const Seat = ({ seat }) => {
  const [deleteSeat] = useMutation(DELETE_SEAT_MUTATION, {
    onCompleted: () => {
      toast.success('Seat deleted')
      navigate(routes.seats())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete seat ' + id + '?')) {
      deleteSeat({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Seat {seat.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{seat.id}</td>
            </tr>
            <tr>
              <th>Section</th>
              <td>{seat.section}</td>
            </tr>
            <tr>
              <th>Row</th>
              <td>{seat.row}</td>
            </tr>
            <tr>
              <th>Number</th>
              <td>{seat.number}</td>
            </tr>
            <tr>
              <th>Location id</th>
              <td>{seat.locationId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editSeat({ id: seat.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(seat.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Seat
