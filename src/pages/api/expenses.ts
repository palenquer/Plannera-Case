import { expenses } from "../../services/expenses";
import { NextApiRequest, NextApiResponse } from "next";

export default function Expenses(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const expensesList = expenses;

  return response.status(200).json(expensesList);
}
