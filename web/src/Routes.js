import { Router, Route, Set } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'
import GeneralLayout from 'src/layouts/GeneralLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={ScaffoldLayout} title="Tickets" titleTo="tickets" buttonLabel="New Ticket" buttonTo="newTicket">
        <Route path="/tickets/new" page={TicketNewTicketPage} name="newTicket" />
        <Route path="/tickets/{id:Int}/edit" page={TicketEditTicketPage} name="editTicket" />
        <Route path="/tickets/{id:Int}" page={TicketTicketPage} name="ticket" />
        <Route path="/tickets" page={TicketTicketsPage} name="tickets" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Seats" titleTo="seats" buttonLabel="New Seat" buttonTo="newSeat">
        <Route path="/seats/new" page={SeatNewSeatPage} name="newSeat" />
        <Route path="/seats/{id:Int}/edit" page={SeatEditSeatPage} name="editSeat" />
        <Route path="/seats/{id:Int}" page={SeatSeatPage} name="seat" />
        <Route path="/seats" page={SeatSeatsPage} name="seats" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Locations" titleTo="locations" buttonLabel="New Location" buttonTo="newLocation">
        <Route path="/locations/new" page={LocationNewLocationPage} name="newLocation" />
        <Route path="/locations/{id:Int}/edit" page={LocationEditLocationPage} name="editLocation" />
        <Route path="/locations/{id:Int}" page={LocationLocationPage} name="location" />
        <Route path="/locations" page={LocationLocationsPage} name="locations" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Events" titleTo="events" buttonLabel="New Event" buttonTo="newEvent">
        <Route path="/events/new" page={EventNewEventPage} name="newEvent" />
        <Route path="/events/{id:Int}/edit" page={EventEditEventPage} name="editEvent" />
        <Route path="/events/{id:Int}" page={EventEventPage} name="event" />
        <Route path="/events" page={EventEventsPage} name="events" />
      </Set>
      <Set wrap={GeneralLayout}>
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
