import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Back} from '../../../components/back';
import {COLORS, FONT_FAMILY, FONT_SIZE, SCREEN} from '../../../utils/constant';

const json = [
  {
    title: 'Lorem ipsum dolar sit amit',
    content:
      'Donec quis iaculis ex. Suspendisse varius euismod pulvinar. Nulla facilisi. Nam eget turpis a massa ornare facilisis at sed tellus. Praesent vitae tempus sem. Praesent sit amet nunc euismod, placerat neque eget, blandit nunc. Vestibulum et finibus neque, vel rutrum metus. Phasellus porta urna a',
  },
  {
    title: 'Dorem ipsum dolar amit',
    content:
      'Etiam gravida turpis in porttitor pellentesque. Nam varius finibus malesuada. Aenean porttitor elit quis quam ultrices, eu ullamcorper nibh lobortis. Aliquam mattis libero sit amet tellus cursus pellentesque. Fusce elementum finibu.',
  },
  {
    title: 'Ipsum dolar sit amit',
    content:
      'Donec quis iaculis s sagittis. Vestibulum ac ante interd um, eff icitur tortor in, imperdiet diam. Ut convallis risus eget nunc condimentum, et elementum erat tincidunt. Etiam blandit justo in rutrum porta. ',
  },
  {
    title: 'Dorem ipsum dolar amit',
    content:
      'Cras convallis lobortis sagittis. Vestibulum ac ante interdum, efficitur tortor in, imperdiet diam. Ut convallis risus eget nunc condimentum, et elementum erat tincidunt. Etiam blandit justo in rutrum porta. ',
  },
  {
    title: 'Ipsum dolar sit amit',
    content:
      'Donec quis iaculis s sagittis. Vestibulum ac ante interd um, eff icitur tortor in, imperdiet diam. Ut convallis risus eget nunc condimentum, et elementum erat tincidunt. Etiam blandit justo in rutrum porta. ',
  },
  {
    title: 'Dorem ipsum dolar amit',
    content:
      'Cras convallis lobortis sagittis. Vestibulum ac ante interdum, efficitur tortor in, imperdiet diam. Ut convallis risus eget nunc condimentum, et elementum erat tincidunt. Etiam blandit justo in rutrum porta. ',
  },
  {
    title: 'Ipsum dolar sit amit',
    content:
      'Donec quis iaculis s sagittis. Vestibulum ac ante interd um, eff icitur tortor in, imperdiet diam. Ut convallis risus eget nunc condimentum, et elementum erat tincidunt. Etiam blandit justo in rutrum porta. ',
  },
];

export const TermsAndCondition = () => {
  return (
    <View style={styles.container}>
      <Back title="Terms & Condition" />
      <ScrollView contentContainerStyle={styles.scrollY}>
        {json.map((item, idx) => (
          <View style={styles.scroll}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.content}>{item.content}</Text>
          </View>
        ))}
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
  content: {
    fontSize: FONT_SIZE.MEDIUM,
    fontFamily: FONT_FAMILY.LIGHT,
    color: '#5C6368',
    marginVertical: 12,
  },
});
