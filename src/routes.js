import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './pages/Home';
import DeputadoDetail from './pages/DeputadoDetail';

// titulo nas telas
Home.navigationOptions = {
  title: 'Deputados',
};

DeputadoDetail.navigationOptions = {
  title: 'Detalhes',
};

const Routes = createAppContainer(createStackNavigator({Home, DeputadoDetail}));

export default Routes;
