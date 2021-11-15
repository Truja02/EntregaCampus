import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Dashboard from './dashboard';
import Login from './login';
import SignUp from './register';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        const checkLogin = localStorage.getItem('userData')
        if (checkLogin) {
            setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false)
        }
    }, [])
		return (
			<Router>
				<Switch>
                    <Route exact path="/login" render={() => <Login setIsLoggedIn={setIsLoggedIn} />} />
                    <Route exact path="/signup" render={() => <SignUp setIsLoggedIn={setIsLoggedIn} />} />
                    {isLoggedIn ? <Route path="/" render={() => <Dashboard setIsLoggedIn={setIsLoggedIn} />} /> : <Route path="/" render={() => <Login setIsLoggedIn={setIsLoggedIn} />} />} 
				</Switch>
			</Router>
		);
}

export default App;
