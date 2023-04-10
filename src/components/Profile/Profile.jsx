import PropTypes from 'prop-types';
import {
  Container,
  Description,
  Name,
  Info,
  Stats,
  Label,
  Quantity,
  Avatar,
  Stat,
} from './Profile.styled';
export const Profile = ({ username, tag, location, avatar, stats }) => (
  <Container>
    <Description>
      <Avatar src={avatar} alt="User avatar" />
      <Name>{username}</Name>
      <Info>@{tag}</Info>
      <Info>{location}</Info>
    </Description>

    <Stats>
      <Stat>
        <Label>Followers</Label>
        <Quantity>{stats.followers.toLocaleString('en-US')}</Quantity>
      </Stat>
      <Stat>
        <Label>Views</Label>
        <Quantity>{stats.views.toLocaleString('en-US')}</Quantity>
      </Stat>
      <Stat>
        <Label>Likes</Label>
        <Quantity>{stats.likes.toLocaleString('en-US')}</Quantity>
      </Stat>
    </Stats>
  </Container>
);
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
