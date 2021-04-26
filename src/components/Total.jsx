import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const Total = ({ time, total, totalDate }) => {
  return (
    <section className="total-box">
      <div className="total-header">
        <p> Total de ventas de {time} &nbsp;</p>
        <FontAwesomeIcon icon={faInfoCircle} className="icon" />
      </div>
      <div className = "total-content" >
      <p className = "total" > {total} </p>
          <p className = "total-date" > {totalDate} </p>

      </div>
    </section>
  );
};

export default Total;
