import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import SeatForm from 'src/components/Seat/SeatForm'

export const QUERY = gql`
  query EditSeatById($id: Int!) {
    seat: seat(id: $id) {
      id
      section
      row
      number
      locationId
    }
  }
`
const UPDATE_SEAT_MUTATION = gql`
  mutation UpdateSeatMutation($id: Int!, $input: UpdateSeatInput!) {
    updateSeat(id: $id, input: $input) {
      id
      section
      row
      number
      locationId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ seat }) => {
  const [updateSeat, { loading, error }] = useMutation(UPDATE_SEAT_MUTATION, {
    onCompleted: () => {
      toast.success('Seat updated')
      navigate(routes.seats())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateSeat({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Seat {seat?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <SeatForm seat={seat} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
