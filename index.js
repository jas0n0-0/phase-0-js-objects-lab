const attendee = {
  attendeeId : "T001",
  name : "Alice Smith",
  event : "JavaScript Conference",
  ticketType : "VIP",
  ticketPrice : 150.00
}
function logAttendeeName(attendee){
  return console.log(name)
}
function logTicketPrice(attendee){
  return console.log(ticketPrice)
}
function updateTicketType(attendee) {
  return attendee.ticketType = ""
  
}
function updateTicketPrice(attendee){
  return attendee.ticketPrice = ""
}
function removeEventProperty(attendee){
  return delete attendee.event
}
function addCheckInProp(attendee){
  return attendee.checkedIn = "True"
}