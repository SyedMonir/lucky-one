import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Shop from './components/Shops/Shop';
import Bonus from './components/Bonus/Bonus';

function App() {
  return (
    <div>
      <Header />
      <Shop />
      <Bonus />
    </div>
  );
}

export default App;
