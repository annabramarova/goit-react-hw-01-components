import {Container} from './App.styled'

import { data, friends, user, transactions } from 'data';

import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';


const { username, tag, location, avatar, stats } = user;

export const App = () => {
  return (
    <Container>
       <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
       <FriendList friends={friends} />
      <TransactionHistory items={transactions} /> 
    </Container>
  );
};
