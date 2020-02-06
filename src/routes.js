import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import StatusCamera from './pages/StatusCamera/index';
import Chats from './pages/Chats/index';
import Status from './pages/Status/index';

const Routes = createAppContainer(createMaterialTopTabNavigator({
  StatusCamera,
  Chats,
  Status
},{
  initialRouteName: 'Chats',
  defaultNavigationOptions: {
    tabBarVisible: false,
  },
}));

export default Routes;
