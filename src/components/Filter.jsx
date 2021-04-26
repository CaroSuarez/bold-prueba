import { faFilter, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Filter = () => {
  return (
    <div className="filter">
      <button className="filter-button">
        FILTRAR &nbsp;
        <FontAwesomeIcon icon={faFilter} className="icon" />
        <FontAwesomeIcon icon={faTimes} className="icon" />
      </button>
      <form className="filter-options">
        <label>
          <input
            name="isGoing"
            type="checkbox"
            // checked={false}
            // onChange={false}
          />
          cobro con datáfono
        </label>
        <label>
          <input
            name="isGoing"
            type="checkbox"
            // checked={false}
            // onChange={false}
          />
          cobro con link de pago
        </label>
        <label>
          <input
            name="isGoing"
            type="checkbox"
            // checked={false}
            // onChange={false}
          />
          ver todo
        </label>
      </form>
    </div>
  );
};

export default Filter;
