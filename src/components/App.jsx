import { Profile } from "./Profile/profile";
import user from "components/data/user.json";
import data from "components/data/data.json";
import friends from "components/data/friends.json"
import { Stats } from "./Stats/stats";
import { Friends } from "./FriendList/frends";

export const App = () => {
  return <div>
    <Profile user={user} />
    <Stats data={data} />
    <Friends friends={friends} />
  </div>    
};

