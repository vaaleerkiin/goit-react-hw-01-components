import { Wrap } from './App.styled';
import { Containers } from '../Containers/Container';
import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import user from '../../database/user.json';
import data from '../../database/data.json';
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
      <Containers></Containers>
      <Containers></Containers>
    </Wrap>
  );
};
