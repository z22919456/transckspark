import React, { HTMLAttributes, forwardRef } from 'react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
// import { useColorMode } from "@chakra-ui/react";
import { InputGroup, Input, InputRightElement } from '@chakra-ui/react';
import { CalendarIcon } from '@chakra-ui/icons';

import 'react-datepicker/dist/react-datepicker.css';
// import './chakra-react-datepicker.css';

interface Props {
  isClearable?: boolean;
  onChange: (date: Date) => void;
  selectedDate?: Date;
  // showPopperArrow?: boolean;
}

const CustomInput = forwardRef(({ value, onClick, onChange }: any, ref: any) => (
  <Input
    autoComplete="off"
    // background="white"
    value={value}
    ref={ref}
    onClick={onClick}
    onChange={onChange}
  />
));

CustomInput.displayName = 'DateInput';

// const ReactDatePickerComponent = ({
//   selectedDate,
//   onChange,
//   isClearable = false,
//   showPopperArrow = false,
//   ...props
// }: Props & HTMLAttributes<HTMLElement>) => (
//   <>
//     <InputGroup>
//       <ReactDatePicker
//         selected={selectedDate}
//         onChange={onChange}
//         isClearable={isClearable}
//         showPopperArrow={showPopperArrow}
//         className="react-datapicker__input-text"
//         dateFormat="MM/dd/yyyy"
//         customInput={<CustomInput />}
//       />
//       <InputRightElement color="gray.500" >
//         <CalendarIcon fontSize="sm" />
//       </InputRightElement>
//     </InputGroup>
//   </>
// );
const DatePicker = ({ selectedDate = new Date(), onChange, ...props }: Props) => (
  <>
    <InputGroup className="dark-theme">
      <ReactDatePicker
        selected={selectedDate}
        onChange={onChange}
        className="react-datapicker__input-text"
        customInput={<CustomInput />}
        dateFormat="yyyy/MM/dd"
        {...props}
      />
      <InputRightElement color="gray.500" >
        <CalendarIcon fontSize="sm" />
      </InputRightElement>
    </InputGroup>
  </>
);

// set className to "light-theme-original"

/* <div className={isLight ? "light-theme" : "dark-theme"}>
<ReactDatePicker
  selected={selectedDate}
  onChange={onChange}
  isClearable={isClearable}
  showPopperArrow={showPopperArrow}
  className="react-datapicker__input-text"
  dateFormat="MM/dd/yyyy"
  customInput={<CustomInput />}
/>
</div> */

export default DatePicker;