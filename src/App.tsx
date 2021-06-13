import { MyForm } from './MyForm';

const App = () => {
  return <div style={{ textAlign: "center" }}>
    <MyForm onSubmit={({email, firstName, lastName})=> {
      console.log(firstName, lastName, email)
    }}/>
  </div>
}

export default App;
