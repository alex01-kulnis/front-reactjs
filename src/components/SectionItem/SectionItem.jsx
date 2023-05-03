import { useState } from "react";
import axios from "axios";

import "./Sections.scss";

const SectionItem = ({ sections }) => {
  const [showText, setShowText] = useState(false);

  console.log(sections);

  const toggleText = () => {
    setShowText(!showText);
  };

  if (!sections) {
    return <h1 style={{ textAlign: "center", margin: "20px" }}>Секций нету!</h1>;
  }

  return (
    <div className="block-post">
      <div className="post-cont">
        <h2>{sections.user.organization_name}</h2>
        <div className="info-descr-org">
          <div>
            ФИО: {sections.user.middle_name} {sections.user.first_name}
            {sections.user.last_name}
          </div>
        </div>
        <div className="info-descr-org">
          <div className="block-tel-email">
            <div className="email">email: {sections.user.email} </div>
            <div>Тел.: {sections.user.phone}</div>
          </div>
        </div>
        <div className="info-descr-section">
          <div>Название: {sections.name}</div>
          <div>Категория {sections.category}</div>
          <div>Цена: {sections.category}</div>
          <div>Возраст: {sections.years}</div>
        </div>

        {showText && (
          <div className="info-descr-section">
            <div>
              <strong>Адрес</strong>: {sections.adress}
            </div>
            <div>
              <strong>Наставник</strong>: {sections.mentor}
            </div>
            <div>
              <strong>Описание</strong>: {sections.description}
            </div>
            <div>
              <strong>Воскресенье</strong>: {sections.sunday}
            </div>
          </div>
        )}

        <span onClick={toggleText}>{showText ? <>Скрыть</> : <>Подробнее</>}</span>
      </div>
    </div>
  );
};

export default SectionItem;

// {/* <div className="post__content">
//   <div>
//     <strong>Название</strong>: {sections.name}
//   </div>
//   <div>
//     <strong>Категория</strong>: {sections.category}
//   </div>
//   <div>
//     <strong>Возраст</strong>: {sections.years} <strong>лет</strong>
//   </div>
// </div>
// <div className="post__content">
//   <div>
//     <strong>Организация</strong>: {sections.user.organization_name}
//   </div>
//   <div>
//     <strong>Наставник</strong>: {sections.mentor}
//   </div>
//   <div>
//     <strong>Описание</strong>: {sections.description}
//   </div>
// </div> */}
// {/* <div className="post__content">
//   <div>
//     <strong>Адрес</strong>: {sections.adress}
//   </div>
//   <div>
//     <strong>Наставник</strong>: {sections.mentor}
//   </div>
//   <div>
//     <strong>Описание</strong>: {sections.description}
//   </div>
// </div>
// <div className="post__content">
//   <div>
//     <strong>Четверг</strong>: {sections.thursday}
//   </div>
//   <div>
//     <strong>Пятница</strong>: {sections.friday}
//   </div>
//   <div>
//     <strong>Суббота</strong>: {sections.saturday}
//   </div>
//   <div>
//     <strong>Воскресенье</strong>: {sections.sunday}
//   </div>
// </div> */}

// {/* {showText && (
//   <div className="post__content">
//     <div>
//       <strong>Адрес</strong>: {sections.adress}
//     </div>
//     <div>
//       <strong>Наставник</strong>: {sections.mentor}
//     </div>
//     <div>
//       <strong>Описание</strong>: {sections.description}
//     </div>
//     <div>
//       <strong>Воскресенье</strong>: {sections.sunday}
//     </div>
//   </div>
// )} */}
