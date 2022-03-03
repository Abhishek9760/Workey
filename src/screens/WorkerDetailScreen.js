import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {getCurrentWorker} from '../actions/workerActions';
import {useSelector} from 'react-redux';
import styled from 'styled-components/native';

const WorkerDetailScreen = ({route}) => {
  const {id} = route.params;
  const dispatch = useDispatch();
  const worker = useSelector(state => state.currentWorker.details);

  useEffect(() => {
    dispatch(getCurrentWorker(id));
  }, []);
  return <Container></Container>;
};

export default WorkerDetailScreen;

const Container = styled.View`
  flex: 1;
  background-color: #eee;
`;
