import { Friend, LiItem, Status, Avatar, Name } from "./friends.styled.jsx";
import { PropTypes } from 'prop-types';

export const Friends = ({friends}) => {
    return (
        <Friend>
            {friends.map(friend => (
                <LiItem key={friend.id}>
                    <Status isOnline={friend.isOnline}></Status>
                    <Avatar src={friend.avatar} alt={friend.name} width="60" />
                    <Name>{friend.name}</Name>
                </LiItem>
            ))}
            
        </Friend>
    );
}

Friends.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
  }),
  ),
}