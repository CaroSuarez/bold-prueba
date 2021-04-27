import { totalComponentDate, getCurrentWeekStart } from "../functions/dates";
import { filterFunction } from "../functions/filterFunction";
import { months } from "../constants/dateTexts";
import { useEffect, useState } from "react";
import { mock_data } from "../mock_data";
import TimeOptions from "./TimeOptions";
import Header from "./Header";
import Filter from "./Filter";
import Table from "./Table";
import Total from "./Total";
import "../style.scss";

function App() {
  let current_date = new Date();
  let today_week_number = current_date.getDay();
  let today_month_number = current_date.getDate();
  let month_number = current_date.getMonth() + 1;
  let month_name = months[month_number - 1];
  let year = current_date.getFullYear();

  const [time, setTime] = useState("hoy");
  const [totalAmount, setTotalAmount] = useState(0);
  const [show, setShow] = useState("hidden");
  const [filterOption, setFilterOption] = useState("ver todo");

  const changeTime = (option) => {
    setTime(option);
  };

  const changeShow = () => {
    show === "hidden" ? setShow("") : setShow("hidden");
  };

  const changeFilter = (option) => {
    setFilterOption(option);
  };

  let week_start = getCurrentWeekStart(
    today_week_number,
    month_number,
    today_month_number,
    year,
    current_date
  );

  let week_start_text = week_start
    .getDate()
    .toString()
    .concat(" ", months[week_start.getMonth()]);

  let total_date_text = totalComponentDate(
    time,
    today_month_number.toString(),
    month_name,
    year,
    week_start_text,
    month_name
  );

  let filteredData = filterFunction(
    filterOption,
    time,
    mock_data,
    today_month_number,
    week_start,
    month_number,
    month_name,
    year
  );

  useEffect(() => {
    const rememberedFilter = localStorage.getItem("persistentFilter");
    const rememberedTime = localStorage.getItem("persistentTime");
    rememberedFilter === null
      ? setFilterOption("ver todo")
      : setFilterOption(rememberedFilter);
    rememberedTime === null ? setTime("hoy") : setTime(rememberedTime);
  }, []);

  useEffect(() => {
    localStorage.setItem("persistentFilter", filterOption);
    localStorage.setItem("persistentTime", time);
  }, [filterOption, time]);

  useEffect(() => {
    const sumCallback = (acc, cur) => {
      return acc + cur.monto;
    };
    let sum = filteredData?.reduce(sumCallback, 0);
    setTotalAmount(sum);
  }, [filteredData]);

  return (
    <div className="container">
      <Header />
      <Total time={time} total={totalAmount} text={total_date_text} />
      <TimeOptions
        time={time}
        changeTime={changeTime}
        current_month={month_name}
      />
      <Table time={time} data={filteredData} />
      <Filter
        filterOption={filterOption}
        changeFilter={changeFilter}
        show={show}
        changeShow={changeShow}
      />
    </div>
  );
}

export default App;
