export const filterFunction = (
  filterOption,
  time,
  mock_data,
  today_month_number,
  week_start,
  month_number,
  month_name,
  year
) => {
  if (filterOption === "ver todo") {
    switch (time) {
      case "hoy":
        return mock_data.filter(
          (obj) =>
            new Date(obj.fecha).getDate() === today_month_number &&
            new Date(obj.fecha).getMonth() === month_number - 1 &&
            new Date(obj.fecha).getFullYear() === year
        );
      case "esta semana":
        return mock_data.filter((obj) => new Date(obj.fecha) >= week_start);
      case month_name:
        return mock_data.filter(
          (obj) =>
            new Date(obj.fecha) >=
            new Date(month_number.toString() + "/1/" + year.toString())
        );
      default:
        return null;
    }
  } else {
    switch (time) {
      case "hoy":
        return mock_data.filter(
          (obj) =>
            new Date(obj.fecha).getDate() === today_month_number &&
            new Date(obj.fecha).getMonth() === month_number - 1 &&
            new Date(obj.fecha).getFullYear() === year &&
            obj.cobro === filterOption
        );
      case "esta semana":
        return mock_data.filter(
          (obj) =>
            new Date(obj.fecha) >= week_start && obj.cobro === filterOption
        );
      case month_name:
        return mock_data.filter(
          (obj) =>
            new Date(obj.fecha) >=
              new Date(month_number.toString() + "/1/" + year.toString()) &&
            obj.cobro === filterOption
        );
      default:
        return null;
    }
  }
};
