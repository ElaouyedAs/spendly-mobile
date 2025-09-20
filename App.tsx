import React, {useState, useEffect} from 'react';
import {Provider} from 'react-redux';
import {store} from './src/Store';
import DashboardScreen from './src/Screens/DashboardScreen';
import SplashScreen from './src/Components/SplashScreen';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5 seconds splash
    return () => clearTimeout(timer);
  }, []);

  return (
    <Provider store={store}>
      {isLoading ? <SplashScreen /> : <DashboardScreen />}
    </Provider>
  );
};
export default App;
