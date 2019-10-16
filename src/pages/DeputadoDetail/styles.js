import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 14px;
`;

export const Center = styled.View`
  align-items: center;
`;

export const Frame = styled.View`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 7px;
  overflow: hidden;
`;

export const Photo = styled.Image`
  height: 180px;
  width: 150px;
`;

export const Name = styled.Text`
  margin-top: 12px;
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: bold;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Info = styled.View`
  text-align: left;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.2);
  width: 50%;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const Detail = styled.Text`
  font-size: 16px;
`;
