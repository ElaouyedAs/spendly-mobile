import {View} from 'react-native';
import MonthlyDashboard from '../Components/MonthlyDashboard';
import NavBar from '../Components/NavBar';
import {mockTransactions} from '../Store/mockData';

const DashboardScreen = () => {
  return (
    <View style={{flex: 1}}>
      <NavBar />
      <MonthlyDashboard transactions={mockTransactions} month="2025-09" />
    </View>
  );
};

export default DashboardScreen;
