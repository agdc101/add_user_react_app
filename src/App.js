import React from 'react';
import AddUser from './components/Users/AddUser';
import Card from './components/UI/Card';
import styles from '../src/components/Users/AddUser.module.css';

function App() {
  return (
    <Card className={styles.input}>
      <AddUser/>
    </Card>
  );
}

export default App;
