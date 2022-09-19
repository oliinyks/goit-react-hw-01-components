import {ProfileData} from './components/Profile/ProfileData';
import {StatisticsData} from './components/Statistics/StatisticsData';
import {FriendListData} from './components/FriendList/FriendListData';
import {TransactionHistoryData} from './components/TransactionHistory/TransactionHistoryData';

export const App = () => {
  return (
	  <div>
		  <ProfileData />
		  <StatisticsData />
		  <FriendListData />
		  <TransactionHistoryData />
	  </div>
  );
};
