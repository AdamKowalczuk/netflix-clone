import { NextApiRequest, NextApiResponse } from "next";

import prismadb from '@/libs/prismadb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).end();
    }
    const films = await prismadb.movie.findMany({
      where: {
        type:"film"
      }
    });

    return res.status(200).json(films);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
}
