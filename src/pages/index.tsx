import Head from "next/head";
import { Expenses } from "../../types";
import Header from "../components/Header";
import { GetStaticProps } from "next";
import moment from "moment";
import "moment/locale/pt-br";
import SubmitButton from "../components/SubmitButton";
import { useCurrentDate } from "../hooks/useCurrentDate";
import { useEffect, useState } from "react";
import { expensesList } from "../services/expenses";

interface HomeProps {
  data: Expenses[];
}
interface filteredDate {
  _id: number;
  value: number;
  description: string;
  email: string;
  currency: string;
  date: string;
}

export default function Home({ data }: HomeProps) {
  const { currentDate } = useCurrentDate();
  const [filteredDate, setFilteredDate] = useState<filteredDate[]>([]);
  const [filteredExpenses, setFilteredExpenses] = useState<filteredDate[]>([]);

  useEffect(() => {
    const filterDate = data.map((expense) => {
      return {
        _id: expense._id,
        value: expense.value,
        description: expense.description,
        email: expense.email,
        currency: expense.currency,
        date: moment(expense.date, "YYYY-MM-DD hh:mm:ss a").format("L"),
      };
    });

    setFilteredDate(filterDate);
  }, []);

  function Filter() {
    const filter = filteredDate.filter(
      (filteredExpense) =>
        moment(filteredExpense.date).month() + 1 === currentDate.month &&
        moment(filteredExpense.date).year() === currentDate.year
    );

    filter.length != 0
      ? setFilteredExpenses(filter)
      : alert("Não há despesa para o período.");
  }

  return (
    <div className="h-full">
      <Head>
        <title>Expenses</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex flex-col w-full p-2">
        <table className="border-separate w-full">
          <thead className="text-gray-500">
            <tr>
              <th className="w-14 h-10 text-center hidden md:table-cell bg-secondary text-white">
                Data
              </th>
              <th className="w-14 h-10 text-center bg-secondary text-white">
                Despesa
              </th>
              <th className="w-14 h-10 text-center bg-secondary text-white">
                Valor
              </th>
              <th className="w-14 h-10 text-center bg-secondary text-white">
                Ação
              </th>
            </tr>
          </thead>

          <tbody className="w-full h-full">
            {currentDate != null &&
              filteredExpenses.length != 0 &&
              filteredExpenses.map((filteredExpense) => (
                <tr key={filteredExpense._id}>
                  <td className="py-2 px-2 border-0 bg-white rounded hidden md:block text-center text-sm">
                    {filteredExpense.date}
                  </td>

                  <td className="py-2 px-2 border-0 bg-white rounded text-center text-sm">
                    {filteredExpense.description}
                  </td>

                  <td className="py-2 px-2 border-0 bg-white rounded text-center text-sm">
                    {filteredExpense.currency + filteredExpense.value}
                  </td>

                  <td className="py-2 px-2 border-0 bg-white text-gray-500 rounded text-center text-sm">
                    <button className="bg-secondary hover:bg-secondary-hover text-white px-2 py-2 rounded">
                      Selecionar
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </main>

      <SubmitButton onClick={Filter} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { data: expensesList },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
