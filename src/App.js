import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Layout from './containers/Layout/Layout';
import Home from './pages/Home/Home'
import Cotegories from './pages/Cotegories/Cotegories';
import Saved from './pages/Saved/Saved'
import Collections from './pages/Collections/Collections';
import News from './pages/News/News'
import OrdersHistory from './pages/OrdersHistory/OrdersHistory';
import Profile from './pages/Profile/Profile';
import About from './pages/About/About'
import NotFound from './pages/NotFound/NotFound';
import ProductPage from './pages/ProductPage/ProductPage';

function App({match}) {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/cotegories" component={Cotegories}/>
          <Route path="/saved" component={Saved}/>
          <Route path="/collections" component={Collections}/>
          <Route path="/news" component={News}/>
          <Route path="/orders-history" component={OrdersHistory}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/about-us" component={About}/>
          <Route path="/product/:id" component={ProductPage}/>
          <Route path="/" component={NotFound}/>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
