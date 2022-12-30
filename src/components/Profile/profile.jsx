import { PropTypes } from 'prop-types';
import { Avatar, Description, Name, Profiles, Tag, Location, Stats, StatsList, Label, Quantity } from './profile.styled.jsx';


export const Profile = ({user}) => {
  return (
    <Profiles>
      <Description>
        <Avatar src={user.avatar} alt={user.username}  />
        <Name>{user.username}</Name>
        <Tag>@{user.tag}</Tag>
        <Location>{user.location}</Location>
        </Description>   

      <Stats>
        <StatsList>
          <Label>Followers</Label>
          <Quantity>{user.stats.followers}</Quantity>
        </StatsList>
        <StatsList>
          <Label>Views</Label>
          <Quantity>{user.stats.views}</Quantity>
        </StatsList>
        <StatsList>
          <Label>Likes</Label>
          <Quantity>{user.stats.likes}</Quantity>
        </StatsList>
      </Stats>
    </Profiles>
  );
};

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
