import React from 'react';
import InputMask from 'react-input-mask';

const MyMaskedInput = () => {
  return (
    <InputMask
      mask="(99) 99999-9999"
      alwaysShowMask={true}
      maskChar="_"
    >
      {(inputProps) => <input {...inputProps} />}
    </InputMask>
  );
};

export default MyMaskedInput;
