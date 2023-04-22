import React, { useRef} from 'react'
import s from '../FormHome/style.module.css'
import gnom from '../FormHome/gnom.png'

export default function FormHome() {

async function postData(url = 'http://localhost:3333/order/send', data = {}) {
  const response = await fetch(url, {
    method: "POST", 
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), 
  });
  return response.json(); 
}

postData('http://localhost:3333/order/send', { answer: 42 }).then((data) => {
  console.log(data); 
});
const nav_links = useRef();
  return (
    <div className={s.container} ref={nav_links}>

      <div className={s.title}>
        <p>5% off on the first order</p>
        </div>

        <div className={s.image}>
        <img src={gnom} alt="gnom" />
        </div>
        
        <div className={s.form}>
          <input onClick={postData}  type="text" name='phone' placeholder='+49' />
          <button onClick={postData}  >Get a discount</button>
        </div>
        

    </div>
  )
}

/*
function addPost (title, body, userId){
  fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({title, body, userId}),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then(post => {
        posts.push(post);
      rerender();
      });
}
function rerender(){
root.innerText = '';
posts.forEach(({id, title, body}) => creadCard(id, title,body));
}
*/

  /*
    fetch('http://localhost:3333/order/send')
      .then(resp => resp.json())
      .then(data => {
        posts = data;
      rerender();
      })
  }
  
  function delete_post(id){
    posts = posts.filter((post) => post.id !== id);
    rerender();
  }
  
  FormHome();
  rerender();
*/
// <input  type="text" value={this.state.value} onChange={orderChange} 
// name='phone' placeholder='+49' />


/*
// сщздать ф-цию, которая загружает все посты, добавляем их в массив posts и отрисовывает их вызовом rerender
function load_posts(){
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(resp => resp.json())
    .then(data => {
      posts = data;
    rerender();
    })
}

function delete_post(id){
  posts = posts.filter((post) => post.id !== id);
  rerender();
}

load_posts();
rerender();
*/

/*

// сщздать функцию getUsers, которая не принимает арументов и отрисовывает 6 пользователей, полученных по ссылке 'https://regres.in/api/users?page=2'

function getUsers(pageId = 1){
    root.innerText = '';
    fetch(`https://reqres.in/api/users?page=${pageId}`)
    .then(resp => resp.json())
    .then(({data}) => {
        data.forEach(({first_name, email, avatar}) => 
        creadCard(first_name, email, avatar));
})
}
getUsers(2);
*/

/*
// создать функцию которая в качестве аргумента получает title, userId, body и отправляет post запрос с добавлением данных на сервер. ответ сервера  необходимо вывести в консоль

function addPost (title, body, userId){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({title, body, userId}),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then(post => {
          posts.push(post);
        rerender();
        });
}

function rerender(){
  root.innerText = '';
  posts.forEach(({id, title, body}) => creadCard(id, title,body));
}
*/