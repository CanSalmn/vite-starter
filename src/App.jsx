// import ToDolist from './ToDoList'
import Card from './component/Card'
import Counter from './component/Counter'
import ToDoList from './component/ToDoList'

function App() {



  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '50px' }}>
      <Counter />
      {/*  <Card /> */}
      <ToDoList />

    </div>

  )
}

export default App
