import styled from 'styled-components';

export const Statistics = styled.section`
  width: 530px;
  margin: 20px auto;
  border-radius: 5px;
  background-color: rgba(108, 107, 114, 0.493);
  text-align: center;
  padding: 5px 0px 0px 0px;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  font-size: 30px;
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
  width: 100%;
`;

export const Label = styled.span`
  margin-bottom: 10px;
`;

export const Percen = styled.span`
  font-size: 18px;
`;
