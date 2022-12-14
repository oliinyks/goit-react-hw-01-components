import PropTypes from 'prop-types';
import { ListItems, Item, Status, Img, Name } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <ListItems>
      {friends.map(friend => (
        <Item key={friend.id}>
          <Status status={friend.isOnline}></Status>
          <Img src={friend.avatar} alt="User avatar" width="48" />
          <Name>{friend.name}</Name>
        </Item>
      ))}
    </ListItems>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
		avatar: PropTypes.string.isRequired,
    })
  ).isRequired
};
