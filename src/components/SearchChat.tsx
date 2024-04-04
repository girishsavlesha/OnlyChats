import {StyleSheet, TextInput, View} from 'react-native';
import {Search} from '../../assets/icons';
import {COLORS} from '../theme/colors';

const SearchChat = () => {
  return (
    <View style={styles.container}>
      <Search color={COLORS.gray[950]} />
      <TextInput placeholder="Search Contacts..." />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    gap: 10,
    elevation: 10,
    marginTop: 5,
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: COLORS.gray[400],
  },
});

export default SearchChat;
