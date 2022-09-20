import {TransactionHistory} from './TransactionHistory';
import data from './transactions.json';

export const TransactionHistoryData = () => {
	return(
		<TransactionHistory transactions = {data}/>
	);
};