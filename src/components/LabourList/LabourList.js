import {View, Text, FlatList} from 'react-native';
import React from 'react';
import LabourListItem from './LabourListItem';
import {Headline, List, Title} from 'react-native-paper';
import Heading from '../Heading';

const LabourList = ({labourList, listTitle}) => {
  return (
    <List.Section>
      {listTitle && <Heading>{listTitle}</Heading>}
      <FlatList
        data={labourList}
        renderItem={({item}) => (
          <LabourListItem
            id={item.id}
            profileImg="https://i.pinimg.com/originals/01/d8/96/01d896fc28cafa2c1902203dfb1bc138.jpg"
            name={item?.user?.username}
            experience={item.experience}
            expertise={item.expertise}
            location={'Noida'}
          />
        )}
        keyExtractor={item => item.id}
      />
    </List.Section>
  );
};

export default LabourList;
