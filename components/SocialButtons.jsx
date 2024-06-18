import React from 'react';
import { View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faApple, faGoogle, faFacebook} from '@fortawesome/free-brands-svg-icons';

export default function SocialButtons() {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 50 }}>
      <FontAwesomeIcon icon={faApple} size={32} />
      <FontAwesomeIcon icon={faGoogle} size={32} />
      <FontAwesomeIcon icon={faFacebook} size={32} />
    </View>
  );
}
