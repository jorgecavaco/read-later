import styled from 'styled-components';

export const StyleRoot = styled.li`
  display: flex;
  margin-bottom: 6px;
  padding: 2px 10px;
  align-items: center;
  height: 18px;

  label {
    margin-right: 12px;
    flex-basis: 30%;
  }

  input {
    height: 100%;
    border: none;
    border-bottom: 1px solid #ccc;
    background-color: #eee;
    flex-grow: 1;
    padding: 4px 10px;

    &:focus {
      outline: none;
      border-bottom-color: rgba(75, 52, 206, 0.5);
    }
  }
`;
