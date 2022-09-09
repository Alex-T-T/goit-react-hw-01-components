import { Profile } from "./Profile/Profile";
import user from 'components/info/user';
import { StatCard } from "./Statistics/StatCard";
import data from 'components/info/data.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
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

     <StatCard items={data} />
        
    </div>
  );
};
