import { ViewStyle, StyleSheet, Dimensions } from 'react-native';
const { height } = Dimensions.get('window');
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

interface Style {
  container: ViewStyle;
  overlay: ViewStyle;
  modal: ViewStyle;
  indicator: ViewStyle;
}

export default StyleSheet.create<Style>({
  container: {
    zIndex: 10000,
    width: '100%',
    height: height,
    backgroundColor: 'rgba(80, 80, 80, 0.50)',
    position: 'absolute',
  },
  overlay: {
    width: '100%',
    height: '100%',
  },
  modal: {
    position: 'absolute',
    height: '96%',
    bottom: '-4%',
    backgroundColor: '#2E4C6D',
    width: wp(100),
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  indicator: {
    width: 70,
    height: 4,
    backgroundColor: '#ccc',
    borderRadius: 70,
    alignSelf: 'center',
    marginVertical: 8,
  },
});
