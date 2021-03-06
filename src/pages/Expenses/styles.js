import styled from 'styled-components/native';

export const Card = styled.View`
	margin: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 7px;
  padding: 8px;
  overflow: hidden;
`;

export const Expense = styled.Text`
	font-size: 16px;
`;

export const Row = styled.View`
	flex-direction: row;
	justify-content: space-between;
`;

export const Info = styled.Text`
	font-size: 12px;
	margin: 6px;
	width: 50%;
`;
