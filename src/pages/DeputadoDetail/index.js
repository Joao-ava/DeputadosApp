import React, {useState, useEffect} from 'react';

import api from '../../services/api';

import {
  Container,
  Center,
  Photo,
  Name,
  Row,
  Info,
  Title,
  Detail,
} from './styles';

export default function DeputadoDetail(props) {
  const id = props.navigation.getParam('id');
  const photo = props.navigation.getParam('photo');

  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [partido, setPartido] = useState('');
  const [uf, setUf] = useState('');
  const [escolaridade, setEscolaridade] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(`deputados/${id}`);
      const data = response.data.dados;

      setNome(data.nomeCivil);
      setDataNascimento(data.dataNascimento);
      setPartido(data.ultimoStatus.siglaPartido);
      setUf(data.ultimoStatus.siglaUf);
      setEscolaridade(data.escolaridade);
    }

    fetchData();
  }, [id]);

  return (
    <Container>
      <Center>
        <Photo source={{uri: photo}} />
        <Name>{nome}</Name>
      </Center>

      <Row>
        <Info>
          <Title>Data de Nacimento</Title>
          <Detail>{dataNascimento}</Detail>
        </Info>

        <Info>
          <Title>Partido</Title>
          <Detail>{partido}</Detail>
        </Info>
      </Row>

      <Row>
        <Info>
          <Title>Estado</Title>
          <Detail>{uf}</Detail>
        </Info>

        <Info>
          <Title>Escolaridade</Title>
          <Detail>{escolaridade}</Detail>
        </Info>
      </Row>
    </Container>
  );
}
