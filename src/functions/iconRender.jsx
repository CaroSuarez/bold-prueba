import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import { faWindowClose, faMoneyBillAlt } from "@fortawesome/free-regular-svg-icons";
import { faCcVisa, faCcMastercard } from "@fortawesome/free-brands-svg-icons";



export const iconCardRender = (card_name) => {
    switch (card_name){
        case "mastercard":
            return faCcMastercard;
        case "visa":
            return faCcVisa;
    }
}


export const iconTransactionStateRender = (transaction_state) => {
    switch (transaction_state){
        case "cobro exitoso":
            return faMoneyBillAlt;
        case "cobro no realizado":
            return faWindowClose;
    }
}