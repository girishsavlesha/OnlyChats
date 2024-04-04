import {View, StyleSheet, Text} from 'react-native';
import {COLORS} from '../theme/colors';

type ChatBubbleProps = {
  align?: 'left' | 'right';
  timeStamp: string;
  sender: string | null;
};

const ChatBubble = ({
  align = 'left',
  timeStamp,
  sender = null,
  children,
}: React.PropsWithChildren<ChatBubbleProps>) => {
  return (
    <View
      style={[
        styles.container,
        {
          alignSelf: align === 'left' ? 'flex-start' : 'flex-end',
          backgroundColor:
            align === 'left' ? COLORS.gray[200] : COLORS.blue[600],
        },
      ]}>
      {sender && align === 'left' ? <Text>{sender}</Text> : ''}
      {children}
      <Text
        style={[
          styles.timestamp,
          align === 'right' && {
            color: '#fff',
          },
        ]}>
        {timeStamp}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: COLORS.gray[200],
    padding: 8,
  },
  timestamp: {
    fontSize: 12,
    alignSelf: 'flex-end',
  },
});

export default ChatBubble;
