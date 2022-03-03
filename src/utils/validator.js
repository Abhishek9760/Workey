export const validateEmail = email => {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
};

export const validateUsername = username => true;
