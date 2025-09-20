import {View, Dimensions, StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';
import {PieChart} from 'react-native-chart-kit';

import {COLORS} from '../Design/COLORS';
const screenWidth = Dimensions.get('window').width;

const PieChartCard = (props: {pieData: any}) => {
  return (
    <View style={styles.container}>
      <Card style={styles.card} elevation={1}>
        <Card.Content>
          {props.pieData.length > 0 && (
            <PieChart
              data={props.pieData.map((p: any) => ({
                name: p.name,
                population: p.amount,
                color: p.color,
                legendFontColor: p.legendFontColor,
                legendFontSize: p.legendFontSize,
              }))}
              width={screenWidth - 32}
              height={220}
              chartConfig={{
                color: (opacity = 1) => `rgba(0,0,0,${opacity})`,
              }}
              accessor="population"
              backgroundColor="transparent"
              paddingLeft="15"
              absolute
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
    marginHorizontal: 2, //
    backgroundColor: COLORS.WHITE,
    flexDirection: 'column',
    alignSelf: 'center',
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
    paddingHorizontal: 1,
    marginTop: 10,
  },
  title: {
    padding: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.WHITE,
  },
});

export default PieChartCard;
