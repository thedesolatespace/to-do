import { StyledList, StyledTask } from './List.styles';

export const List = (props) => {
  const done = props.todos.map((todo) => {
    if (todo.done) {
      return 'done';
    }
  });
  return (
    <StyledList>
      {props.todos.map((todo) => {
        return (
          <StyledTask
            className={done[todo.id - 1]}
            onClick={() => {
              props.markDone(todo.id);
            }}
            onContextMenu={() => {
              props.deleteTodo(todo.id);
            }}
            key={todo.id}
          >
            {todo.title}
          </StyledTask>
        );
      })}
    </StyledList>
  );
};
