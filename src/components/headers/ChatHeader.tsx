import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {BackArrow, MoreVertical} from '../../../assets/icons';
import {COLORS} from '../../theme/colors';

const ChatHeader = (props: NativeStackHeaderProps) => {
  const {route, navigation} = props;
  return (
    <View style={styles.container}>
      <TouchableHighlight
        activeOpacity={0.9}
        underlayColor={COLORS.gray[100]}
        onPress={navigation.goBack}
        style={styles.touchable}>
        <BackArrow color={COLORS.gray[950]} />
      </TouchableHighlight>
      <Text style={styles.text}>{route.name}</Text>
      <TouchableHighlight
        activeOpacity={0.9}
        onPress={() => {}}
        underlayColor={COLORS.gray[100]}
        style={[
          styles.touchable,
          {
            transform: [{rotate: '90deg'}],
          },
        ]}>
        <MoreVertical color={COLORS.gray[950]} />
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'white',
  },
  touchable: {
    borderRadius: 999,
    padding: 6,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: COLORS.gray[950],
  },
});

export default ChatHeader;
