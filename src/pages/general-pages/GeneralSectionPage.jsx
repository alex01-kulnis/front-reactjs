/* eslint-disable */
import { useEffect, useState } from "react";
import axios from "axios";
import { observer } from "mobx-react-lite";

import { SectionItem } from "../../components";
import { useFieldState } from "../../hooks/useFieldState";

import "./GeneralSectionPage.scss";

const GeneralSectionPage = observer(() => {
  const [category, setCategory] = useFieldState("Название секции");
  const onCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  const [sections, setSections] = useState([]);
  const [value, setValue] = useState("");

  const getSections = async () => {
    try {
      const res = await axios.get("http://localhost:3001/api/section");
      console.log(res);
      return res.data;
      // setUsers(res.data);
    } catch (error) {}
  };

  useEffect(() => {
    getSections().then((data) => setSections(data));
  }, []);

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
      <div>
        <input onChange={(event) => setValue(event.target.value)} placeholder="Поиск..." />
        <select onChange={onCategoryChange} value={category}>
          <option>Название секции</option>
          <option>Название организации</option>
          <option>Имя преподователя</option>
        </select>
      </div>

      <div className="filter">filter</div>
      <div className="main-sections">
        {filteredSections.map((sections) => (
          <SectionItem sections={sections} key={sections.id} />
        ))}
      </div>
    </div>
  );
});

export default GeneralSectionPage;
