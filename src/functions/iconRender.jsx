import {
  faWindowClose,
  faMoneyBillAlt,
  faSquare,
} from "@fortawesome/free-regular-svg-icons";
import { faCcVisa, faCcMastercard } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";

export const iconCardRender = (card_name) => {
  switch (card_name) {
    case "mastercard":
      return faCcMastercard;
    case "visa":
      return faCcVisa;
    default:
      return null;
  }
};

export const iconTransactionStateRender = (transaction_state) => {
  switch (transaction_state) {
    case "cobro exitoso":
      return faMoneyBillAlt;
    case "cobro no realizado":
      return faWindowClose;
    default:
      return null;
  }
};

export const iconCheckbox = (checked) => {
  if (checked) {
    return faCheckSquare;
  } else {
    return faSquare;
  }
};
