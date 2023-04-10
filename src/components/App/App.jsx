import { Wrap } from './App.styled';
import { Containers } from '../Containers/Container';
import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from '../FriendList/FriendList';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';
import user from '../../database/user.json';
import data from '../../database/data.json';
import friends from '../../database/friends.json';
import transactions from '../../database/transactions.json';
export const App = () => {
  return (
    <Wrap>
      <Containers>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Containers>
      <Containers>
        <Statistics title="Upload stats" stats={data} />
      </Containers>
      <Containers>
        <FriendList friends={friends} />
      </Containers>
      <Containers>
        <TransactionHistory items={transactions} />
      </Containers>
    </Wrap>
  );
};
