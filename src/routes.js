import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import Chats from './pages/Chats/index';
import Status from './pages/Status/index';

const Routes = createAppContainer(createMaterialTopTabNavigator({
  Chats,
  Status
},{
  tabBarOptions: {

  },
  defaultNavigationOptions: {
    tabBarVisible: false,
  },
}));

export default Routes;