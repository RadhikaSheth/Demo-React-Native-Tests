import React from 'react';
import {Button} from 'react-native';

const ButtonComponent = () => {
  return (
      <Button
        title="Press me!"
        onPress={() => {}}
        testID="pressMeButton"
        accessibilityLabel="Press me"
      />
  );
};

export default ButtonComponent;