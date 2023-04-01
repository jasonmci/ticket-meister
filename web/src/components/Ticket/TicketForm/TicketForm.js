import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const TicketForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.ticket?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="seatId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Seat id
        </Label>

        <NumberField
          name="seatId"
          defaultValue={props.ticket?.seatId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="seatId" className="rw-field-error" />

        <Label
          name="eventId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Event id
        </Label>

        <NumberField
          name="eventId"
          defaultValue={props.ticket?.eventId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="eventId" className="rw-field-error" />

        <Label
          name="price"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Price
        </Label>

        <TextField
          name="price"
          defaultValue={props.ticket?.price}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="price" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default TicketForm
