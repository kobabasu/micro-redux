// actions
export const SEND = 'SEND';

// action creators
export const send = (value) => {
  return {
    type: SEND,
    value
  };
};
