import React from "react";

//компонент создания выпадающего списка
const MySelect =  ({options, defaultValue, value, onChange}) => {
  
    return(
        <select 
            value = ""//ожидает из пропса
            onChange = {event => onChange(event.target.value)}//два разных onChange, onChange - select,и onChange - функция обратного вызова. Обьект события, на какую элемент списка нажали передается выше
        >
          
          <option disabled value=""> {defaultValue}</option>
          {options.map( option =>//вывод списка
            <option key = {option.value} value={option.value}>
                {option.name}
            </option>

          )}
         
        </select>
    );
}; 

export default MySelect; //экспортируем