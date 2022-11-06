const login = document.querySelector("#login");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const quoting = document.querySelector("#quote");
const setUserName = document.querySelector("#user-name");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function handleSubmit(event){
  event.preventDefault();

  const username = loginInput.value;

  localStorage.setItem(USERNAME_KEY, username);

  login.classList.add(HIDDEN_CLASSNAME);

  paintGreetings(username);
}

function paintGreetings(username){
  greeting.classList.remove(HIDDEN_CLASSNAME);
  quoting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}`;
  setUserName.innerText=`${username}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
  login.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit",handleSubmit);
} else {
  paintGreetings(savedUsername);
}