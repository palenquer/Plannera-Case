import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useCurrentDate } from "../hooks/useCurrentDate";

export default function Header() {
  const [startDate, setStartDate] = useState(new Date());
  const { updateCurrentDate } = useCurrentDate();

  useEffect(() => {
    updateCurrentDate({
      month: startDate.getMonth() + 1,
      year: startDate.getFullYear(),
    });
  }, [startDate]);

  return (
    <header className="flex py-4 px-2 items-center justify-center gap-4 border-b-2 border-gray-600 pb-4 w-full sticky top-0 bg-white">
      <DatePicker
        className="border-2 border-gray-600 p-1 relative bg-select-arrow bg-no-repeat bg-right bg-small bg-origin-content rounded w-full"
        onChange={(date) => setStartDate(date)}
        dateFormat="MM"
        selected={startDate}
        showMonthYearPicker
        placeholderText="Mês"
      />

      <DatePicker
        className="border-2 border-gray-600 p-1 relative bg-select-arrow bg-no-repeat bg-right bg-small bg-origin-content rounded w-full"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showYearPicker
        placeholderText="Ano"
        dateFormat="yyyy"
      />
    </header>
  );
}
