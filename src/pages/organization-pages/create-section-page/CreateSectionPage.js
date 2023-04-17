import React, { useEffect } from "react";
import axios from "axios";

// import { getAuthHeaders } from "../../../service/api";
// import { useFieldState } from "../../../hooks/useFieldState";

import "./createSectionPage.scss";
import "../../../components/UI/valid-input.scss";

const CreateSectionPage = () => {
  return (
    <div className="section">
      <form className="form-create-section">
        <div className="section-content">
          <div className="input-field">
            <label htmlFor="">Название:</label>
            <input
              type="text"
              placeholder="Жмышенко"
              required
              title="Поле не должно быть пустым"
            />
            <div className="validation">Поле не должно быть пустым</div>
          </div>
          <div className="select-field">
            <label>Категория:</label>
            <select>
              <option>Спортивные</option>
              <option>Творческие</option>
              <option>Танцевальные</option>
            </select>
          </div>
          <div className="select-field">
            <label>Посещение:</label>
            <select>
              <option>Платно</option>
              <option>Бесплатно</option>
            </select>
          </div>
        </div>
        {/* <div className="section-content">
          <div className="select-field">
            <label>Возраст:</label>
            <select>
              <option>1-5</option>
              <option>6-10</option>
              <option>11-17</option>
            </select>
          </div>
        </div> */}
        <div className="section-content">
          <div className="time-work">Время работы:</div>
        </div>
        <div className="section-content">
          <div className="input-field">
            <label htmlFor="">Понедельник:</label>
            <input
              type="text"
              placeholder="Жмышенко"
              required
              title="Поле не должно быть пустым"
            />
            <div className="validation">Поле не должно быть пустым</div>
          </div>
          <div className="input-field">
            <label htmlFor="">Вторник:</label>
            <input
              type="text"
              placeholder="Жмышенко"
              required
              title="Поле не должно быть пустым"
            />
            <div className="validation">Поле не должно быть пустым</div>
          </div>
          <div className="input-field">
            <label htmlFor="">Среда:</label>
            <input
              type="text"
              placeholder="Жмышенко"
              required
              title="Поле не должно быть пустым"
            />
            <div className="validation">Поле не должно быть пустым</div>
          </div>
        </div>
        <div className="section-content">
          <div className="input-field">
            <label htmlFor="email">Четверг:</label>
            <input
              type="text"
              minLength={8}
              placeholder="kulnis7"
              required
              title="Минимум 8 символов"
            />
            <div className="validation">Минимум 8 символов</div>
          </div>
          <div className="input-field">
            <label htmlFor="email">Пятница:</label>
            <input
              type="text"
              minLength={8}
              placeholder="kulnis7"
              required
              title="Минимум 8 символов"
            />
            <div className="validation">Минимум 8 символов</div>
          </div>
          <div className="input-field">
            <label htmlFor="email">Суббота:</label>
            <input
              type="text"
              minLength={8}
              placeholder="kulnis7"
              required
              title="Минимум 8 символов"
            />
            <div className="validation">Минимум 8 символов</div>
          </div>
        </div>
        <div className="section-content">
          <div className="input-field">
            <label htmlFor="email">Воскресенье:</label>
            <input
              type="text"
              minLength={8}
              placeholder="kulnis7"
              required
              title="Минимум 8 символов"
            />
            <div className="validation">Минимум 8 символов</div>
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
            />
            <div className="validation">Минимум 8 символов</div>
          </div>
        </div>
        <div className="section-content">
          <div className="input-field">
            <label htmlFor="email">Прочее:</label>
            <input
              width={950}
              type="text"
              //   minLength={8}
              placeholder="Весело"
              //   required
              //   title="Минимум 8 символов"
            />
            <div className="validation">Минимум 8 символов</div>
          </div>
        </div>
        <div className="section-button">
          <input className="clear-button" value="Очистить" />
          <input type="submit" value="Сохранить" />
        </div>
      </form>
    </div>
  );
};

export default CreateSectionPage;
