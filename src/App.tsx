import { useState } from 'react';
import { MyForm } from './MyForm';
import { nanoid } from 'nanoid';
import { MyTable } from './MyTable';

const App = () => {
  const [rows, setRows] = useState([{
    id: '45',
    firstName: 'Bob',
    lastName: 'bob2',
    email: 'bob@bob.com',
  }]);

  return <div style={{ textAlign: "center" }}>
    <MyForm onSubmit={(data) => {
      setRows(currentRows => [
        {
          id: nanoid(),
          ...data
        },
        ...currentRows
      ])
    }} />
    <MyTable rows={rows} />
  </div>
}

export default App;
