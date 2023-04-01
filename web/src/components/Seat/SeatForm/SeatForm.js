import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const SeatForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.seat?.id)
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
          name="section"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Section
        </Label>

        <TextField
          name="section"
          defaultValue={props.seat?.section}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="section" className="rw-field-error" />

        <Label
          name="row"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Row
        </Label>

        <TextField
          name="row"
          defaultValue={props.seat?.row}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="row" className="rw-field-error" />

        <Label
          name="number"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Number
        </Label>

        <TextField
          name="number"
          defaultValue={props.seat?.number}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="number" className="rw-field-error" />

        <Label
          name="locationId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Location id
        </Label>

        <NumberField
          name="locationId"
          defaultValue={props.seat?.locationId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="locationId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default SeatForm
