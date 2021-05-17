import './App.scss';
import HomeRouter from './HomeRouter';

// import 'bootstrap/dist/css/bootstrap.min.css';

import moment from "moment";
import 'moment/locale/it'
moment.locale('it');

function App() {
  return (
    <div className="App">
        <HomeRouter/>
    </div>
  );
}

export default App;
