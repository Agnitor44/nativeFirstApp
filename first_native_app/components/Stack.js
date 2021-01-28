
import { NavigationContainer } from '@react-navigation/native';
import Home from './components/Home'
import ListAll from './components/ListAll'

const HomeStack = NavigationContainer({
    Home: {
      screen: Home
    }, 
    List: {
      screen: ListAll
    }
  })
export default HomeStack