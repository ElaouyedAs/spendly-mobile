import {View, Text, FlatList, Dimensions, ScrollView} from 'react-native';
import {PieChart, LineChart} from 'react-native-chart-kit';
import {COLORS} from '../Design/COLORS';

import {
  getMonthlyTransactions,
  getMonthlySummary,
  getDailyExpenseSeries,
} from '../Services/utils';
import Cards from './Cards';
import LineChartCard from './LineChartCard';
import PieChartCard from './PieChartCard';

const screenWidth = Dimensions.get('window').width;

const MonthlyDashboard = ({transactions, month}: any) => {
  const monthlyTransactions = getMonthlyTransactions(transactions, month);
  const summary = getMonthlySummary(monthlyTransactions);
  const dailySeries = getDailyExpenseSeries(monthlyTransactions);

  // Préparer les données pour PieChart
  const pieData = Object.entries(summary.byCategoryPercent).map(
    ([cat, val], i) => ({
      name: cat,
      amount: val,
      color: [
        COLORS.SECONDARY_1,
        COLORS.PRIMARY,
        COLORS.SECONDARY_2,
        COLORS.SECONDARY,
        COLORS.SECONDARY_3,
        '#e6e1e2',
      ][i % 6],
      legendFontColor: 'black',
      legendFontSize: 16,
      legendFontWeight: 'bold',
    }),
  );
  console.log(
    'Object.entries(summary.byCategory)',
    Object.entries(summary.byCategoryPercent),
  );

  // Préparer données pour LineChart
  const lineLabels = dailySeries.map(d => d.day.toString());
  const lineData = dailySeries.map(d => d.total);

  return (
    <ScrollView style={{flex: 1, padding: 10, marginTop: -60}}>
      <View>
        <Cards
          totalRevenu={summary.income}
          expense={summary.expense}
          balance={summary.income - summary.expense}
        />
        {/* <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 10}}>
        Détails du mois {month}
      </Text> */}
        {/* <Text>Total revenus: {summary.income} MAD</Text>
      <Text>Total dépenses: {summary.expense} MAD</Text> */}

        <PieChartCard pieData={pieData} />
        <LineChartCard lineData={lineData} lineLabels={lineLabels} />

        {/* <Text style={{marginTop: 20, fontWeight: 'bold'}}>
        Transactions du mois :
      </Text> */}
        {/* <FlatList
        data={monthlyTransactions}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={{marginBottom: 8}}>
            <Text>
              {item.date} - {item.category} - {item.amount} MAD
            </Text>
          </View>
        )}
      /> */}
      </View>
    </ScrollView>
  );
};

export default MonthlyDashboard;
