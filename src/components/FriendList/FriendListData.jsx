import { FriendList } from './FriendList';
import data from './friends.json';

export const FriendListData = () => {
  return <FriendList friends={data} />;
};
