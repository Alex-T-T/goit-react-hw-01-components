import { Profile } from "./Profile/Profile";
import user from '../data/user.json';
import { StatCard } from "./Statistics/StatCard";
import data from '../data/data.json';
import { FriendList } from "./Friends/FriendList";
import friends from "../data/friends.json"
import { TransactionTable } from "./Transactions/TransactionTable";
import transactions from "../data/transactions.json"

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >

        <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

     <StatCard stats={data} />
        
      <FriendList friends={friends} />
      
      <TransactionTable transactions={transactions} />
    </div>
  );
};
