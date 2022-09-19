import PropTypes from 'prop-types';
// import css from './TransactionHistory.module.css';

export const TransactionHistory = ({transactions}) => {
	return(
		<table class="transaction-history">
		  <thead>
			 <tr>
				<th>Type</th>
				<th>Amount</th>
				<th>Currency</th>
			 </tr>
		  </thead>
		  <tbody>
{transactions.map(transaction => (
			 <tr key={transaction.id}>
				<td>{transaction.type}</td>
				<td>{transaction.amount}</td>
				<td>{transaction.currency}</td>
			 </tr>
))}
		  </tbody>
		</table>
			);
}

TransactionHistory.propTypes = {
	transactions: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			type: PropTypes.string,
			amount: PropTypes.string,
			currency: PropTypes.string,
		})
	),
}