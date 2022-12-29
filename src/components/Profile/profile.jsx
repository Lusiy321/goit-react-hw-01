import { PropTypes } from 'prop-types';
import { Avatar, Description, Name, Profiles, Tag, Location, Stats, StatsList, Label, Quantity } from './profile.styled.js';


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
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
