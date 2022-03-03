import {View, Text} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

const Heading = ({children, additionalStyles}) => {
  return (
    <View>
      <HeadingText style={additionalStyles && additionalStyles}>
        {children}
      </HeadingText>
    </View>
  );
};

export default Heading;

const HeadingText = styled.Text`
  font-size: 22px;
  background-color: #292929;
  padding: 10px;
  font-weight: bold;
  letter-spacing: 3px;
  color: #fff;
  margin-bottom: 5px;
  elevation: 5;
`;
