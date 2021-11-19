import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

export function CarDropdown() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'BMW', value: 'bmw'},
    {label: 'Honda', value: 'honda'},
    {label: 'Tesla', value: 'tesla'},
  ]);

  return (
    <DropDownPicker
      open={open}

      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      dropDownContainerStyle={{
        backgroundColor: '#dfdfdf',
      }}
      dropDownDirection="TOP"
    />
  );
}
