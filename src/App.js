import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import Card from './components/UI/Card';
import styles from '../src/components/Users/AddUser.module.css';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUser = (newName, newAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: newName, age: newAge, id: Math.random().toString() }]
    });
  };

  return (
    <Card className={styles.input}>
      <AddUser onAddUser={addUser}/>
      <UsersList users={usersList}/>
    </Card>
  );
}

export default App;
