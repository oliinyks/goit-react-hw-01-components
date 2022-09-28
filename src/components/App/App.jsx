import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from '../FriendList/FriendList';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';

import user from '../Profile/user.json';
import statisticsData from '../Statistics/data.json';
import friendData from '../FriendList/friends.json';
import transactionData from '../TransactionHistory/transactions.json';

import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
       <Profile
      avatar={user.avatar}
      username={user.username}
      tag={user.tag}
      location={user.location}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />
      <Statistics title="Upload stats" stats={statisticsData} />
      <FriendList friends={friendData} />
      <TransactionHistory transactions={transactionData} />
    </Container>
  );
};
