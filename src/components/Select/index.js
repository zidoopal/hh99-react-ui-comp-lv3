import { React } from 'react';
import { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';

import {
  SelectContainer,
  SelectWrapper,
  Selectbar,
  Dropdown,
  OptionList,
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
      <Selectbar onClick={() => setShowOptions(!isShowOptions)} theme="type2">
        <label>{currentValue}</label>
        <IoMdArrowDropdown size="28" style={{ marginRight: '15px' }} />
        <Dropdown $show={isShowOptions}>
          {options.map((item) => (
            <OptionList
              key={item.id}
              value={item.value}
              $show={isShowOptions}
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
    <div>
      <SelectContainer>
        <h2>Select</h2>
        <SelectWrapper>
          <CustomSelct options={options} />
        </SelectWrapper>
        <h2>Hidden Select</h2>
        <div>
          <SelectWrapper hidden>
            {/* <div className="hidden"> */}
            <CustomSelct options={options} />
            {/* </div> */}
          </SelectWrapper>
        </div>
      </SelectContainer>
    </div>
  );
};

export default Select;
