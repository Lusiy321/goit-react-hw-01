import styled from 'styled-components';

export const Statistics = styled.section`
  width: 390px;
  margin: 20px auto;
  border-radius: 10px;
  background-color: rgba(100, 100, 100, 0.1);
  text-align: center;
  padding: 5px 0px 0px 0px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25), 0 4px 4px rgba(0, 0, 0, 0.22);
`;

export const Title = styled.h2`
  text-transform: uppercase;
  font-size: 30px;
  margin: 20px;
`;

export const StatList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0px;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
  border: 1px solid #fff;
  border-radius: 10px;
  background-color: rgba(100, 100, 100, 0.2);
  width: 100%;
`;

export const Label = styled.span`
  margin-bottom: 10px;
`;

export const Percen = styled.span`
  font-size: 18px;
`;
