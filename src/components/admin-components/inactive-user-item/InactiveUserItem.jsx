import axios from "axios";

import "./inactiveUserItem.scss";

const InactiveUserItem = ({ users }) => {
  if (!users) {
    return <h1 style={{ textAlign: "center", margin: "20px" }}>Заявок нет!</h1>;
  }

  const refuse = async (e) => {
    // e.preventDefault();
    try {
      const res = await axios.delete(`http://localhost:3001/api/users/${users.id}`);
      console.log(res);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  const accept = async (e) => {
    // e.preventDefault();
    try {
      const res = await axios.patch(`http://localhost:3001/api/users/${users.id}`, {
        email: users.email,
        status: "ACTIVE",
      });
      console.log(res);
    } catch (e) {
      alert(e.response.data.message);
    }
  };
  return (
    <div className="post">
      <div className="post__content">
        <div>
          <strong>Тел.</strong> : {users.phone}
        </div>
        <div>
          <strong>Email</strong> : {users.email}
        </div>
        <div>
          <strong>Имя организации</strong> : {users.organization_name}
        </div>
      </div>
      <div className="post__content">
        <div>
          <strong>Отчество.</strong> : {users.last_name}
        </div>
        <div>
          <strong>Имя</strong> : {users.first_name}
        </div>
        <div>
          <strong>Фамилия</strong> : {users.middle_name}
        </div>
      </div>
      <div className="post__btns">
        <button className="accept-button" onClick={accept}>
          Принять
        </button>
        <button className="refuce-button" onClick={refuse}>
          Отлонить
        </button>
      </div>
    </div>
  );
};

export default InactiveUserItem;
