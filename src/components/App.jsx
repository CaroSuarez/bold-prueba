import Header from "./Header";
import TimeOptions from "./TimeOptions";
import Total from "./Total";
import Filter from "./Filter"
import Table from "./Table"
import "../style.scss";

function App() {
  return (
    <div className="container">
      <Header />
        <Total time="hoy" total = "123452" totalDate = "2020, Abril" />
        <TimeOptions className="timeOptions" />
        <Filter />
        <Table time = "hoy" />

    </div>
  );
}

export default App;
