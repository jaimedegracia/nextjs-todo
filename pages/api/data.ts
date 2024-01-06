import { NextApiRequest, NextApiResponse } from 'next';

export default function data(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    "list": [
        "one",
        "two"
    ]
});
}