import {View, Dimensions, StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';
import {LineChart} from 'react-native-chart-kit';
import {COLORS} from '../Design/COLORS';

const screenWidth = Dimensions.get('window').width;

const LineChartCard = (props: {lineLabels: any; lineData: any}) => {
  return (
    <View style={styles.container}>
      <Card style={styles.card} elevation={1}>
        <Card.Content>
          {props.lineData.length > 0 && (
            <LineChart
              data={{
                labels: props.lineLabels,
                datasets: [
                  {
                    data: props.lineData,
                  },
                ],
              }}
              width={screenWidth - 50}
              height={200}
              yAxisSuffix=""
              chartConfig={{
                backgroundColor: '#ffffff',
                backgroundGradientFrom: '#ffffff',
                backgroundGradientTo: '#ffffff',
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(155, 102, 114, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0,0,0,${opacity})`,
              }}
              bezier
              //   style={{marginVertical: 8}}
            />
          )}
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1, // each card takes equal space
    backgroundColor: COLORS.WHITE,
    flexDirection: 'column',
    borderRadius: 12,
  },
  subTitle: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },
  titleCard: {
    fontSize: 16,
    color: 'black',
    marginBottom: 15,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between', // pushes them apart evenly
    paddingHorizontal: 0,
    marginTop: 10,
  },
  title: {
    padding: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.WHITE,
  },
});

export default LineChartCard;
