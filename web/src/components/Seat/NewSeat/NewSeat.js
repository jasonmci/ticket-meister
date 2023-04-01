import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import SeatForm from 'src/components/Seat/SeatForm'

const CREATE_SEAT_MUTATION = gql`
  mutation CreateSeatMutation($input: CreateSeatInput!) {
    createSeat(input: $input) {
      id
    }
  }
`

const NewSeat = () => {
  const [createSeat, { loading, error }] = useMutation(CREATE_SEAT_MUTATION, {
    onCompleted: () => {
      toast.success('Seat created')
      navigate(routes.seats())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createSeat({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Seat</h2>
      </header>
      <div className="rw-segment-main">
        <SeatForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewSeat
