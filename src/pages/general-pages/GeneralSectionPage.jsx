/* eslint-disable */
import { useEffect, useState } from "react";
import axios from "axios";
import { observer } from "mobx-react-lite";

import { SectionItem } from "../../components";

import "./GeneralSectionPage.scss";

const GeneralSectionPage = observer(() => {
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
    // getUsers();
    getSections().then((data) => setSections(data));
  }, []);

  const filteredSections = sections.filter((section) => {
    return section.name.toLowerCase().includes(value.toLocaleLowerCase());
  });

  return (
    <div className="block-section">
      <h1>Кружки и секции</h1>
      <div>
        <input onChange={(event) => setValue(event.target.value)} placeholder="Поиск..." />
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
