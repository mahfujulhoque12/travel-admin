import { NextResponse } from "next/server";

// Static data for flight bookings
const reportFlight = [
  {
    id: 1,
    issueDate: "2024-12-21",
    bookingDate: "2024-12-22",
    bookingID: "B123",
    passengerName: "John Doe report",
    flightDate: "2024-12-25",
    route: "NYC-LAX",
    ticketNumber: "T567",
    totalPrice: "500",
    status: "booked",
    actionPrimaryLabel: "PNR456",
  },
  {
    id: 2,
    issueDate: "2024-12-05",
    bookingDate: "2024-12-06",
    bookingID: "B124",
    passengerName: "Jane Doe",
    flightDate: "2024-12-10",
    route: "LAX-SFO",
    ticketNumber: "T568",
    totalPrice: "300",
    status: "hold",
    actionPrimaryLabel: "PNR457",
  },
  {
    id: 3,
    issueDate: "2024-12-10",
    bookingDate: "2024-12-11",
    bookingID: "B125",
    passengerName: "Alice Smith",
    flightDate: "2024-12-20",
    route: "SFO-NYC",
    ticketNumber: "T569",
    totalPrice: "450",
    status: "booked",
    actionPrimaryLabel: "PNR458",
  },
  {
    id: 4,
    issueDate: "2024-12-15",
    bookingDate: "2024-12-16",
    bookingID: "B126",
    passengerName: "Bob Johnson",
    flightDate: "2024-12-23",
    route: "NYC-ATL",
    ticketNumber: "T570",
    totalPrice: "700",
    status: "cancelled",
    actionPrimaryLabel: "PNR459",
  },
  {
    id: 5,
    issueDate: "2024-12-20",
    bookingDate: "2024-12-21",
    bookingID: "B127",
    passengerName: "Carol Lee",
    flightDate: "2024-12-28",
    route: "ATL-LAX",
    ticketNumber: "T571",
    totalPrice: "600",
    status: "booked",
    actionPrimaryLabel: "PNR460",
  },
  ...Array.from({ length: 90 }, (_, i) => ({
    id: i + 6,
    issueDate: `2024-11-${(i % 30) + 1}`,
    bookingDate: `2024-11-${(i % 30) + 2}`,
    bookingID: `B12${i + 8}`,
    passengerName: `Passenger ${i + 6}`,
    flightDate: `2024-12-${(i % 30) + 5}`,
    route: `Route-${i + 6}`,
    ticketNumber: `T57${i + 2}`,
    totalPrice: `${(i + 1) * 50}`,
    status: i % 3 === 0 ? "booked" : i % 3 === 1 ? "hold" : "cancelled",
    actionPrimaryLabel: `PNR46${i + 1}`,
  })),
];

// GET handler to fetch flight bookings with pagination
export async function GET(req:Request) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "2", 10);

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const paginatedData = reportFlight.slice(startIndex, endIndex);

  const totalPages = Math.ceil(reportFlight.length / limit);

  return NextResponse.json({
    page,
    limit,
    totalPages,
    totalItems: reportFlight.length,
    data: paginatedData,
  });
}
