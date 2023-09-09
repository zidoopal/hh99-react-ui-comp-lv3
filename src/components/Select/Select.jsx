import { React } from 'react';
import { useState, useEffect, useRef } from 'react';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

import {
  SelectContainer,
  SelectWrapper,
  Selectbar,
  Dropdown,
  OptionList,
} from './styles';

const CustomSelect = ({ options, value, onChange }) => {
  const [isShowOptions, setShowOptions] = useState(false);

  // Dropdown 외부 클릭 시, 펼쳐진 Dropdown 닫기
  const dropdownRef = useRef(null);

  const handleOptionClick = (e) => {
    onChange(e.target.innerText);
    setShowOptions(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowOptions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Selectbar
      ref={dropdownRef}
      onClick={() => setShowOptions(!isShowOptions)}
      theme="type2"
      role="listbox"
      aria-expanded={isShowOptions}
    >
      <label>{value}</label>
      {isShowOptions ? (
        <IoMdArrowDropup size="28" style={{ marginRight: '15px' }} />
      ) : (
        <IoMdArrowDropdown size="28" style={{ marginRight: '15px' }} />
      )}
      <Dropdown $show={isShowOptions}>
        {options.map((item) => (
          <OptionList
            key={item.id}
            value={item.value}
            $show={isShowOptions}
            onClick={handleOptionClick}
            role="option"
            aria-selected={item.value === value}
          >
            {item.value}
          </OptionList>
        ))}
      </Dropdown>
    </Selectbar>
  );
};

const Select = () => {
  const options = [
    { id: 1, value: '리액트' },
    { id: 2, value: '자바' },
    { id: 3, value: '스프링' },
    { id: 4, value: '리액트 네이티브' },
  ];
  const [selectedOption1, setSelectedOption1] = useState(options[0].value);
  const [selectedOption2, setSelectedOption2] = useState(options[0].value);

  return (
    <div>
      <SelectContainer>
        <h2>Select</h2>
        <SelectWrapper>
          <CustomSelect
            options={options}
            value={selectedOption1}
            onChange={setSelectedOption1}
          />
        </SelectWrapper>
        <h2>Hidden Select</h2>
        <div>
          <SelectWrapper hidden>
            <CustomSelect
              options={options}
              value={selectedOption2}
              onChange={setSelectedOption2}
            />
          </SelectWrapper>
        </div>
      </SelectContainer>
    </div>
  );
};

export default Select;
