import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from '_screens/login';

const AuthNavigatorConfig = {
  initialRouteName: 'Login',
  navigationOptions: ({ navigation }) => ({
      headerTitle: `React native structure`,
    })
  // header: null,
  // headerMode: 'none',
};

const RouteConfigs = {
  Login:LoginScreen,
};

const AuthNavigator = createStackNavigator(RouteConfigs, AuthNavigatorConfig);

export default AuthNavigator;