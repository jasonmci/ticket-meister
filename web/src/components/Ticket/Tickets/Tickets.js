import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Ticket/TicketsCell'
import { truncate } from 'src/lib/formatters'

const DELETE_TICKET_MUTATION = gql`
  mutation DeleteTicketMutation($id: Int!) {
    deleteTicket(id: $id) {
      id
    }
  }
`

const TicketsList = ({ tickets }) => {
  const [deleteTicket] = useMutation(DELETE_TICKET_MUTATION, {
    onCompleted: () => {
      toast.success('Ticket deleted')
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
    if (confirm('Are you sure you want to delete ticket ' + id + '?')) {
      deleteTicket({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Seat id</th>
            <th>Event id</th>
            <th>Price</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.id}>
              <td>{truncate(ticket.id)}</td>
              <td>{truncate(ticket.seatId)}</td>
              <td>{truncate(ticket.eventId)}</td>
              <td>{truncate(ticket.price)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.ticket({ id: ticket.id })}
                    title={'Show ticket ' + ticket.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editTicket({ id: ticket.id })}
                    title={'Edit ticket ' + ticket.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete ticket ' + ticket.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(ticket.id)}
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

export default TicketsList
