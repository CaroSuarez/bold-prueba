import {
  faFilter,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconCheckbox } from "../functions/iconRender";

const Filter = ({ filterOption, changeFilter, show, changeShow }) => {
  return (
    <div className="filter">
      <button className="filter-button" onClick={() => changeShow()}>
        FILTRAR &nbsp;
        {show === "hidden" ? (
          <FontAwesomeIcon icon={faFilter} className="icon" />
        ) : (
          <FontAwesomeIcon icon={faTimes} className="icon" />
        )}
      </button>
      <div
        id="filter-container"
        className={
          show === "hidden" ? "filter-options-hidden" : "filter-options"
        }
      >
        <div
          className="option"
          onClick={() => changeFilter("cobro con datáfono")}
        >
          <FontAwesomeIcon
            icon={iconCheckbox(filterOption === "cobro con datáfono")}
            className="icon"
          />
          &nbsp; cobro con datáfono
        </div>
        <div
          className="option"
          onClick={() => changeFilter("cobro con link de pago")}
        >
          <FontAwesomeIcon
            icon={iconCheckbox(filterOption === "cobro con link de pago")}
            className="icon"
          />
          &nbsp; cobro con link de pago
        </div>
        <div className="option" onClick={() => changeFilter("ver todo")}>
          <FontAwesomeIcon
            icon={iconCheckbox(filterOption === "ver todo")}
            className="icon"
          />
          &nbsp; ver todo
        </div>
      </div>
    </div>
  );
};

export default Filter;
