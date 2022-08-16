import styled from 'styled-components';

const InputBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 20px;
`;

const StyledInput = styled.input`
  padding: 10px;
  font-size: 20px;
  border-radius: 10px;
`;

const StyledButton = styled.button`
  font-weight: 900;
  font-size: 20px;
  width: 100px;
  border-radius: 10px;
  width: 100%;
  padding: 10px;
`;

export { StyledButton, StyledInput, InputBody };
