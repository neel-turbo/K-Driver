import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import {Back} from '../../../components/back';
import {COLORS, FONT_FAMILY, FONT_SIZE, SCREEN} from '../../../utils/constant';
import {SearchBar} from '../../../components/Input/Searchbar';
import FontIocn from 'react-native-vector-icons/Fontisto';
import {CommonCard} from '../../../components/card';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

export const CancelRide = () => {
  const Item = ({title}) => <CommonCard label="Cancelled"/>;

  const renderItem = ({item}) => <Item title={item.title} />;

  return (
    <View style={styles.container}>
      <Back title="Cancellation Ride" />
      <SearchBar />
      <View>
        <View style={styles.row}>
          <FontIocn name={'checkbox-passive'} size={18} color="#C9CCCF" />
          <Text style={styles.text}>All Cancellation Ride</Text>
        </View>
        <View style={styles.scrollBox}>
          <View style={{flex: 1}}>
            <FlatList
              contentContainerStyle={{
                paddingBottom: SCREEN.HEIGHT / 3,
              }}
              showsVerticalScrollIndicator={false}
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND_GRAY,
    marginHorizontal: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  text: {
    fontSize: FONT_SIZE.MEDIUM,
    fontFamily: FONT_FAMILY.MEDIUM,
    color: COLORS.ICON_COLOR_GRAY,
    marginLeft: 12,
  },
  scroll: {
    height: SCREEN.HEIGHT,
    width: '100%',
    //     backgroundColor:'red'
  },

  scrollBox: {
    height: '100%',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 50,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
