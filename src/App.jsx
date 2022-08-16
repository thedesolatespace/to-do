import { useState } from 'react';
import { Container } from './App.styles';
import { Input } from './components/Input';
import { List } from './components/List';
import { Title } from './components/Title';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, done: false, title: 'TODO' },
    { id: 2, done: false, title: 'TODO2' },
    { id: 3, done: false, title: 'TODO3' },
  ]);

  function addTodo(value) {
    setTodos(
      todos.concat({
        title: value,
        id: Date.now(),
        completed: false,
      })
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function markDone(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done;
          console.log(todo.id, id);
        }
        return todo;
      })
    );
  }
  return (
    <div className="App">
      <Container>
        <Title />
        <Input addTodo={addTodo} />
        <List deleteTodo={deleteTodo} markDone={markDone} todos={todos} />
      </Container>
    </div>
  );
}

export default App;
