import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import LabourList from '../components/LabourList/LabourList';
import {useDispatch} from 'react-redux';
import {getWorkerList} from '../actions/workerActions';

export default function HomeScreen() {
  const workers = useSelector(state => state.workers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWorkerList());
  }, []);

  return (
    <View>
      <LabourList labourList={workers.workerList} listTitle="ALL OUR WORKERS" />
    </View>
  );
}
