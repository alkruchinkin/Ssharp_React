import React, { useState, useEffect } from 'react';
import './NavMenu.css';

//компонент 
const MyTasks = ({ children, onChange, id1,level1,click2, ...props }) => {

    
    const addNewPost22 = () => {
        //e.preventDefault()//чтобы браузер не обновлялся

        onChange(id1)
        

      }


      //style={{ width: 20+"px" }}
    return (
        <div>
            <div className="container">
                <div className="left-column">

                    {click2==id1
            ?                     <div className="task"   >
            <button style={{ "marginLeft": (level1*30)+"px","border": "4px solid teal"}} onClick={addNewPost22}>{children} </button>{/* кнопка уменьшения*/}
        </div>
            :                     <div className="task"   >
            <button style={{ "marginLeft": (level1*30)+"px"}} onClick={addNewPost22}>{children} </button>{/* кнопка уменьшения*/}
        </div>
          }
                </div>
            </div>
        </div>
    );
};

export default MyTasks; //экспортируем