import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({friends}) => {
	return(
		<ul className={css.friendList}>
			{friends.map(friend =>(
				<li className={css.item}>
				<span className={css.status}>{friend.isOnline}</span>
				<img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
				<p className={css.name}>{friend.name}</p>
			 </li>
			))}
</ul>
	)
}

FriendList.protoTypes = {
	friends: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			name: PropTypes.number,
			isOnline: PropTypes.bool,
		})
	)
}