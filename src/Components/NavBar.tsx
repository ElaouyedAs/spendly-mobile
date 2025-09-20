import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {COLORS} from '../Design/COLORS';

const NavBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SPENDLY</Text>

      <TouchableOpacity onPress={() => {}}>
        {/* <Icon source={'camera'} size={50} /> */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,
    backgroundColor: COLORS.PRIMARY,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    padding: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.WHITE,
  },
});

export default NavBar;
