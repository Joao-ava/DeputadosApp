import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  margin: 6px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 7px;
  overflow: hidden;
`;

export const Photo = styled.Image`
  height: 75px;
  width: 50px;
`;

export const About = styled.View`
  margin: 8px;
  margin-left: 34px;
  width: 50%;
`;

export const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Info = styled.Text`
  font-size: 14px;
`;
