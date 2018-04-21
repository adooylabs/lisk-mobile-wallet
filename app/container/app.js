import { 
  StackNavigator, 
  SwitchNavigator, 
  DrawerNavigator
} from 'react-navigation';

import Dashboard from './dashboard';
import Delegates from '../component/pages/delegates';
import Wallet from '../component/pages/wallet';
import Explorer from '../component/pages/explorer';
import Sidechains from '../component/pages/sidechains';
import Login from '../component/accounts/login';
import Generate from '../component/accounts/generate';
import AuthLoading from '../component/accounts/auth_loading';

const AppStack = DrawerNavigator({ 
  Dashboard, 
  Wallet,
  Explorer,
  Delegates,
});

const AuthStack = StackNavigator({ 
  Login,
  Generate 
  }, {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
);

export default SwitchNavigator(
  {
    AuthLoading: AuthLoading,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);
