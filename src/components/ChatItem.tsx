import {View, Text, StyleSheet, Image, ImageSourcePropType} from 'react-native';
import {DefaultProfileElement} from '.';
import {COLORS} from '../theme/colors';

interface ChatItem {
  title: string;
  lastMessage: string;
  imageUrl?: ImageSourcePropType;
}

const ChatItem = ({title, lastMessage, imageUrl}: ChatItem) => {
  return (
    <View style={styles.container}>
      {imageUrl ? (
        <Image source={imageUrl} style={styles.image} resizeMode="contain" />
      ) : (
        <DefaultProfileElement name={title} />
      )}
      <View style={styles.textContainer}>
        <Text style={styles.nameText} numberOfLines={1}>
          {title}
        </Text>
        <Text numberOfLines={2} style={styles.lastMsg}>
          {lastMessage}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginLeft: 15,
  },
  textContainer: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray[200],
    paddingVertical: 8,
    flex: 1,
    paddingRight: 15,
  },
  nameText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#000',
  },
  lastMsg: {
    color: COLORS.gray[400],
    fontSize: 14,
    height: 35,
  },
  image: {
    borderRadius: 999,
    aspectRatio: 1,
    width: 48,
    height: 48,
  },
});

export default ChatItem;
