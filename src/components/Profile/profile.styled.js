import styled from 'styled-components';

export const Profiles = styled.div`
  margin: 20px auto;
  padding: 15px;
  background-color: rgba(108, 107, 114, 0.493);
  width: 500px;
  border-radius: 5px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 300px;
  border-radius: 50%;
  background-color: #f9f9f9;
`;
export const Name = styled.p`
  font-size: 30px;
  padding: 0;
  margin: 15px;
`;
export const Tag = styled.p`
  font-size: 22px;
  padding: 0;
  margin: 10px;
`;

export const Location = styled.p`
  font-size: 25px;
  padding: 0;
  margin: 10px;
`;

export const Stats = styled.ul`
  display: flex;
  border: 1px solid #fff;
  border-radius: 5px;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;
  padding: 0;
`;

export const StatsList = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 33.33%;
  height: 75px;
  line-height: 1.4;
  border-right: 1px solid #fff;
`;
export const Label = styled.span`
  display: block;
  font-size: 20px;
  margin: 3px;
`;

export const Quantity = styled.span`
  display: block;
  margin: 5px;
  font-size: 18px;
  font-weight: 700;
`;
