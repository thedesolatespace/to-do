import { useState } from 'react';
import { Hint } from './Hint';
import { InputBody, StyledButton, StyledInput } from './Input.styles';

export const Input = ({ addTodo }) => {
  const [value, setValue] = useState('');

  function submitTodo(event) {
    event.preventDefault();

    if (value.trim()) {
      addTodo(value);
      setValue('');
    }
  }

  return (
    <form onSubmit={submitTodo}>
      <InputBody>
        <Hint />

        <StyledInput
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Enter your TODO"
        ></StyledInput>
        <StyledButton type="submit">Add</StyledButton>
      </InputBody>
    </form>
  );
};
