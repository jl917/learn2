import React from 'react';

const InputString = ({ name, codeIndexs }) => (
  <input
    name={name}
    className="scode"
    type="text"
    onChange={(e) => {
      e.target.value = e.target.value.toLocaleUpperCase();
      if (e.target.value.length > 1) {
        e.target.value = e.target.value.slice(0, 1);
      }
      if (e.target.value.length == 1) {
        const ind = codeIndexs.indexOf(name);
        if (ind == 3) {
          document.querySelector(`input[name="${codeIndexs[ind]}"]`).blur();
        } else {
          document.querySelector(`input[name="${codeIndexs[ind + 1]}"]`).focus();
        }
      }
    }}
  />
);

export default InputString;
