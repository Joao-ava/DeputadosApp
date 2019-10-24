import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';

import {Container, Row, Title, More, Transcription} from './styles';

export default function DiscussionCard(props) {
  const {item} = props;
  const [isOpen, setIsOpen] = useState(false);

  function show() {
    if (isOpen) {
      return (
        <Transcription>
          {item.transcricao}
        </Transcription>
      );
    }
  }

  return (
    <Container>
      <Row>
        <Title>{item.faseEvento.titulo}</Title>

        <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
          <More>+</More>
        </TouchableOpacity>
      </Row>

      { show() }
    </Container>
  );
}
