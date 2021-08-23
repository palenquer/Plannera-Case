import Head from "next/head";
import { Expenses } from "../../types";
import Header from "../components/Header";
import { GetStaticProps } from "next";
import moment from "moment";
import 'moment/locale/pt-br';
import SubmitButton from "../components/SubmitButton";

interface HomeProps {
  data: Expenses[];
}

export default function Home({ data }: HomeProps) {
  return (
    <>
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

          <tbody>
            {data.map((expense) => {
              return (
                <tr key={expense._id}>
                  <td className="py-2 px-2 border-0 bg-white rounded hidden md:block text-center text-sm">
                    {moment(expense.date, "YYYY-MM-DD hh:mm:ss a").format("L")}
                  </td>

                  <td className="py-2 px-2 border-0 bg-white rounded text-center text-sm">
                    {expense.description}
                  </td>

                  <td className="py-2 px-2 border-0 bg-white rounded text-center text-sm">
                    {expense.currency + expense.value}
                  </td>

                  <td className="py-2 px-2 border-0 bg-white text-gray-500 rounded text-center text-sm">
                    <button className="bg-secondary hover:bg-secondary-hover text-white px-2 py-2 rounded">
                      Selecionar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>

      <SubmitButton />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`http://localhost:3000/api/expenses`);
  const data = await res.json();

  return {
    props: { data },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
