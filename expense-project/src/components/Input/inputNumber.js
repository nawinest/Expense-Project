import React from 'react'
import ReactNumeric from 'react-numeric';

export function USDMoneyInput(props){
  const { value } = props; // number typed
  return (
    <ReactNumeric
      value={value}
      currencySymbol="$"
      minimumValue="0"
      decimalCharacter="."
      digitGroupSeparator=""
      onChange={(event, value)=>{
        console.log(event.target.value); // '1,234.5 $'
        console.log(value); // 1234.5
      }}
    />
  );
}