import { Friend, LiItem, Status, Avatar, Name } from "./friends.styled";

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