import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import { faCcVisa, faCcMastercard } from "@fortawesome/free-brands-svg-icons";

export const mock_data = [
  {
    transaccion: "cobro exitoso",
    fecha: "2021-04-25",
    hora:"17:30",
    metodo_pago: {
      franquicia: "mastercard",
      numero: "123 456 789 1011",
    },
    cobro: "cobro con datáfono",
    id_transaccion_bold: "GZEN23784UBV01",
    monto: 25000,
    deduccion_bold: 1500,
  },
  {
    transaccion: "cobro no realizado",
    fecha: "2021-04-23",
    hora:"17:30",
    metodo_pago: {
      franquicia: "visa",
      numero: "123 456 789 1012",
    },
    cobro: "cobro con datáfono",
    id_transaccion_bold: "GZEN23784UBV02",
    monto: 15000,
    deduccion_bold: 2800,
  },
  {
    transaccion: "cobro exitoso",
    fecha: "2021-04-10",
    hora:"17:30",
    metodo_pago: {
      franquicia: "mastercard",
      numero: "123 456 789 1013",
    },
    cobro: "cobro con datáfono",
    id_transaccion_bold: "GZEN23784UBV03",
    monto: 25000,
    deduccion_bold: 0,
  },
  {
    transaccion: "cobro exitoso",
    fecha: "2021-04-10",
    hora:"17:30",
    metodo_pago: {
      franquicia: "mastercard",
      numero: "123 456 789 1013",
    },
    cobro: "cobro con datáfono",
    id_transaccion_bold: "GZEN23784UBV04",
    monto: 25000,
    deduccion_bold: 0,
  },
  {
    transaccion: "cobro exitoso",
    fecha: "2021-04-10",
    hora:"17:30",
    metodo_pago: {
      franquicia: "mastercard",
      numero: "123 456 789 1013",
    },
    cobro: "cobro con datáfono",
    id_transaccion_bold: "GZEN23784UBV05",
    monto: 25000,
    deduccion_bold: 0,
  },
  {
    transaccion: "cobro exitoso",
    fecha: "2021-04-11",
    hora:"17:30",
    metodo_pago: {
      franquicia: "mastercard",
      numero: "123 456 789 1013",
    },
    cobro: "cobro con datáfono",
    id_transaccion_bold: "GZEN23784UBV06",
    monto: 25000,
    deduccion_bold: 0,
  },
  {
    transaccion: "cobro exitoso",
    fecha: "2021-04-10",
    hora:"17:30",
    metodo_pago: {
      franquicia: "mastercard",
      numero: "123 456 789 1013",
    },
    cobro: "cobro con datáfono",
    id_transaccion_bold: "GZEN23784UBV07",
    monto: 25000,
    deduccion_bold: 0,
  }

];
