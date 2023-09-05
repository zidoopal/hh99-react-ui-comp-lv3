import React, { useState, useEffect, useRef } from "react";
import { Wrap, SelectButton, LanguageLi, LanguageUl } from "./styles";
import { AiFillCaretDown } from "react-icons/ai";

const Select = () => {
  const languageList = ["리액트", "자바", "스프링", "리액트네이티브"];
  const [language, setLanguage] = useState("리액트");
  const [showList, setShowList] = useState(false);

  const toggleShowList = () => setShowList(!showList);
  const liClickHandler = (index) => {
    setLanguage(languageList[index]);
    toggleShowList();
  };

  const selectWrapRef = useRef();
  useEffect(() => {
    const clickListOutside = (e) => {
      if (selectWrapRef.current && !selectWrapRef.current.contains(e.target)) {
        toggleShowList();
      }
    };
    document.addEventListener("mousedown", clickListOutside);
    return () => {
      document.removeEventListener("mousedown", clickListOutside);
    };
  }, []);

  return (
    <>
      <Wrap>
        <h1>Select</h1>
        <SelectButton onClick={toggleShowList}>
          {language}
          <AiFillCaretDown />
        </SelectButton>
        {showList && (
          <div ref={selectWrapRef}>
            <LanguageUl>
              {languageList.map((item, index) => {
                return (
                  <LanguageLi key={index} onClick={() => liClickHandler(index)}>
                    {item}
                  </LanguageLi>
                );
              })}
            </LanguageUl>
          </div>
        )}
      </Wrap>
    </>
  );
};

export default Select;
