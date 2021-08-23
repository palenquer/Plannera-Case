import expenses from '../../services/expenses.json';

export default function Expenses(req, res) {
    res.status(200).json(expenses)
}