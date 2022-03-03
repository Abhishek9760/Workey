import {View, Text} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {Avatar, Caption, Divider, List} from 'react-native-paper';
import Icon from 'react-native-vector-icons/EvilIcons';
import {useNavigation} from '@react-navigation/native';

const LabourListItem = ({
  name,
  expertise,
  experience,
  location,
  profileImg,
  id,
}) => {
  const navigation = useNavigation();
  const right = () => {
    return (
      <Wrapper>
        <Icon name="location" size={22} />
        <Text>{location}</Text>
      </Wrapper>
    );
  };

  const left = () => {
    return (
      <Avatar.Image
        size={55}
        source={{
          uri: profileImg,
        }}
      />
    );
  };

  const description = () => {
    return (
      <Wrapper style={{justifyContent: 'flex-start'}}>
        <Icon name="gear" size={15} />
        <Text>{expertise}</Text>
      </Wrapper>
    );
  };

  return (
    <>
      <List.Item
        title={name}
        description={description}
        left={left}
        right={right}
        onPress={() => navigation.navigate('worker-detail', {id: id})}
      />
      <Divider />
    </>
  );
};

const Wrapper = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const DescriptionWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export default LabourListItem;
