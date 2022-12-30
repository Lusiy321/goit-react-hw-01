import styled from 'styled-components';

export const Friend = styled.ul`
  margin: 0px auto;
  width: 390px;
  padding: 0px;
`;

export const LiItem = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  background-color: rgba(100, 100, 100, 0.1);
  border-radius: 10px;
  margin-bottom: 8px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25), 0 4px 4px rgba(0, 0, 0, 0.22);
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => {
    return isOnline ? 'green' : 'red';
  }};
  margin-left: 40px;
`;

export const Avatar = styled.img`
  margin: 10px 20px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.15);
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 28px;
  line-height: 1.25;
  margin-left: 40px;
`;
