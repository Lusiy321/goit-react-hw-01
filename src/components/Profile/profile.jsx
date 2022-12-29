import { PropTypes } from 'prop-types';

export const Profile = ({ user }) => {
   return <div class="profile">
  <div class="description">
    <img
      src={user.avatar}
      alt={user.username}
      class="avatar"
    />
           <p class="name">{user.username}</p>
    <p class="tag">@{user.tag}</p>
    <p class="location">{user.location}</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">{user.stats.followers}</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">{user.stats.views}</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">{user.stats.likes}</span>
    </li>
  </ul>
</div>
};    
  

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number
  }),
};
