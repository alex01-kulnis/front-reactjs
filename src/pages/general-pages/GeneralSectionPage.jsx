/* eslint-disable */
import { useEffect, useState } from "react";
import axios from "axios";
import { observer } from "mobx-react-lite";

import { SectionItem } from "../../components";

import "./GeneralSectionPage.scss";

const GeneralSectionPage = observer(() => {
  const [sections, setSections] = useState([]);

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

  return (
    <div className="main-sections">
      {sections.map((sections) => (
        <SectionItem sections={sections} key={sections.id} />
      ))}
    </div>
  );
});

export default GeneralSectionPage;
