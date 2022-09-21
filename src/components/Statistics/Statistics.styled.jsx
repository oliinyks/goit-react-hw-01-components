import styled from '@emotion/styled';

export const StatisticsContainer = styled.section`
  margin-bottom: 40px;
`;

export const Title = styled.h2`
  text-align: center;
  font-weight: 500;
`;

export const StatList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  margin: -10px;
`;

export const StatItem = styled.li`
  padding: 15px;
  border: ${props => `1px dashed ${props.theme.colors.black}`};
  border-radius: 20px;
  background-color: ${props => `${props.theme.colors.accent}`};
  margin: 10px;
`;

export const Label = styled.span`
  font-weight: 500;
`;

export const Percentage = styled.span`
  margin-left: 5px;
`;
