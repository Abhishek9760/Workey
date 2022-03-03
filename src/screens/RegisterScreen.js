import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {Spacer, WrapperHeadingText} from './Auth/Styles';
import {Button, HelperText, TextInput, Title} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {validateEmail, validateUsername} from '../utils/validator';
import {register} from '../actions/authActions';

const RegisterScreen = ({toggle, authLoading}) => {
  const [mail, setMail] = useState('');
  const [mailError, setMailError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const dispatch = useDispatch();

  const handleRegister = () => {
    if (!validateEmail(mail.trim())) {
      setMailError(true);
    } else {
      setMailError(false);
    }

    if (
      !password.trim() ||
      password.length < 8 ||
      confirmPassword !== password
    ) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    if (!username || !validateUsername(username)) {
      setUsernameError(true);
    } else {
      setUsernameError(false);
    }
    if (!(mailError || usernameError || passwordError)) {
      dispatch(register(mail, username, password, confirmPassword));
    }
  };
  return (
    <>
      <WrapperHeadingText>Register for Workey</WrapperHeadingText>
      <Spacer>
        <TextInput
          label="Email"
          error={mailError}
          value={mail}
          onFocus={() => setMailError(false)}
          placeholder="Enter your e-mail"
          onChangeText={text => setMail(text)}
        />
      </Spacer>
      <Spacer>
        <TextInput
          label="Username"
          error={usernameError}
          value={username}
          onFocus={() => setUsernameError(false)}
          placeholder="Enter your username"
          onChangeText={text => setUsername(text)}
        />
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
      </Spacer>
      <Spacer>
        <TextInput
          secureTextEntry
          label="Confirm Password"
          value={confirmPassword}
          placeholder="Confirm Password"
          onChangeText={text => setConfirmPassword(text)}
        />
      </Spacer>
      <Button
        loading={authLoading}
        style={{marginBottom: 20}}
        icon="login"
        mode="contained"
        onPress={handleRegister}>
        Register
      </Button>

      <Button onPress={toggle} icon="account-tie-outline">
        Already a User? Login
      </Button>
    </>
  );
};

export default RegisterScreen;
