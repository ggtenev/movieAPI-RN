import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './Home'
import MovieDetails from './MovieDetails'

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  Details: {
    screen: MovieDetails,
  },
});

export default createAppContainer(AppNavigator);