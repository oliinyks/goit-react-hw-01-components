import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  width: 200px;
  margin: 40px auto;
  padding: 10px;
  text-align: center;
  border: ${props => `1px solid ${props.theme.colors.black}`};
  border-radius: 20px;
`;

export const Description = styled.div`
  margin-bottom: 15px;
`;

export const AvatarImg = styled.img`
  width: 50px;
  height: 50px;
`;

export const Name = styled.p`
  font-weight: 500;
  margin-bottom: 5px;
`;

export const Tag = styled.p`
  margin-top: 0;
  margin-bottom: 10px;
`;

export const Location = styled.p`
  margin-bottom: 10px;
`;

export const Stats = styled.ul`
  list-style: none;
  padding: 5px;
  text-align: left;
  background-color: ${props => `${props.theme.colors.accent}`};
`;

export const StatsItem = styled.li`
  margin: 10px;
`;

export const Label = styled.span`
  font-weight: 500;
`;

export const Quantity = styled.span`
  margin-left: 10px;
`;
