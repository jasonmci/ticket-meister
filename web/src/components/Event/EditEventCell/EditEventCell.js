import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import EventForm from 'src/components/Event/EventForm'

export const QUERY = gql`
  query EditEventById($id: Int!) {
    event: event(id: $id) {
      id
      name
      datetime
      locationId
      description
    }
  }
`
const UPDATE_EVENT_MUTATION = gql`
  mutation UpdateEventMutation($id: Int!, $input: UpdateEventInput!) {
    updateEvent(id: $id, input: $input) {
      id
      name
      datetime
      locationId
      description
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ event }) => {
  const [updateEvent, { loading, error }] = useMutation(UPDATE_EVENT_MUTATION, {
    onCompleted: () => {
      toast.success('Event updated')
      navigate(routes.events())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateEvent({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Event {event?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <EventForm
          event={event}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
