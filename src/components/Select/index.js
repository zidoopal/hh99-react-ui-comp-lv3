import { React } from 'react';
import { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import {
  SelectContainer,
  SelctBarSet,
  Selectbar,
  Label,
  Dropdown,
  OptionList,
  IconWrap,
} from './styles';

const CustomSelct = ({ options }) => {
  const [isShowOptions, setShowOptions] = useState(false);
  const [currentValue, setCurrentValue] = useState(options[0].value);

  const handleOnChangeSelect = (e) => {
    setCurrentValue(e.target.innerText);
    // 리스트 선택 후 닫힘
    setShowOptions(false);
  };

  return (
    <>
      <Selectbar onClick={() => setShowOptions(!isShowOptions)}>
        <Label>{currentValue}</Label>
        <IconWrap>
          <IoMdArrowDropdown size="20" color="white" />
        </IconWrap>
        <Dropdown show={isShowOptions}>
          {options.map((item) => (
            <OptionList
              key={item.id}
              value={item.value}
              show={isShowOptions}
              onClick={handleOnChangeSelect}
            >
              {item.value}
            </OptionList>
          ))}
        </Dropdown>
      </Selectbar>
    </>
  );
};

const Select = () => {
  const options = [
    { id: 1, value: '리액트' },
    { id: 2, value: '자바' },
    { id: 3, value: '스프링' },
    { id: 4, value: '리액트 네이티브' },
  ];

  return (
    <>
      <h1>Select</h1>
      <SelectContainer>
        <SelctBarSet>
          <CustomSelct options={options} />
          <div className="hidden">
            <CustomSelct options={options} />
          </div>
        </SelctBarSet>
      </SelectContainer>
    </>
  );
};

export default Select;
