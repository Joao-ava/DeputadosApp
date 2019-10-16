import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import api from '../../services/api';
import store from '../../store';
import * as deputadosActions from '../../actions/deputados';

import DeputadoCard from '../../components/DeputadoCard';

function Home(props) {
  const [deputados, setDeputados] = useState([]);
  const [page, setPage] = useState(1);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function fetchData() {
    const response = await api.get(
      `deputados?pagina=${page}&itens=15&ordem=ASC&ordenarPor=nome`,
    );

    props.addDeputados(response.data.dados);
    setPage(page + 1);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <FlatList
      data={props.deputados}
      keyExtractor={item => String(item.id)}
      renderItem={({item}) => (
        <DeputadoCard
          deputado={item}
          onPress={() =>
            props.navigation.navigate('DeputadoDetail', {
              id: item.id,
              photo: item.urlFoto,
            })
          }
        />
      )}
      onEndReached={fetchData}
      onEndReachedThreshold={0.1}
    />
  );
}

const mapStateToProps = state => ({
  deputados: state.deputados,
})

const mapDispatchToProps = dispatch => bindActionCreators(deputadosActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
