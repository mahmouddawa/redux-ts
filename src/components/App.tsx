import {Provider} from 'react-redux';
import {store} from '../state';
import RepositoriesList from './RepositoriesList';

export const App = ()=>{
  return (
    <Provider store={store}>
      <div>
        <h1>search for a npm package </h1>
        <RepositoriesList />
      </div>
       
    </Provider>
  )
}

export default App;