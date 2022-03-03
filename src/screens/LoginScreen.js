import React, {useState} from 'react';
import styled from 'styled-components/native';
import {useDispatch, useSelector} from 'react-redux';
import {Button, HelperText, TextInput, Title} from 'react-native-paper';
import {login} from '../actions/authActions';
import {Spacer, WrapperHeadingText} from './Auth/Styles';
import {validateEmail} from '../utils/validator';

const LoginScreen = ({toggle, authLoading}) => {
  const [mail, setMail] = useState('');
  const [mailError, setMailError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const dispatch = useDispatch();

  const hasError = () => {
    return mail.trim() === '' || password.trim() === '';
  };

  const handleLogin = () => {
    if (!validateEmail(mail.trim())) {
      setMailError(true);
    } else {
      setMailError(false);
      // }
      if (!(password.length >= 8)) {
        setPasswordError(true);
      } else {
        setPasswordError(false);
      }

      if (!(passwordError || mailError)) {
        dispatch(login(mail, password));
      }
    }
  };
  return (
    <>
      <WrapperHeadingText>Login for Workey</WrapperHeadingText>
      <Spacer>
        <TextInput
          label="Email"
          error={mailError}
          value={mail}
          onFocus={() => setMailError(false)}
          placeholder="Enter your e-mail"
          onChangeText={text => setMail(text)}
        />
        <HelperText padding="none" type="info" visible={true}>
          Email address is invalid!
        </HelperText>
      </Spacer>
      <Spacer>
        <TextInput
          secureTextEntry
          error={passwordError}
          label="Password"
          value={password}
          placeholder="Enter your password"
          onFocus={() => setPasswordError(false)}
          onChangeText={text => setPassword(text)}
        />
        <HelperText padding="none" type="info" visible={true}>
          Password must be at least 8
        </HelperText>
      </Spacer>
      <Button
        loading={authLoading}
        style={{marginBottom: 20}}
        icon="login"
        mode="contained"
        onPress={handleLogin}>
        Login
      </Button>

      <Button onPress={toggle} icon="account-tie-outline">
        Not a user? Register
      </Button>
    </>
  );
};

export default LoginScreen;
