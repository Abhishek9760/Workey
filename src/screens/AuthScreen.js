import React, {useEffect, useState} from 'react';
import {Snackbar} from 'react-native-paper';
import {useSelector} from 'react-redux';
import styled from 'styled-components/native';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';

const AuthScreen = ({children}) => {
  const [showLogin, setShowLogin] = useState(true);
  const [visible, setVisible] = useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  const toggle = () => setShowLogin(!showLogin);
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    setVisible(Boolean(auth.error));
  }, [auth.error]);

  return (
    <ContainerImage>
      <Backdrop>
        <Wrapper>
          {showLogin ? (
            <LoginScreen authLoading={auth.loading} toggle={toggle} />
          ) : (
            <RegisterScreen authLoading={auth.loading} toggle={toggle} />
          )}
        </Wrapper>
        <Snackbar
          style={{backgroundColor: '#b44a4a'}}
          visible={visible}
          duration={Snackbar.DURATION_SHORT}
          onDismiss={onDismissSnackBar}>
          {auth.error}
        </Snackbar>
      </Backdrop>
    </ContainerImage>
  );
};

export default AuthScreen;

const ContainerImage = styled.ImageBackground.attrs({
  source: require('../../assets/images/bg.jpg'),
  resizeMode: 'cover',
})`
  flex: 1;
  width: 100%;
  height: 100%;
`;

const Backdrop = styled.View`
  background-color: rgba(0, 0, 0, 0.2);
  flex: 1;
  justify-content: center;
`;

const Wrapper = styled.View`
  background-color: rgba(255, 255, 255, 0.5);
  padding: 10px;
`;
