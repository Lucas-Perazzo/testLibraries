import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Linking,
  Button, 
  Platform
} from 'react-native';

const App = () => {

  return (
    <View style={styles.container}>
      <Button
        title="Open Settings"
        onPress={() => {
          Platform.OS === 'android' ? Linking.sendIntent("android.settings.DATE_SETTINGS") : Linking.openSettings();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
