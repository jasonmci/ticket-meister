import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Seat/SeatsCell'
import { truncate } from 'src/lib/formatters'

const DELETE_SEAT_MUTATION = gql`
  mutation DeleteSeatMutation($id: Int!) {
    deleteSeat(id: $id) {
      id
    }
  }
`

const SeatsList = ({ seats }) => {
  const [deleteSeat] = useMutation(DELETE_SEAT_MUTATION, {
    onCompleted: () => {
      toast.success('Seat deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete seat ' + id + '?')) {
      deleteSeat({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Section</th>
            <th>Row</th>
            <th>Number</th>
            <th>Location id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {seats.map((seat) => (
            <tr key={seat.id}>
              <td>{truncate(seat.id)}</td>
              <td>{truncate(seat.section)}</td>
              <td>{truncate(seat.row)}</td>
              <td>{truncate(seat.number)}</td>
              <td>{truncate(seat.locationId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.seat({ id: seat.id })}
                    title={'Show seat ' + seat.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editSeat({ id: seat.id })}
                    title={'Edit seat ' + seat.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete seat ' + seat.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(seat.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SeatsList
