import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  forecast: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  temperature: {
    flex: 2,
    fontSize: 124,
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  location: {
    fontSize: 24
  },
  textInput: {
    height: 36,
    width: 112,
    fontSize: 36,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center'
  }
});

export default styles;