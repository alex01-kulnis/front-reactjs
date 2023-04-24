import axios from "axios";

// import { getAuthHeaders } from "../../../service/api";
import { useFieldState } from "../../../hooks/useFieldState";
import { getAuthHeaders } from "../../../service/api";

import "./createSectionPage.scss";
import "../../../components/UI/valid-input.scss";

const CreateSectionPage = () => {
  const [name, setName] = useFieldState();
  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const [category, setCategory] = useFieldState("Спортивные");
  const onCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const [visiting, setVisiting] = useFieldState("Платно");
  const onVisitingChange = (e) => {
    setVisiting(e.target.value);
  };

  const [years, setYears] = useFieldState("1-5");
  const onYearsChange = (e) => {
    setYears(e.target.value);
  };

  const [monday, setMonday] = useFieldState();
  const onMondayChange = (e) => {
    setMonday(e.target.value);
  };

  const [tuesday, setTuesday] = useFieldState();
  const onTuesdayChange = (e) => {
    setTuesday(e.target.value);
  };

  const [wednesday, setWednesday] = useFieldState();
  const onWednesdayChange = (e) => {
    setWednesday(e.target.value);
  };

  const [thursday, setThursday] = useFieldState();
  const onThursdayChange = (e) => {
    setThursday(e.target.value);
  };

  const [friday, setFriday] = useFieldState();
  const onFridayChange = (e) => {
    setFriday(e.target.value);
  };

  const [saturday, setSaturday] = useFieldState();
  const onSaturdayChange = (e) => {
    setSaturday(e.target.value);
  };

  const [sunday, setSunday] = useFieldState();
  const onSundayChange = (e) => {
    setSunday(e.target.value);
  };

  const [adress, setAdress] = useFieldState();
  const onAdressChange = (e) => {
    setAdress(e.target.value);
  };

  const [adress2, setAdress2] = useFieldState();
  const onAdress2Change = (e) => {
    setAdress2(e.target.value);
  };

  const [adress3, setAdress3] = useFieldState();
  const onAdress3Change = (e) => {
    setAdress3(e.target.value);
  };

  const [mentor, setMentor] = useFieldState();
  const onMentorChange = (e) => {
    setMentor(e.target.value);
  };

  const [mentor2, setMentor2] = useFieldState();
  const onMentor2Change = (e) => {
    setMentor2(e.target.value);
  };

  const [mentor3, setMentor3] = useFieldState();
  const onMentor3Change = (e) => {
    setMentor3(e.target.value);
  };

  const [description, setDescription] = useFieldState();
  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const createSection = async (e) => {
    console.log("dsa", visiting);
    // e.preventDefault();
    try {
      // const organization_name = organizationName;
      // const middle_name = middleName;
      // const first_name = firstName;
      // const last_name = lastName;
      const res = await axios.post(
        `http://localhost:3001/api/section`,
        {
          name,
          category,
          visiting,
          years,
          monday,
          tuesday,
          wednesday,
          thursday,
          friday,
          saturday,
          sunday,
          adress,
          adress2,
          adress3,
          mentor,
          mentor2,
          mentor3,
          description,
        },
        getAuthHeaders()
      );
      console.log(res);
    } catch (error) {}
  };

  const clear = () => {
    setName("");
    setCategory("Спортивные");
    setVisiting("Платно");
    setYears("1-4");
    setMonday("");
    setTuesday("");
    setWednesday("");
    setThursday("");
    setFriday("");
    setSaturday("");
    setSunday("");
    setAdress("");
    setAdress2("");
    setAdress3("");
    setMentor("");
    setMentor2("");
    setMentor3("");
    setDescription("");
  };
  return (
    <div className="section">
      <form className="form-create-section">
        <div className="section-content">
          <div className="input-field">
            <label htmlFor="">Название:</label>
            <input
              type="text"
              placeholder="Футбольчик"
              required
              title="Поле не должно быть пустым"
              onChange={onNameChange}
              value={name}
            />
            <div className="validation">Поле не должно быть пустым</div>
          </div>
          <div className="select-field">
            <label>Категория:</label>
            <select onChange={onCategoryChange} value={category}>
              <option>Спортивные</option>
              <option>Творческие</option>
              <option>Танцевальные</option>
            </select>
          </div>
          <div className="select-field">
            <label>Посещение:</label>
            <select onChange={onVisitingChange} value={visiting}>
              <option>Платно</option>
              <option>Бесплатно</option>
            </select>
          </div>
        </div>
        <div className="section-content">
          <div className="select-field">
            <label>Возраст:</label>
            <select onChange={onYearsChange} value={years}>
              <option>1-5</option>
              <option>6-10</option>
              <option>11-17</option>
            </select>
          </div>
        </div>
        <div className="section-content">
          <div className="time-work">Время работы:</div>
        </div>
        <div className="section-content">
          <div className="input-field">
            <label htmlFor="">Понедельник:</label>
            <input
              type="text"
              placeholder="08:00-17:00"
              pattern="^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]-([01][0-9]|2[0-3]):[0-5][0-9]$"
              required
              title="Верные форматы: 08:00-17:00, 07:00-23:00"
              onChange={onMondayChange}
              value={monday}
            />
            <div className="validation">Неверный формат</div>
          </div>
          <div className="input-field">
            <label htmlFor="">Вторник:</label>
            <input
              type="text"
              placeholder="08:00-17:00"
              pattern="^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]-([01][0-9]|2[0-3]):[0-5][0-9]$"
              required
              title="Верные форматы: 08:00-17:00, 07:00-23:00"
              onChange={onTuesdayChange}
              value={tuesday}
            />
            <div className="validation">Неверный формат</div>
          </div>
          <div className="input-field">
            <label htmlFor="">Среда:</label>
            <input
              type="text"
              placeholder="08:00-17:00"
              pattern="^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]-([01][0-9]|2[0-3]):[0-5][0-9]$"
              required
              title="Верные форматы: 08:00-17:00, 07:00-23:00"
              onChange={onWednesdayChange}
              value={wednesday}
            />
            <div className="validation">Неверный формат</div>
          </div>
        </div>
        <div className="section-content">
          <div className="input-field">
            <label htmlFor="email">Четверг:</label>
            <input
              type="text"
              placeholder="08:00-17:00"
              pattern="^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]-([01][0-9]|2[0-3]):[0-5][0-9]$"
              required
              title="Верные форматы: 08:00-17:00, 07:00-23:00"
              onChange={onThursdayChange}
              value={thursday}
            />
            <div className="validation">Неверный формат</div>
          </div>
          <div className="input-field">
            <label htmlFor="email">Пятница:</label>
            <input
              type="text"
              placeholder="08:00-17:00"
              pattern="^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]-([01][0-9]|2[0-3]):[0-5][0-9]$"
              required
              title="Верные форматы: 08:00-17:00, 07:00-23:00"
              onChange={onFridayChange}
              value={friday}
            />
            <div className="validation">Неверный формат</div>
          </div>
          <div className="input-field">
            <label htmlFor="email">Суббота:</label>
            <input
              type="text"
              placeholder="08:00-17:00, Выходной"
              required
              title="Верные форматы: 08:00-17:00, Выходной"
              onChange={onSaturdayChange}
              value={saturday}
            />
            <div className="validation">Поле должно не должно быть пустым</div>
          </div>
        </div>
        <div className="section-content">
          <div className="input-field">
            <label htmlFor="email">Воскресенье:</label>
            <input
              type="text"
              placeholder="08:00-17:00, Выходной"
              required
              title="Верные форматы: 08:00-17:00, Выходной"
              onChange={onSundayChange}
              value={sunday}
            />
            <div className="validation">Поле должно не должно быть пустым</div>
          </div>
        </div>
        <div className="section-content">
          <div className="time-work">Описание:</div>
        </div>
        <div className="section-content">
          <div className="input-field">
            <label htmlFor="email">Адрес 1:</label>
            <input
              type="text"
              minLength={8}
              placeholder="kulnis7"
              required
              title="Минимум 8 символов"
              onChange={onAdressChange}
              value={adress}
            />
            <div className="validation">Минимум 8 символов</div>
          </div>
          <div className="input-field">
            <label htmlFor="email">Адрес 2:</label>
            <input
              type="text"
              minLength={8}
              placeholder="kulnis7"
              //   required
              title="Минимум 8 символов"
              onChange={onAdress2Change}
              value={adress2}
            />
            <div className="validation">Минимум 8 символов</div>
          </div>
          <div className="input-field">
            <label htmlFor="email">Адрес 3:</label>
            <input
              type="text"
              minLength={8}
              placeholder="kulnis7"
              //   required
              title="Минимум 8 символов"
              onChange={onAdress3Change}
              value={adress3}
            />
            <div className="validation">Минимум 8 символов</div>
          </div>
        </div>
        <div className="section-content">
          <div className="input-field">
            <label htmlFor="email">Наставник 1:</label>
            <input
              type="text"
              minLength={8}
              placeholder="kulnis7"
              required
              title="Минимум 8 символов"
              onChange={onMentorChange}
              value={mentor}
            />
            <div className="validation">Минимум 8 символов</div>
          </div>
          <div className="input-field">
            <label htmlFor="email">Наставник 2:</label>
            <input
              type="text"
              minLength={8}
              placeholder="kulnis7"
              //   required
              title="Минимум 8 символов"
              onChange={onMentor2Change}
              value={mentor2}
            />
            <div className="validation">Минимум 8 символов</div>
          </div>
          <div className="input-field">
            <label htmlFor="email">Наставник 3:</label>
            <input
              type="text"
              minLength={8}
              placeholder="kulnis7"
              //   required
              title="Минимум 8 символов"
              onChange={onMentor3Change}
              value={mentor3}
            />
            <div className="validation">Минимум 8 символов</div>
          </div>
        </div>
        <div className="section-content">
          <div className="input-field">
            <label htmlFor="email">Прочее:</label>
            <input
              type="text"
              minLength={8}
              placeholder="Весело"
              required
              title="Минимум 8 символов"
              onChange={onDescriptionChange}
              value={description}
            />
            <div className="validation">Минимум 8 символов</div>
          </div>
        </div>
        <div className="section-button">
          <input className="clear-button" value="Очистить" onClick={clear} />
          <input type="submit" value="Сохранить" onClick={createSection} />
        </div>
      </form>
    </div>
  );
};

export default CreateSectionPage;
