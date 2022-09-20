import {ProfileData} from '../Profile/ProfileData';
import {StatisticsData} from '../Statistics/StatisticsData';
import {FriendListData} from '../FriendList/FriendListData';
import {TransactionHistoryData} from '../TransactionHistory/TransactionHistoryData';
import {Container} from './App.styled';

export const App = () => {
  return (
	  <Container>
		  <ProfileData />
		  <StatisticsData />
		  <FriendListData />
		  <TransactionHistoryData />
	  </Container>
  );
};
