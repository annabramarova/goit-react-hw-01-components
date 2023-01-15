import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';


export const TransactionHistory = ({items}) => (
    <table className={css.transactionTable}>
        <thead className={css.tableHead}>
            <tr className={css.tableRow}>
                <th className={css.tableColumn}>Type</th>
                <th className={css.tableColumn}>Amount</th>
                <th className={css.tableColumn}>Currency</th>
            </tr>
        </thead>
        <tbody>
        {items.map(item => (
          <tr key={item.id} className={css.tableRow}>
          <td className={css.transactionData}>{item.type}</td>
          <td className={css.transactionData}>{item.amount}</td>
          <td className={css.transactionData}>{item.currency}</td>
        </tr>
        ))}
        </tbody>
    </table>
);


TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
  ).isRequired,
};
