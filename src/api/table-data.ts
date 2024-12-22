// pages/api/table-data.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = [
    {
      name: 'John Doe',
      isChecked: true,
      image: '/profile1.jpg',
      actionPrimaryLabel: 'Edit',
      actionSecondaryLabel: 'Delete',
    },
    {
      name: 'Jane Smith',
      isChecked: false,
      image: '/profile2.jpg',
      actionPrimaryLabel: 'View',
      actionSecondaryLabel: 'Remove',
    },
  ];
  res.status(200).json(data); // Ensure JSON is returned
}
