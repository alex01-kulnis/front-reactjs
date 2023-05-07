/* eslint-disable */
import { useEffect, useState } from "react";
import axios from "axios";
import { observer } from "mobx-react-lite";

import { SectionItem } from "../../components";
import { useFieldState } from "../../hooks/useFieldState";

import "./GeneralSectionPage.scss";
import "./_categories.scss";
import styles from "./Search.module.scss";

const categories = ["Все", "Спортивные", "Творческие", "Танцевальные"];

const GeneralSectionPage = observer(() => {
  const [category, setCategory] = useFieldState("Название секции");
  const onCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  const [globalSections, setGlobalSections] = useState([]);
  const [sections, setSections] = useState([]);
  const [value, setValue] = useState("");

  const [filter, setFilter] = useState("Все");
  const onFilterChange = (categoryName) => {
    setFilter(categoryName);
    let result;
    if (categoryName === "Все") {
      result = globalSections;
    } else {
      result = globalSections.filter((section) =>
        section.category.toLowerCase().includes(categoryName.toLowerCase())
      );
    }
    setSections(result);
  };

  const getSections = async () => {
    try {
      const res = await axios.get("http://localhost:3001/api/section");
      console.log(res);
      return res.data;
      // setUsers(res.data);
    } catch (error) {}
  };

  useEffect(() => {
    getSections().then((data) => {
      setSections(data), setGlobalSections(data);
    });
  }, []);

  const onClickClear = () => {
    setValue("");
  };

  const filteredSections = sections.filter((section) => {
    if (category === "Название секции") {
      return section.name.toLowerCase().includes(value.toLocaleLowerCase());
    }

    if (category === "Название организации") {
      return section.user.organization_name
        .toLowerCase()
        .includes(value.toLocaleLowerCase());
    }

    if (category === "Имя преподователя") {
      return section.mentor.toLowerCase().includes(value.toLocaleLowerCase());
    }
  });

  return (
    <div className="block-section">
      <h1>Кружки и секции</h1>
      <div className="search-block">
        <div className={styles.root}>
          <svg
            className={styles.icon}
            enableBackground="new 0 0 32 32"
            id="EditableLine"
            version="1.1"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="14"
              cy="14"
              fill="none"
              id="XMLID_42_"
              r="9"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
            />
            <line
              fill="none"
              id="XMLID_44_"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
              x1="27"
              x2="20.366"
              y1="27"
              y2="20.366"
            />
          </svg>
          <input
            value={value}
            onChange={(event) => setValue(event.target.value)}
            className={styles.input}
            placeholder="Поиск по категориям"
          />
          {value && (
            <svg
              onClick={onClickClear}
              className={styles.clearIcon}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          )}
        </div>
        <div className="select-category">
          <select onChange={onCategoryChange} value={category}>
            <option>Название секции</option>
            <option>Название организации</option>
            <option>Имя преподователя</option>
          </select>
        </div>
      </div>

      <div className="categories">
        <ul>
          {categories.map((categoryName, index) => (
            <li
              key={categoryName}
              onClick={() => onFilterChange(categoryName)}
              className={filter === categoryName ? "active" : ""}
            >
              {categoryName}
            </li>
          ))}
        </ul>
      </div>

      <div className="main-sections">
        {filteredSections.map((sections) => (
          <SectionItem sections={sections} key={sections.id} />
        ))}
      </div>
    </div>
  );
});

export default GeneralSectionPage;
