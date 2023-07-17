import './App.css'
import AddItem from './assets/Components/AddItem/AddItem';
import Header from './assets/Components/Header/Header';
import ShoppingList from './assets/Components/ShoppingList/ShoppingList';

const App = () => {
  return (
      <div className="wrap">
        <Header />
        <AddItem />
        <ShoppingList /> 
      </div>
  );
};

export default App;
