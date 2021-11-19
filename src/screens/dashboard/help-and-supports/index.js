import React from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {Back} from '../../../components/back';
import {ActionButton} from '../../../components/Buttons/ActionButton';
import {COLORS, FONT_FAMILY, FONT_SIZE, SCREEN} from '../../../utils/constant';

const json = [
  {
    title: 'Help',
    content:
      'Donec quis iaculis ex. Suspendisse varius euismod pulvinar. Nulla facilisi. Nam eget turpis a massa ornare facilisis at sed tellus. Praesent vitae tempus sem. Praesent sit amet nunc euismod, placerat neque eget, blandit nunc. Vestibulum et finibus neque, vel rutrum metus. Phasellus porta urna a',
  },
  {
    title: 'Dorem ipsum dolar amit',
    content:
      'Etiam gravida turpis in porttitor pellentesque. Nam varius finibus malesuada. Aenean porttitor elit quis quam ultrices, eu ullamcorper nibh lobortis. Aliquam mattis libero sit amet tellus cursus pellentesque. Fusce elementum finibu.',
  },
];

export const HelpAndSupports = () => {
  return (
    <View style={styles.container}>
      <Back title="Help & Support" />
      <ScrollView
        contentContainerStyle={styles.scrollY}
        showsVerticalScrollIndicator={false}>
        {json.map((item, idx) => (
          <View style={styles.scroll}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.content}>{item.content}</Text>
          </View>
        ))}

        <View style={styles.box1}>
          <Text style={styles.title2}>Contact us</Text>
          <Text
            style={[
              styles.content,
              {fontSize: FONT_SIZE.MEDIUM, marginVertical: 2},
            ]}>
            Don't hesitate to tell your prublems
          </Text>
        </View>

        <View>
          <TextInput style={styles.input} value="Joohn Doe" />
          <TextInput style={styles.input} value="joohndoe001@gmail.com" />
          <TextInput style={styles.input} value="800 2546 124" />

          <TextInput
            multiline={true}
            numberOfLines={5}
            style={styles.input}
            placeholder="Write something....."
          />
        </View>
        <ActionButton title="Submit" color="white" bg="#00A3FE" width="100%" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND_GRAY,
    marginHorizontal: 12,
  },
  scrollY: {paddingBottom: SCREEN.HEIGHT * 0.1, marginTop: 12},
  title: {
    fontSize: FONT_SIZE.LARGE,
    fontFamily: FONT_FAMILY.MEDIUM,
    color: '#121212',
  },
  title2: {
    fontSize: FONT_SIZE.BIG,
    fontFamily: FONT_FAMILY.BOLD,
    color: '#121212',
  },
  content: {
    fontSize: FONT_SIZE.MEDIUM,
    fontFamily: FONT_FAMILY.LIGHT,
    color: '#5C6368',
    marginVertical: 12,
  },
  box1: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 12,
  },
  input: {
    // backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: COLORS.GRAY,
    padding: 12,
    borderRadius: 20,
    fontFamily: FONT_FAMILY.MEDIUM,
    fontSize: FONT_SIZE.LARGE,
    color: '#003169',
    marginVertical: 8,
  },
});
