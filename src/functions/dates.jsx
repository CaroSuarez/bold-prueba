export const totalComponentDate = (
  time,
  today,
  month_name,
  year,
  week_start_text,
  current_month
) => {
  switch (time) {
    case "hoy":
      return [today, month_name, year].join(" ");
    case "esta semana":
      return [week_start_text, year, "-", today, month_name, year].join(" ");
    case current_month:
      return [month_name, year].join(" ");
    default:
      return null;
  }
};

export const getCurrentWeekStart = (
  today_week_number,
  month_number,
  today_month_number,
  year,
  current_date
) => {
  if (today_week_number === 1) {
    return new Date(
      month_number.toString() +
        "/" +
        today_month_number.toString() +
        "/" +
        year.toString()
    );
  } else {
    let month =
      new Date(
        current_date - 1000 * 60 * 60 * 24 * today_week_number
      ).getMonth() + 1;
    let day =
      new Date(
        current_date - 1000 * 60 * 60 * 24 * today_week_number
      ).getDate() + 1;
    return new Date(
      month.toString() + "/" + day.toString() + "/" + year.toString()
    );
  }
};
