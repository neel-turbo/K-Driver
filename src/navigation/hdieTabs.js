export const getCurrentTabs = route => {
  if (route.name == 'Home') {
    return true;
  } else if (route.name == 'Toll') {
    return true;
  } else if (route.name == 'Payment') {
    return true;
  } else if (route.name == 'Doc') {
    return true;
  } else if (route.name == 'Account') {
    return true;
  }
  return false;
};
