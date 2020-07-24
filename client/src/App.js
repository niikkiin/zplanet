import React from 'react';

// styles
import { GlobalStyles } from 'utilities/styles/global.styles';
import 'antd/dist/antd.css';
import 'App.css';

// router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from 'routes';

// components
import { HeaderMain } from 'components/header/header.component';
import { FooterMain } from 'components/footer/footer.component';

// store
import { Provider } from 'react-redux';
import store from 'store/store';

const App = () => (
	<Provider store={store}>
		<Router basename={process.env.REACT_APP_BASENAME || ''}>
			<div className='main-container'>
				<GlobalStyles />
				<HeaderMain />
				<Switch>
					{routes.map((route, index) => {
						return (
							<Route
								key={index}
								path={route.path}
								exact={route.exact}
								component={(props) => {
									return (
										<route.layout {...props}>
											<route.component {...props} />
										</route.layout>
									);
								}}
							/>
						);
					})}
				</Switch>
				<FooterMain />
			</div>
		</Router>
	</Provider>
);

export default App;
