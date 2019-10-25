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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function fetchData() {
    const response = await api.get(
      `deputados?pagina=${props.page}&itens=15&ordem=ASC&ordenarPor=nome&nome=${props.search}`,
    );

    props.addDeputados(response.data.dados);
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
  deputados: state.deputados.data,
  page: state.deputados.page,
  search: state.search.name,
})

const mapDispatchToProps = dispatch => bindActionCreators(
  {...deputadosActions, ...selectedActions}, 
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
