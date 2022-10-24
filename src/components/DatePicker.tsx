import 'react-datepicker/dist/react-datepicker.css';

import { CalendarIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import React, { forwardRef } from 'react';
import ReactDatePicker from 'react-datepicker';

// import { useColorMode } from "@chakra-ui/react";
// import './chakra-react-datepicker.css';

interface Props {
  isClearable?: boolean;
  onChange: (date: Date) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement, Element>) => void
  date?: Date;
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

const DatePicker = ({
  date = new Date(), onChange, onBlur, ...props
}: Props) => (
  <>
    <InputGroup className="dark-theme">
      <ReactDatePicker
        selected={date}
        onChange={onChange}
        onBlur={onBlur}
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
