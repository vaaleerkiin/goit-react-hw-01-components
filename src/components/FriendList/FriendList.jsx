import PropTypes from 'prop-types';
import { List, Item, Status, Avatar, Name } from './FriendList.styled';

export const FriendList = ({ friends }) => (
  <List>
    {friends.map(el => (
      <Item key={el.id}>
        <Status status={el.isOnline}></Status>
        <Avatar src={el.avatar} alt="User avatar" width="48" />
        <Name>{el.name}</Name>
      </Item>
    ))}
  </List>
);
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
