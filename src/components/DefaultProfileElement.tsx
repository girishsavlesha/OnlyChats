import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../theme/colors';
import {getInitial} from '../utils/common';

const DefaultProfileElement = ({
  name,
  size = 48,
}: {
  name: string;
  size?: number;
}) => {
  const initials = getInitial(name);
  return (
    <View
      style={[
        styles.profileImgContainer,
        {
          width: size,
          height: size,
        },
      ]}>
      <Text style={[styles.text, {fontSize: Math.floor(size * 0.42)}]}>
        {initials}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  profileImgContainer: {
    backgroundColor: COLORS.gray[400],
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Inter-Regular',
    color: 'white',
  },
});

export default DefaultProfileElement;
