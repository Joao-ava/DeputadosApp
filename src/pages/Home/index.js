import React, {useState, useEffect} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import api from '../../services/api';
import store from '../../store';
import * as deputadosActions from '../../actions/deputados';
import * as selectedActions from '../../actions/selected';

import DeputadoCard from '../../components/DeputadoCard';

function Home(props) {
  const [page, setPage] = useState(1);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function fetchData() {
    const response = await api.get(
      `deputados?pagina=${page}&itens=15&ordem=ASC&ordenarPor=nome`,
    );

    props.addDeputados(response.data.dados);
    setPage(page + 1);
  }

  function renderItem({item}) {
    return (
      <TouchableOpacity
        onPress={() => selectItem(item)}
      >
        <DeputadoCard
          deputado={item}
        />
      </TouchableOpacity>
    )
  }

  function selectItem(item) {
    props.setSelected(item.id);

    props.navigation.navigate('DeputadoDetail', {
      id: item.id,
      photo: item.urlFoto,
    })
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <FlatList
      data={props.deputados}
      keyExtractor={item => String(item.id)}
      renderItem={renderItem}
      onEndReached={fetchData}
      onEndReachedThreshold={0.1}
    />
  );
}

const mapStateToProps = state => ({
  deputados: state.deputados,
})

const mapDispatchToProps = dispatch => bindActionCreators(
  {...deputadosActions, ...selectedActions}, 
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
