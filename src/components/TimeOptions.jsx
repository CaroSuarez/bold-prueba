
const TimeOptions = ({time, changeTime, current_month}) => {


  return (
    <div className="options">
      <ul>
        <li
          className={time === "hoy" ? "li-active" : "li"}
          onClick={() => changeTime("hoy")}
        >
          hoy
        </li>
        <li
          className={time === "esta semana" ? "li-active" : "li"}
          onClick={() => changeTime("esta semana")}
        >
          esta semana
        </li>
        <li
          className={time === current_month ? "li-active" : "li"}
          onClick={() => changeTime(current_month)}
        >
          {current_month}
        </li>
      </ul>
    </div>
  );
};

export default TimeOptions;
