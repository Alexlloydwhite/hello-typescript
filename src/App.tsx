import { MyForm } from './MyForm';
import { MyTable } from './MyTable';

const App = () => {
  return <div style={{ textAlign: "center" }}>
    <MyForm onSubmit={({email, firstName, lastName})=> {
      console.log(firstName, lastName, email)
    }}/>
    <MyTable />
  </div>
}

export default App;
