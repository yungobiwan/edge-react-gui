import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'
import configureStore from './lib/configureStore'
import { Scene, Router } from 'react-native-router-flux'
import { AppRegistry } from 'react-native'

import Home from './modules/Home.ui'
import Username from './modules/Username/Username.ui'
import PinNumber from './modules/PinNumber/PinNumber.ui'
import Password from './modules/Password/Password.ui'
import ReviewDetails from './modules/ReviewDetails/ReviewDetails.ui'

const RouterWithRedux = connect()(Router);
const store = configureStore()

export default class App extends Component {
	
	render() {
		return (
			<Provider store={store}>
        <RouterWithRedux>
          <Scene key="root">
            <Scene key="signup" hideNavBar={true}>
              <Scene key="username" component={Username} title={"Enter Username"} initial={true}/>
              <Scene key="pin" component={PinNumber} title={"Enter Pin"} />
              <Scene key="password" component={Password} title={"Enter Password"} />
              <Scene key="review" component={ReviewDetails} title={"Details"} />
            </Scene>
            <Scene key="home" component={Home} initial={true} hideNavBar={true}/>
          </Scene>
        </RouterWithRedux>
			</Provider>
		)
	}

}

AppRegistry.registerComponent('airbitz_ui', () => App)