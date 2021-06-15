import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Layout from './containers/Layout/Layout';
import Home from './pages/Home/Home'
import Categories from './pages/Categories/Categories';
import Saved from './pages/Saved/Saved'
import Collactions from './pages/Collactions/Collactions';
import News from './pages/News/News'
import OrdersHistory from './pages/OrdersHistory/OrdersHistory';
import Profile from './pages/Profile/Profile';
import About from './pages/About/About'
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/categories" component={Categories}/>
          <Route path="/saved" component={Saved}/>
          <Route path="/collections" component={Collactions}/>
          <Route path="/news" component={News}/>
          <Route path="/orders-history" component={OrdersHistory}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/about-us" component={About}/>
          <Route path="/" component={NotFound}/>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
