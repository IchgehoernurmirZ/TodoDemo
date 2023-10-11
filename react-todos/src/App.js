import './App.css';
import TodoTable from './components/TodoTable';

function App() {

  const todos = [
    {rowNumber: 1, rowDescription: 'Feed Dog', rowAssigned: 'User One'},
    {rowNumber: 2, rowDescription: 'Water Plant', rowAssigned: 'User Two'},
    {rowNumber: 3, rowDescription: 'Make Dinner', rowAssigned: 'User Three'},
  ]

  const addTodo = () => {
    if (todos.length > 0) {
      const newTodo = {rowNumber: todos.length + 1,
      rowDescription: 'new todo',
      rowAssigned: 'User Three'
      }
      todos.push(newTodo);
    }
  }

  return (
    <div className="mt-5 container">
     <div className="card">
      <div className="card-header">
        Your Todo's
      </div>
      <div className="card-body">
          <TodoTable todos={todos}/>
          <button className="btn btn-primary" onClick={addTodo}>
            Add New Todo
          </button>
      </div>
     </div>
    </div>
  );
}

export default App;
