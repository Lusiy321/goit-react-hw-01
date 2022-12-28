import user from '../user.json';

export const Profile = props => (
    <ul>
        <li>username={user.username}</li>
        <li>tag={user.tag}</li>
        <li>location={user.location}</li>
        <li>avatar={user.avatar}</li>
    </ul>
);    
  
