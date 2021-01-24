import React, {useState} from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

const gridDimension = Dimensions.get('screen').width - 20;

const Home = (props) => {
  const [swipeDirection, setSwipeDirection] = useState('');

  const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;

  const figureHorizontalDirection = (delta) =>
    delta > 0 ? SWIPE_RIGHT : SWIPE_LEFT;
  const figureVerticalDirection = (delta) =>
    delta > 0 ? SWIPE_DOWN : SWIPE_UP;

  const detectSwipeDirection = ({dx, dy}) => {
    return Math.abs(dx) > Math.abs(dy)
      ? figureHorizontalDirection(dx)
      : figureVerticalDirection(dy);
  };

  const onSwipe = (directionNull, gestureState) => {
    const {dx, dy} = gestureState;
    let direction = detectSwipeDirection({dx, dy});

    switch (true) {
      case direction == SWIPE_UP:
        setSwipeDirection('up');
        break;
      case direction == SWIPE_DOWN:
        setSwipeDirection('down');
        break;
      case direction == SWIPE_RIGHT:
        setSwipeDirection('right');
        break;
      case direction == SWIPE_LEFT:
        setSwipeDirection('left');
        break;
      default:
        break;
    }
  };

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  return (
    <View style={styles.container}>
      <Text>Swipe Gesture</Text>
      <GestureRecognizer
        style={styles.gridContainer}
        onSwipe={(direction, state) => onSwipe(direction, state)}
        config={config}>
        <Text>{swipeDirection}</Text>
      </GestureRecognizer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridContainer: {
    width: gridDimension,
    height: gridDimension,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
