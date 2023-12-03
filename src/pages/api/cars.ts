import type { NextApiRequest, NextApiResponse } from 'next';
import { cars } from '@/pages/api/data';

type Car = {
  image: string;
  brand: string;
  model: string;
  price: number;
  year: number;
  color: string;
  engine_type: string;
  transmission?: string;
  mileage?: number | null;
  equipment: string[];
};

type Data = {
  cars: Car[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json({ cars });
}
