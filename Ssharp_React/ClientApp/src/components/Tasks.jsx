import React, { useState, useEffect, useMemo } from 'react';
import './NavMenu.css';
import MyTasks from './MyTasks';
import MySelect from './MySelect';
import axios from 'axios'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//компонент 
function Tasks() {
    const [selectedDate, setSelectedDate] = useState(0);//дата завершения
    //Верхний уровень компанента
    const [likes, setlikes] = useState(5)//хук выполняется при каждом редеренге(заполнении каждой буквы в импут)
    const [value, setvalue] = useState('текст в инпуте')
    const [click1, setclick1] = useState(-1)
    //получен с сервера
    const [posts1, setPosts1] = useState([
        { id: 1, title: true, dep: 0, a1: "Задача 1", lavel: 1, open1: false, name1: "1/", opees: "2", listisp: "3", date1: 4, status1: 5, trudemk: 6, ob_trudemk: 6, factdate: 7, ob_factdate: 7, datefinish: 8 },
        { id: 2, title: false, dep: 0, a1: "Задача 2", lavel: 1, open1: false, name1: "2/", opees: "2", listisp: "3", date1: 4, status1: 5, trudemk: 6, ob_trudemk: 6, factdate: 7, ob_factdate: 7, datefinish: 8 },
        { id: 3, title: true, dep: 0, a1: "Задача 3", lavel: 1, open1: false, name1: "3/", opees: "2", listisp: "3", date1: 4, status1: 5, trudemk: 6, ob_trudemk: 6, factdate: 7, ob_factdate: 7, datefinish: 8 },
        { id: 4, title: true, dep: 0, a1: "Задача 4", lavel: 1, open1: false, name1: "4/", opees: "2", listisp: "3", date1: 4, status1: 5, trudemk: 6, ob_trudemk: 6, factdate: 7, ob_factdate: 7, datefinish: 8 },
        { id: 5, title: true, dep: 0, a1: "Задача 5", lavel: 1, open1: false, name1: "5/", opees: "2", listisp: "3", date1: 4, status1: 5, trudemk: 6, ob_trudemk: 6, factdate: 7, ob_factdate: 7, datefinish: 8 },
        { id: 6, title: true, dep: 1, a1: " Позадача 1", lavel: 2, open1: false, name1: "6", opees: "2", listisp: "3", date1: 4, status1: 5, trudemk: 6, ob_trudemk: 6, factdate: 7, ob_factdate: 7, datefinish: 8 },
        { id: 7, title: false, dep: 1, a1: "Позадача 2", lavel: 2, open1: false, name1: "7", opees: "2", listisp: "3", date1: 4, status1: 5, trudemk: 6, ob_trudemk: 6, factdate: 7, ob_factdate: 7, datefinish: 8 },
        { id: 8, title: true, dep: 1, a1: "Позадача 3", lavel: 2, open1: false, name1: "8", opees: "2", listisp: "3", date1: 4, status1: 5, trudemk: 6, ob_trudemk: 6, factdate: 7, ob_factdate: 7, datefinish: 8 },
        { id: 9, title: true, dep: 2, a1: "Позадача 4", lavel: 2, open1: false, name1: "9", opees: "2", listisp: "3", date1: 4, status1: 5, trudemk: 6, ob_trudemk: 6, factdate: 7, ob_factdate: 7, datefinish: 8 },
        { id: 10, title: true, dep: 3, a1: "Позадача 5", lavel: 2, open1: false, name1: "10", opees: "2", listisp: "3", date1: 4, status1: 5, trudemk: 6, ob_trudemk: 6, factdate: 7, ob_factdate: 7, datefinish: 8 },
        { id: 11, title: true, dep: 8, a1: "Под_Позадача 3", lavel: 3, open1: false, name1: "11", opees: "2", listisp: "3", date1: 4, status1: 5, trudemk: 6, ob_trudemk: 6, factdate: 7, ob_factdate: 7, datefinish: 8 },
        { id: 12, title: true, dep: 8, a1: "Под_Позадача 4", lavel: 3, open1: false, name1: "12", opees: "2", listisp: "3", date1: 4, status1: 5, trudemk: 6, ob_trudemk: 6, factdate: 7, ob_factdate: 7, datefinish: 8 },
        { id: 13, title: true, dep: 8, a1: "Под_Позадача 5", lavel: 3, open1: false, name1: "13", opees: "2", listisp: "3", date1: 4, status1: 5, trudemk: 6, ob_trudemk: 6, factdate: 7, ob_factdate: 7, datefinish: 8 },
    ])
    //выводится на экран
    const [Tasks_view, set_Tasks_view] = useState([])

    const [MySelect2, setMySelect2] = useState([
        {value: 0, name: 'Назначена'},
    { value: 1, name:  'Выполняется'},
    { value: 2, name: 'Приостановлена' },
    { value: 3, name:  'Завершена'}
])
const [MySelect3, setMySelect3] = useState([{value: 0, name: 'Приостановлена'}])


    //подзадачи которые будут выводится при нажатии

    const [id, setid] = useState(1)
    const [name1, setname1] = useState("")
    const [opees, setopees] = useState("")
    const [listisp, setlistisp] = useState("")
    const [date1, setdate1] = useState(Date())
    const [status1, setstatus1] = useState(0)
    const [trudemk, settrudemk] = useState(0)
    const [o_trudemk, set_o_trudemk] = useState(0)
    const [factdate, setfactdate] = useState(1)
    const [o_factdate, set_o_factdate] = useState(0)
    const [datefinish, setdatefinish] = useState(0)
    const [pod_z, setpod_z] = useState(false)
    const [defaultValue2, setdefaultValue2] = useState("")//поверхностная запись

    //для сортировки 
    const [selectedSort, setSelectedSort] = useState('')

    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        /*let arr1 = [];
        for (let i = 0; i < posts1.length; i++) {
            if (posts1[i].dep == 0) {
                arr1.push(posts1[i]);
            }
        }
        set_Tasks_view(arr1)*/
        btn5()

    }, [])//ожидает изменение

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setdatefinish(date);
    };
    //видимость 
    const increment2 = (a3) => {
        const a2 = a3;
        if (a3 != - 1) {

            let arr = [...Tasks_view];
            let a3 = arr[a2].id;
            let arr1 = [];
            let a5 = Number(Tasks_view[a2].trudemk)
            let a6 = Number(Tasks_view[a2].factdate)
            let a7 = 0;
            let a8=0

            //Перебор полученного с сервера обьектов и формирование подзадач
            for (let i = 0; i < posts1.length; i++) {
                if (posts1[i].dep == a3) {
                    arr1.push(posts1[i]);

                    a5 = a5 + Number(posts1[i].ob_trudemk)
                    a6 = a6 + Number(posts1[i].ob_factdate)
                    if (posts1[i].status1 < 3) {
                        a7=1;//есть незаконченная задача
                        if(Tasks_view[a2].status1==0){a8=a8+1}
                        if(Tasks_view[a2].status1==2){a8=a8-3}
                        //  a8=-1
                    }
                }
            }
            
            if(Tasks_view[a2].status1==0){a8=a8+1}
            if(Tasks_view[a2].status1==1){a8=a8+2}
            if(Tasks_view[a2].status1==2){a8=a8+4}
            var millionPlusCities2 = MySelect2.filter(e => e.value <= Tasks_view[a2].status1+a8-a7)


            setMySelect3(millionPlusCities2)
            setdefaultValue2(millionPlusCities2[Tasks_view[a2].status1].name)

            set_o_trudemk(a5)
            set_o_factdate(a6)

            //если задача не имееет подзадачи то не происходит открытие или закрытие задач
            if (arr1.length > 0) {
                //let a4=arr1.length
                setpod_z(true)//открытие общей трудоемкости 

                let a4 = 0
                //количество дальнейшиго скрития задач 
                for (let i = a2 + 1; i < Tasks_view.length; i++) {
                    if (Tasks_view[i].lavel <= arr[a2].lavel) {
                        break
                    }
                    else {
                        a4 = a4 + 1
                        arr[i].open1 = false
                    }
                }
                //закрытие 
                if (Tasks_view[a2].open1) {//если у задачи выведены подзадачи 
                    arr[a2].open1 = false
                    arr.splice(a2 + 1, a4)
                    set_Tasks_view(arr)
                }
                //открытие
                else {//не открыта
                    arr[a2].open1 = true
                    arr.splice(a2 + 1, 0, ...arr1)
                    set_Tasks_view(arr)
                }
            }
            else { setpod_z(false) }
        }
    }//ожидает изменение

    //инициализируем функцию обратного вызова
    const sortPosts = (sort) => {
        setSelectedSort(sort);// изменяет selectedSort
        setstatus1(Number(sort))
        setdefaultValue2(MySelect2[Number(sort)].name)


    }
    async function btn5() {

        const response = await fetch('datatasks');//асинхронный HTTP-запрос к серверу с использованием функции fetch.
        const data = await response.json();
        setPosts1(data)
        var millionPlusCities = data.filter(e => e.lavel == 1);
        set_Tasks_view(millionPlusCities)
        const a2 = 0//позиция в таблице 
        

        setid(millionPlusCities[a2].id)
        setname1(millionPlusCities[a2].name1)
        setopees(millionPlusCities[a2].opees)
        setlistisp(millionPlusCities[a2].listisp)
        setdate1(millionPlusCities[a2].date1)
        setstatus1(millionPlusCities[a2].status1)
        settrudemk(millionPlusCities[a2].trudemk)
        setfactdate(millionPlusCities[a2].factdate)
        setdatefinish(millionPlusCities[a2].datefinish)


    }

    if (Tasks_view.length < 1) {
        return (
            <h1 style={{ textAlign: 'center' }}>
                Посты не найдины!!!!!!!!</h1>
        )
    }
    let a1 = 1

    //Функции клика
    const increment = (id2) => {
        const a2 = Tasks_view.findIndex(Tasks_view => Tasks_view.id == id2)//позиция в таблице 
        setclick1(a2)

        setid(Tasks_view[a2].id)
        setname1(Tasks_view[a2].name1)
        setopees(Tasks_view[a2].opees)
        setlistisp(Tasks_view[a2].listisp)
        setdate1(Tasks_view[a2].date1)
        setstatus1(Tasks_view[a2].status1)
        settrudemk(Tasks_view[a2].trudemk)
        setfactdate(Tasks_view[a2].factdate)
        setdatefinish(Tasks_view[a2].datefinish)
        increment2(a2);//выполняется снячало это потом рендер 


    }

    //Функции вычитания
    const btn1 = () => {
        setname1("")
        setopees("")
        setlistisp("")
        setdate1(2)
        setstatus1(0)
        settrudemk(0)
        setfactdate(1)
        setdatefinish(3)

    }
    
    //новая главная задача 
    const btn6 = () => {
        
        let arr = [...Tasks_view];
        let id3 = 0
        for (let i = 0; i < posts1.length; i++) {
            if (id3 < posts1[i].id) { id3 = posts1[i].id }

        }
        let arr1 = { name1, opees, listisp, date1, status1:0, trudemk:Number(trudemk), factdate:Number(factdate), datefinish, ob_trudemk: Number(trudemk), ob_factdate: Number(factdate), id: id3 + 1, title: true, dep: 0, a1: "Под_Позадача 5", lavel:  1, open1: false }
        //let arr1 = { name1 : "1", opees:"1", listisp:1, date1:1, status1:1, trudemk, factdate, datefinish, ob_trudemk: Number(trudemk), ob_factdate: Number(factdate), id: id3 + 1, title: true, dep: 0, a1: "Под_Позадача 5", lavel:  1, open1: false }

        arr.splice(0, 0, arr1)
        setPosts1([...posts1, arr1])



        // URL, на который будет отправлен запрос
        const url = 'datatasks';
        // Данные, которые вы хотите отправить

        const postData = arr1;
        // Опции для запроса (метод, заголовки, тело запроса и т.д.)
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        };
        // Отправка POST-запроса
        fetch(url, options)
            .then(response => console.log(response.ok))
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error))
            ;
        arr[click1 + 1].date1 = Date()
        set_Tasks_view(arr)
    }
    //добавить подзадачу
    const btn2 = () => {
        let arr = [...Tasks_view];
        arr[click1].open1 = true
        let id3 = 0
        //поиск нового id
        for (let i = 0; i < posts1.length; i++) {
            if (id3 < posts1[i].id) { id3 = posts1[i].id }

        }


        let arr1 = { name1, opees, listisp, status1:0, trudemk:Number(trudemk), factdate, datefinish, ob_trudemk: Number(trudemk), ob_factdate: Number(factdate), id: id3 + 1, title: true, dep: arr[click1].id, a1: "Под_Позадача 5", lavel: arr[click1].lavel + 1, open1: false }
        arr.splice(click1 + 1, 0, arr1)
        setPosts1([...posts1, arr1])



        // URL, на который будет отправлен запрос
        const url = 'datatasks';
        // Данные, которые вы хотите отправить

        const postData = arr1;
        // Опции для запроса (метод, заголовки, тело запроса и т.д.)
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        };
        // Отправка POST-запроса
        fetch(url, options)
            .then(response => console.log(response.ok))
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error))
            ;
        arr[click1 + 1].date1 = Date()
        set_Tasks_view(arr)

    }

    //Удалить 
    async function btn3() {
        const arr = [...Tasks_view];
        const arr1 = [...posts1];
        let a3 = arr[click1].id//id выбронного 
        let m = []//количество выведенных подзадач + задача
        let m2 = []//количество подзадач + задача
        //arr.splice(click1 , 1)
        //поиск подзадач видимых
        for (let i = 0; i < Tasks_view.length; i++) {
            if (Tasks_view[i].id == a3 || Tasks_view[i].dep == a3) {
                m.push(i);//позиция в таблице 
            }
        }
        //поиск подзадач
        for (let i = 0; i < posts1.length; i++) {
            if (posts1[i].id == a3 || posts1[i].dep == a3) {
                m2.push(i);//позиция в таблице 
            }
        }
        if (m2.length < 2 && m.length < 2) {
            for (var i = m.length - 1; i >= 0; i--) {
                arr.splice(m[i], 1);
            }
            set_Tasks_view(arr)

            //Удалена, может быть только терминальная задача
            for (var i = m2.length - 1; i >= 0; i--) {



                // URL, на который будет отправлен запрос
                const id2 = arr1[m2[i]].id;
                const url = 'datatasks/' + id2;

                // Данные, которые вы хотите отправить
                //const postData =  { id: 1, title: false, dep: 0, a1: "Задача 4", lavel: 1, open1: false, name1: "1/", opees: "2", listisp: "3", date1: 4, status1: 5, trudemk: 6, factdate: 7, datefinish: 8 };

                // Опции для запроса (метод, заголовки, тело запроса и т.д.)
                const options = {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }

                };
                // Отправка POST-запроса
                fetch(url, options)
                    .then(response => console.log(response.ok))
                    .then(data => console.log(data))
                    .catch(error => console.error('Error:', error))
                    ;
                arr1.splice(m2[i], 1);
            }

            setPosts1(arr1)
        }


    }

    //сохранить 
    //async function btn4() {
        const btn4 = (e) => {
            e.preventDefault()
        let arr = [...Tasks_view];

        let arr1 = [...posts1];
        let a3 = arr[click1].id;
        let a4 = posts1.findIndex(posts1 => posts1.id == a3);//позиция в таблице 
        

        let a5 = Number(trudemk);
        let a6 = Number(factdate);
        let a8 = 0;

        for (let i = 0; i < posts1.length; i++) {
            if (posts1[i].dep == a3) {//поиск подзадачи
                a5 = a5 + Number(posts1[i].ob_trudemk);
                a6 = a6 + Number(posts1[i].ob_factdate);

            }

        }

        set_o_trudemk(a5);
        set_o_factdate(a6);

        let op2=Tasks_view[click1].open1;

        let  arr5 = [];
    
        if (pod_z) {
            arr5 = { name1, opees, listisp, date1, status1, trudemk, factdate, datefinish, ob_trudemk: a5, ob_factdate: a6, id: a3, title: true, dep: arr[click1].dep, a1: arr[click1].a1, open1: op2, lavel: arr[click1].lavel };
            
        } else {
            arr5 = {name1, opees, listisp, date1, status1, trudemk, factdate, datefinish, ob_trudemk: Number(trudemk), ob_factdate: Number(factdate), id: a3, title: true, dep: arr[click1].dep, a1: arr[click1].a1, open1: op2, lavel: arr[click1].lavel };

        };

        arr[click1] = arr5;
            set_Tasks_view(arr);
        const  arr7 = arr5;

        arr[click1] = arr7;
        //set_Tasks_view(arr);

        
        const arr6=arr5;
        //
        arr1[a4] = arr6;
        //arr1[a4].open1 = false;

        
        setPosts1(arr1);
        // URL, на который будет отправлен запрос
        const url = 'datatasks';

        // Данные, которые вы хотите отправить
        const postData = arr7;

        // Опции для запроса (метод, заголовки, тело запроса и т.д.)
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        };

        // Отправка POST-запроса
        fetch(url, options)
            .then(response => console.log(response.ok))
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error))
            ;
        
            if(status1==0){a8=a8+1}
            if(status1==1){a8=a8+2}
            if(status1==2){a8=a8+1}
            let millionPlusCities2 = MySelect2.filter(e => e.value <= status1+a8);
            setMySelect3(millionPlusCities2);//список
            setdefaultValue2(millionPlusCities2[status1].name);//поверхностная запись



    }
    return (
        

            <div className="container">
                <div className="left-column">

                    <div className="task">
                        <h1>Задачи:</h1>
                        <button onClick={btn6}>Навая задача</button>
                        <h1> </h1>



                        {Tasks_view.map((post) =>
                            <MyTasks onChange={increment} id1={post.id} level1={post.lavel} key={post.id} click2={id} >{post.name1}</MyTasks>
                        )}
                    

                    </div>
                </div>
                <div className="right-column">

                    <div className="attributes">
                        <h2>Атрибуты задачи</h2>

                        
                        <button onClick={btn1}>Очистить форму</button>
                        <button onClick={btn2}>Добавить подзадачу</button>
                        <button onClick={btn3}>Удалить</button>
                        <button onClick={btn4}>Сохранить </button>
                        <button onClick={btn5}>Закрыть все</button>
                        <li>Наименование задачи</li>
                        <input type="text" value={name1} onChange={a_2 => setname1(a_2.target.value)} />
                        <li>Описание задачи</li>
                        <input type="text" value={opees} onChange={a_2 => setopees(a_2.target.value)} />
                        <li>Список исполнителей </li>
                        <input type="text" value={listisp} onChange={a_2 => setlistisp(a_2.target.value)} />
                        <li>Дата регистрации задачи в системе</li>
                        <input type="text" value={date1} onChange={a_2 => setdate1(a_2.target.value)} />
                        <li>Статус задачи</li>
                        <MySelect
                            value={selectedSort}//передает в MySelect
                            onChange={sortPosts}//ожидает обьет события от MySelect, sortPosts- функция обратного вызова
                            defaultValue={defaultValue2}//передает в MySelect
                            options={MySelect3}
                        />

                        <li>Плановая трудоёмкость задачи</li>
                        <input type="text" value={trudemk} onChange={a_2 => settrudemk(a_2.target.value)} />
                        {pod_z
                            ? <li>Общая плановая трудоёмкость задачи: {o_trudemk}</li>
                            : <div></div>
                        }
                        <li>Фактическое время выполнения</li>
                        <input type="text" value={factdate} onChange={a_2 => setfactdate(a_2.target.value)} />
                        {pod_z
                            ? <li>Общее время выполнение: {o_factdate}</li>
                            : <div></div>
                        }
                        <li>Дата завершения</li>
                        <div>
                            <DatePicker
                                selected={selectedDate}
                                showIcon
                                onChange={handleDateChange}
                                value = {datefinish}
                                dateFormat="dd/MM/yyyy" // Формат даты
                            />
                        </div>
                        

                    </div>
                </div>
            </div>
       
    );
};

export default Tasks; //экспортируем