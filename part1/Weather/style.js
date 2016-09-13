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
  description: {
    fontSize: 24
  },
  location: {
    fontSize: 24
  }
});

export default styles;