import {useEffect, useRef} from 'react';
import {View, Image, Animated, StyleSheet, StatusBar} from 'react-native';
import logo from '../Assets/logo1.png';
import {COLORS} from '../Design/COLORS';
const SplashScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.5)).current;
  useEffect(() => {
    // Animation "slow motion"
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 4,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, scaleAnim]);
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={COLORS.SECONDARY_1}
      />
      <Image source={logo} />
      <Animated.Text style={[styles.text, {opacity: fadeAnim}]}>
        SPENDLY
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // background color for splash
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: COLORS.PRIMARY,
    resizeMode: 'center',
    marginTop: -10,
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    color: COLORS.PRIMARY,
    letterSpacing: 4,
    marginTop: -10,
  },
});

export default SplashScreen;
