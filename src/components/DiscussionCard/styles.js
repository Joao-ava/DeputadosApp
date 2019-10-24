import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 6px;
  padding: 7px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 7px;
  overflow: hidden;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const More = styled.Text`
  font-size: 18px;
  padding-right: 7px;
`;

export const Transcription = styled.Text`
  font-size: 14px;
  padding: 6px;
  padding-top: 15px;
`;
