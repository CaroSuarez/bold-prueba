import { mock_data } from "../mock_data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  iconCardRender,
  iconTransactionStateRender,
} from "../functions/iconRender";

const Table = ({ time }) => {
  return (
    <div className="table-container">
      <div className="table-header">Tus ventas de {time} </div>

      <table>
        <thead>
          <tr>
            <th>Transacción</th>
            <th>Fecha y hora</th>
            <th>Método de pago</th>
            <th>ID Transacción Bold</th>
            <th>Monto</th>
          </tr>
        </thead>
        <tbody className="table-body" >
          {mock_data.map((transaction) => (
            <tr key={transaction.id_transaccion_bold}>
              <td className = "blueCell" >
                <span>
                  <FontAwesomeIcon
                    icon={iconTransactionStateRender(transaction.transaccion)}
                    className="icon"
                  />
                </span>
                &nbsp;
                <span>{transaction.transaccion}</span>
              </td>
                
              <td> {transaction.fecha} &nbsp;  {transaction.hora } </td>
              <td>
                <span>
                  <FontAwesomeIcon
                    icon={iconCardRender(transaction.metodo_pago.franquicia)}
                    className="icon"
                  />
                </span>
                &nbsp;
                <span>{transaction.metodo_pago.numero}</span>
              </td>
              <td> {transaction.id_transaccion_bold} </td>
              <td  className = "blueCell"  > 
              
              {"$" + transaction.monto} <br />
              {transaction.deduccion_bold !== 0 ? <p>deducción de bold &nbsp; <em>-${transaction.deduccion_bold}</em> </p>  : null }
              
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
