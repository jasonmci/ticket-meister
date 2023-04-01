import { Link, routes } from '@redwoodjs/router'

import Locations from 'src/components/Location/Locations'

export const QUERY = gql`
  query FindLocations {
    locations {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No locations yet. '}
      <Link to={routes.newLocation()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ locations }) => {
  return <Locations locations={locations} />
}
