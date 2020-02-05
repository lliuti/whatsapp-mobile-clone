import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Chats from './pages/Chats/index';

const Routes = createAppContainer(createSwitchNavigator({
  Chats,
}));

export default Routes;