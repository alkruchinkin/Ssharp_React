import React from "react";

//��������� �������� ����������� ������
const MySelect =  ({options, defaultValue, value, onChange}) => {
  
    return(
        <select 
            value = ""//������� �� ������
            onChange = {event => onChange(event.target.value)}//��� ������ onChange, onChange - select,� onChange - ������� ��������� ������. ������ �������, �� ����� ������� ������ ������ ���������� ����
        >
          
          <option disabled value=""> {defaultValue}</option>
          {options.map( option =>//����� ������
            <option key = {option.value} value={option.value}>
                {option.name}
            </option>

          )}
         
        </select>
    );
}; 

export default MySelect; //������������