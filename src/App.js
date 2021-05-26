import RouterConfig from './RouterConfig';

// CSS & JS
import './App.scss';
import moment from "moment";
import 'moment/locale/it'
moment.locale('it');

function App() {
  return (
    <div className="App">
        <RouterConfig/>
    </div>
  );
}

export default App;