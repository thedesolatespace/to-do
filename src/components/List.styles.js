import styled from 'styled-components';

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const StyledTask = styled.li`
  font-weight: 700;
  word-break: break-all;
  border-radius: 3px;
  padding: 10px;
  background-color: #87c6df;
`;

export { StyledList, StyledTask };
