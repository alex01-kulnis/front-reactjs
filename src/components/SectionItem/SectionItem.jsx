import axios from "axios";

import ".//Sections.scss";

const SectionItem = ({ sections }) => {
  if (!sections) {
    return <h1 style={{ textAlign: "center", margin: "20px" }}>Секций нету!</h1>;
  }
  //   const refuse = async (e) => {
  //     // e.preventDefault();
  //     try {
  //       const res = await axios.delete(`http://localhost:3001/api/users/${users.id}`);
  //       console.log(res);
  //     } catch (e) {
  //       alert(e.response.data.message);
  //     }
  //   };

  //   const accept = async (e) => {
  //     // e.preventDefault();
  //     try {
  //       const res = await axios.patch(`http://localhost:3001/api/users/${users.id}`, {
  //         status: "ACTIVE",
  //       });
  //       console.log(res);
  //     } catch (e) {
  //       alert(e.response.data.message);
  //     }
  //   };
  return (
    <div className="post">
      <div className="post__content">
        <div>
          <strong>Название</strong> : {sections.name}
        </div>
        <div>
          <strong>Категория</strong> : {sections.category}
        </div>
        <div>
          <strong>Возраст</strong> : {sections.years} <strong>лет</strong>
        </div>
      </div>
      <div className="post__content">
        <div>
          <strong>monday.</strong> : {sections.monday}
        </div>
        <div>
          <strong>tuesday</strong> : {sections.tuesday}
        </div>
        <div>
          <strong>wednesday</strong> : {sections.wednesday}
        </div>
      </div>
      <div className="post__content">
        <div>
          <strong>thursday.</strong> : {sections.thursday}
        </div>
        <div>
          <strong>friday</strong> : {sections.friday}
        </div>
        <div>
          <strong>saturday</strong> : {sections.saturday}
        </div>
      </div>
      {/* <div className="post__btns">
        <button className="accept-button" onClick={accept}>
          Принять
        </button>
        <button className="refuce-button" onClick={refuse}>
          Отлонить
        </button>
      </div> */}
    </div>
  );
};

export default SectionItem;