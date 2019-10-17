import React from 'react';

import {Container, Photo, About, Name, Row, Info} from './styles';

export default function DeputadoCard(props) {
  const {deputado} = props;

  return (
    <Container>
      <Photo source={{uri: deputado.urlFoto}} />

      <About>
        <Name>{deputado.nome}</Name>

        <Row>
          <Info>{deputado.siglaUf}</Info>
          <Info>{deputado.siglaPartido}</Info>
        </Row>
      </About>
    </Container>
  );
}
