import { Profile } from "./Profile/profile";
import user from "../components/user.json";
import data from "../components/data.json";
import { Stats } from "./Stats/stats";

export const App = () => {
  return <div>
    <Profile user={user} />
    <Stats data={data} />
  </div>    
};

