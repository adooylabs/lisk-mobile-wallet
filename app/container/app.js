import { 
  StackNavigator, 
  SwitchNavigator, 
  DrawerNavigator
} from 'react-navigation';

import { 
  Wallet, 
  Explorer,
  Delegates,
  Sidechains,
} from '../component/pages';
import {
  Login,
  Generate,
  AccountList,
  AuthLoading 
} from '../component/accounts';
import Dashboard from './dashboard';

const AppStack = DrawerNavigator({ 
  Dashboard, 
  Wallet,
  Explorer,
  Delegates,
});

const AuthStack = StackNavigator({ 
  AccountList,  
  Login,
  Generate 
},{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
});

export default SwitchNavigator({
  AuthLoading: AuthLoading,
  App: AppStack,
  Auth: AuthStack,
},{
  initialRouteName: 'AuthLoading',
});
