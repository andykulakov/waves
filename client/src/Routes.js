import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/Layout';
import Auth from './hoc/Auth';
import Home from './components/Home';
import RegisterLogin from './components/register_login';
import Register from './components/register_login/Register';
import Shop from './components/Shop';

import UserDashboard from './components/user';
import AddProduct from './components/user/admin/add_product';

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Auth(Home, null)} />
        <Route path="/shop" exact component={Auth(Shop, null)} />

        <Route path="/register-login" exact component={Auth(RegisterLogin, false)} />
        <Route path="/register" exact component={Auth(Register, false)} />

        <Route path="/user/dashboard" exect component={Auth(UserDashboard, true)} />
        <Route path="/admin/add-product" exect component={Auth(AddProduct, true)} />
      </Switch>
    </Layout>
  )
}

export default Routes;
