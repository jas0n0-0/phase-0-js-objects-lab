const attendee = {
  attendeeId : "T001",
  name : "Alice Smith",
  event : "JavaScript Conference",
  ticketType : "VIP",
  ticketPrice : 150.00
}
function logAttendeeName(attendee){
  console.log(name)
}
function logTicketPrice(attendee){
  console.log(ticketPrice)
}
function updateTicketType(attendee) {
  attendee.ticketType = ""
  
}
function updateTicketPrice(attendee){
  attendee.ticketPrice = ""
}
function removeEventProperty(attendee){
  delete attendee.event
}
function addCheckInProp(attendee){
  attendee.checkedIn = "True"
}