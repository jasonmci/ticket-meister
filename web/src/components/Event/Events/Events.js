import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Event/EventsCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_EVENT_MUTATION = gql`
  mutation DeleteEventMutation($id: Int!) {
    deleteEvent(id: $id) {
      id
    }
  }
`

const EventsList = ({ events }) => {
  const [deleteEvent] = useMutation(DELETE_EVENT_MUTATION, {
    onCompleted: () => {
      toast.success('Event deleted')
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
    if (confirm('Are you sure you want to delete event ' + id + '?')) {
      deleteEvent({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Datetime</th>
            <th>Location id</th>
            <th>Description</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td>{truncate(event.id)}</td>
              <td>{truncate(event.name)}</td>
              <td>{timeTag(event.datetime)}</td>
              <td>{truncate(event.locationId)}</td>
              <td>{truncate(event.description)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.event({ id: event.id })}
                    title={'Show event ' + event.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editEvent({ id: event.id })}
                    title={'Edit event ' + event.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete event ' + event.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(event.id)}
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

export default EventsList
