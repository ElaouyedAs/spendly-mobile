import {View, Text, Dimensions, StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';

import {COLORS} from '../Design/COLORS';

const Cards = (props: {
  totalRevenu: number;
  expense: number;
  balance: number;
}) => {
  return (
    <View style={styles.container}>
      <Card style={styles.card} elevation={1}>
        <Card.Content>
          <Text style={styles.titleCard}>{'Revenu total'}</Text>
          <Text style={styles.subTitle}>{props.totalRevenu}</Text>
        </Card.Content>
      </Card>
      <Card style={styles.card} elevation={1}>
        <Card.Content>
          <Text style={styles.titleCard}>{'Dépenses'}</Text>
          <Text style={styles.subTitle}>{props.expense}</Text>
        </Card.Content>
      </Card>
      <Card style={styles.card} elevation={1}>
        <Card.Content>
          <Text style={styles.titleCard}>{'Solde'}</Text>
          <Text style={styles.subTitle}>{props.balance}</Text>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1, // each card takes equal space
    marginHorizontal: 2, //
    height: 100,
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
    fontSize: 15,
    color: 'black',
    marginBottom: 10,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between', // pushes them apart evenly
    paddingHorizontal: 1,
  },
  title: {
    padding: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.WHITE,
  },
});

export default Cards;
