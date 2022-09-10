import { Profile } from "./Profile/Profile";
import user from 'components/info/user';
import { StatCard } from "./Statistics/StatCard";
import data from 'components/info/data.json';
import { FriendList } from "./Friends/FriendList";
import friends from "components/info/friends.json"
import { TransactionTable } from "./Transactions/TransactionTable";
import transactions from "components/info/transactions.json"

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
