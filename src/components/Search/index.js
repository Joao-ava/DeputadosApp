import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import api from '../../services/api';
import store from '../../store';
import * as searchActions from '../../actions/search';
import * as deputadosActions from '../../actions/deputados';
import {Container, SearchBar, Title, IconSearch} from './styles';

function Search(props) {
  const [isSearch, setIsSearch] = useState(false);

  async function fetchData() {
    const response = await api.get(
      `deputados?pagina=1&itens=15&ordem=ASC&ordenarPor=nome&nome=${props.search}`,
    );

    props.setDeputados(response.data.dados);
  }

  return (
    <Container>
      { isSearch ?
        (<SearchBar 
          placeholder="Nome do deputado"
          value={props.search}
          onChangeText={value => props.setSearch(value)}
          onSubmitEditing={fetchData}
        />) :
        (<Title>Deputados</Title> )
      }

      <TouchableOpacity onPress={() => setIsSearch(!isSearch)} >
        <IconSearch 
          name={isSearch ? 'close' : 'search'} 
          size={24} 
          color='#fff' 
        />
      </TouchableOpacity>
    </Container>
  );
}

const mapStateToProps = state => ({
  search: state.search.name,
})

const mapDispatchToProps = dispatch => bindActionCreators(
  {...deputadosActions, ...searchActions}, 
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
