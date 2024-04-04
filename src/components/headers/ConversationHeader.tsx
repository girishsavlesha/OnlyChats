import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {BackArrow, MoreVertical} from '../../../assets/icons';
import {COLORS} from '../../theme/colors';
import {useAppSelector} from '../../hooks/useAppSelector';
import {DefaultProfileElement} from '..';

const ConversationHeader = (props: NativeStackHeaderProps) => {
  const {options, navigation} = props;
  const {openedConversation} = useAppSelector(state => state.chat);

  if (!openedConversation) {
    return;
  }

  return (
    <View style={styles.container}>
      <TouchableHighlight
        activeOpacity={0.9}
        underlayColor={COLORS.gray[100]}
        onPress={navigation.goBack}
        style={styles.touchable}>
        <BackArrow color={COLORS.gray[950]} />
      </TouchableHighlight>
      <Text style={styles.text}>{options.title}</Text>
      <TouchableHighlight
        activeOpacity={0.9}
        onPress={() => {}}
        underlayColor={COLORS.gray[100]}
        style={[styles.touchable]}>
        {openedConversation.imageUrl ? (
          <Image style={styles.image} source={openedConversation.imageUrl} />
        ) : (
          <DefaultProfileElement name={openedConversation.title} size={26} />
        )}
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
  image: {
    width: 26,
    height: 26,
    resizeMode: 'contain',
    borderRadius: 9999,
  },
});

export default ConversationHeader;
