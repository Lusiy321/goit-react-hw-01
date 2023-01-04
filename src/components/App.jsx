import { Profile } from "./Profile/profile";
import user from "components/data/user.json";
import data from "components/data/data.json";
import friends from "components/data/friends.json"
import transactions from "components/data/transactions.json"
import { Stats } from "./Stats/stats";
import { Friends } from "./FriendList/frends";
import { Transactions } from "./Transactions/transactions";


export const App = () => {
  return <div>
    <Profile user={user} />
    <Stats title="Upload stats" stats={data} />
    <Friends friends={friends} />
    <Transactions transactions={transactions} />
  </div>    
};

