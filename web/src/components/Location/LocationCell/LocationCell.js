import Location from 'src/components/Location/Location'

export const QUERY = gql`
  query FindLocationById($id: Int!) {
    location: location(id: $id) {
      id
      name
      address
      city
      state
      zip
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Location not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ location }) => {
  return <Location location={location} />
}
