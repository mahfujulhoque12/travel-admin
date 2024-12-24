import { NextResponse } from 'next/server';

// Static data for flight bookings
let flightBookings = [
  {
    id: 1,
    issueDate: '12-01-24',
    bookingDate: '12-02-24',
    bookingID: 'B123',
    passengerName: 'John Doe',
    flightDate: '2024-01-03',
    route: 'NYC-LAX',
    ticketNumber: 'T567',
    totalPrice: '500',
    status: "booked",
    actionPrimaryLabel: 'PNR456',
  },
  {
    id: 2,
    issueDate: '12-01-24',
    bookingDate: '12-02-24',
    bookingID: 'B456',
    passengerName: 'Mahfuj',
    flightDate: '2024-02-03',
    route: 'LAX-SFO',
    ticketNumber: 'T890',
    totalPrice: '300',
    status: "hold",
    actionPrimaryLabel: 'PNR456',
  },
  {
    id: 3,
    issueDate: '12-05-24',
    bookingDate: '12-06-24',
    bookingID: 'B456',
    passengerName: 'Jane Smith',
    flightDate: '2024-02-03',
    route: 'LAX-SFO',
    ticketNumber: 'T890',
    totalPrice: '800',
    status: "cancelled",
    actionPrimaryLabel: 'PNR452',
  },
  {
    id: 4,
    issueDate: '12-08-24',
    bookingDate: '12-09-24',
    bookingID: 'B456',
    passengerName: 'Ns Smith',
    flightDate: '2024-02-03',
    route: 'LAX-SFO',
    ticketNumber: 'T890',
    totalPrice: '800',
    status: "cancelled",
    actionPrimaryLabel: 'PNR452',
  },
  {
    id: 5,
    issueDate: '12-10-24',
    bookingDate: '12-11-24',
    bookingID: 'B456',
    passengerName: 'Carry Smith',
    flightDate: '2024-02-03',
    route: 'LAX-SFO',
    ticketNumber: 'T890',
    totalPrice: '800',
    status: "hold",
    actionPrimaryLabel: 'PNR452',
  },
  {
    id: 6,
    issueDate: '12-12-24',
    bookingDate: '12-15-24',
    bookingID: 'B456',
    passengerName: 'Ls Smith',
    flightDate: '2024-02-03',
    route: 'LAX-SFO',
    ticketNumber: 'T890',
    totalPrice: '800',
    status: "booked",
    actionPrimaryLabel: 'PNR452',
  },
];

// GET handler to fetch flight bookings
export async function GET() {
  return NextResponse.json(flightBookings);
}

// DELETE handler to delete a booking by ID
export async function DELETE(req: Request) {
  const url = new URL(req.url);
  const idParam = url.searchParams.get("id");

  if (!idParam || isNaN(Number(idParam))) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const id = Number(idParam);

  // Check if the booking exists
  const bookingIndex = flightBookings.findIndex((booking) => booking.id === id);
  if (bookingIndex === -1) {
    return NextResponse.json({ error: "Booking not found" }, { status: 404 });
  }

  // Remove the booking
  flightBookings.splice(bookingIndex, 1);

  return NextResponse.json({ message: "Deleted successfully" });
}