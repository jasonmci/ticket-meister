import { Link, routes } from '@redwoodjs/router'

const GeneralLayout = ({ children }) => {
  return (
    <>
    <header>
      <h1>TicketMeister</h1>
      <nav>
        <ul>
          <li>
            <Link to={routes.about()}>About</Link>
          </li>
        </ul>
      </nav>
    </header>
    <main>{children}</main>
  </>
  )
}

export default GeneralLayout
