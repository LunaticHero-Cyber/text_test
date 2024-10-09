import {
  NativeSyntheticEvent,
  SafeAreaView,
  StyleSheet,
  Text,
  TextLayoutEventData,
} from 'react-native';

function App(): React.JSX.Element {
  const onJustifyTextLayout = (
    event: NativeSyntheticEvent<TextLayoutEventData>,
  ) =>
    console.log('Number of lines (Justify): ', event.nativeEvent.lines.length);

  const onTextLayout = (event: NativeSyntheticEvent<TextLayoutEventData>) =>
    console.log('Number of lines: ', event.nativeEvent.lines.length);

  return (
    <SafeAreaView>
      <Text onTextLayout={onJustifyTextLayout} style={styles.textJustify}>
        asdasd dajdoij sdnk aosjn dojna s dnjasjdkn dnsjdnjnkdaajs sjdnjn sdjn
        jdns ssjkndjkansd s s s s s s s njnd sjkdnajdn sndjand sdjnaojdnsjdnsnd
        jsdn sdn a s kk sdnjsjdn jsnd sjdn dddd ajksnd jad nd a d sakjnd skjnd
        sjdnaj ksjand akjsnd snd jsdnjkdn js s
      </Text>
      <Text onTextLayout={onTextLayout} style={styles.textNormal}>
        asdasd dajdoij sdnk aosjn dojna s dnjasjdkn dnsjdnjnkdaajs sjdnjn sdjn
        jdns ssjkndjkansd s s s s s s s njnd sjkdnajdn sndjand sdjnaojdnsjdnsnd
        jsdn sdn a s kk sdnjsjdn jsnd sjdn dddd ajksnd jad nd a d sakjnd skjnd
        sjdnaj ksjand akjsnd snd jsdnjkdn js s
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textJustify: {
    // Just so it is visible
    fontFamily: 'AvenirNext-Bold-01',
    backgroundColor: 'red',
    textAlign: 'justify',
    margin: 16,
  },
  textNormal: {
    // Just so it is visible
    fontFamily: 'AvenirNext-Bold-01',
    backgroundColor: 'red',
    textAlign: 'left',
    margin: 16,
  },
});

export default App;
