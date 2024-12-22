type TableRow = {
  id:number;
    issueDate: string;
    bookingDate: string;
    bookingId: string;
    passengerName: string;
    flightDate: string;
    route: string;
    ticketNumber: string;
    pnr: string;
    totalPrice: string;
    status: string;
    actionOptions: string[];
  };
  
  export const sampleData: TableRow[] = [
    {
      id:1,
      issueDate: '2024-12-20',
      bookingDate: '2024-12-15',
      bookingId: 'BKG12345',
      passengerName: 'John Doe',
      flightDate: '2024-12-25',
      route: 'NYC to LAX',
      ticketNumber: 'TKT56789',
      pnr: 'PNR98765',
      totalPrice: '$450',
      status: 'Confirmed',
      actionOptions: ['View', 'Edit', 'Cancel'],
    },
    {
      id:2,
      issueDate: '2024-12-21',
      bookingDate: '2024-12-16',
      bookingId: 'BKG12346',
      passengerName: 'Jane Smith',
      flightDate: '2024-12-26',
      route: 'LAX to SFO',
      ticketNumber: 'TKT56790',
      pnr: 'PNR98766',
      totalPrice: '$350',
      status: 'Pending',
      actionOptions: ['View', 'Edit', 'Cancel'],
    },
    {
      id:3,
      issueDate: '2024-12-22',
      bookingDate: '2024-12-17',
      bookingId: 'BKG12347',
      passengerName: 'Alice Johnson',
      flightDate: '2024-12-27',
      route: 'SFO to SEA',
      ticketNumber: 'TKT56791',
      pnr: 'PNR98767',
      totalPrice: '$250',
      status: 'Cancelled',
      actionOptions: ['View', 'Edit', 'Cancel'],
    },
    {
      id:4,
      issueDate: '2024-12-22',
      bookingDate: '2024-12-17',
      bookingId: 'BKG12347',
      passengerName: 'Alice Johnson',
      flightDate: '2024-12-27',
      route: 'SFO to SEA',
      ticketNumber: 'TKT56791',
      pnr: 'PNR98767',
      totalPrice: '$250',
      status: 'Cancelled',
      actionOptions: ['View', 'Edit', 'Cancel'],
    },
  ];
  