// 부모창에 입력한 이름을 가져와서 자식창의 input 태그에 넣기
// 새창을 열어준 부모창(메인창) 은 window.opener 이다
let parentName = window.opener.document.getElementById("name");

// 자식의 input 태그 가져오기
let childName = document.getElementById("childName");

childName.value = parentName.value;


// 자바스크립트 객체
let obj1 = {
    name: "이순신", age: 34, address: "서울시"
};
obj1.name = "이성계";

// 함수형 객체

function user (name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
}

let u = new user("장보고", 54, "완도");
let u1 = new user("장영실", 44, "한양");

// Object() 를 이용하여 객체 만들기
let u2 = new Object();

// class 문법으로 객체 만들기 (현대 방식)
class member {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

// prototype 을 이용한 객체생성
// obj1.prototype.job = "군인";

// 이름과 이메일, 이름 하나에 등록된 이메일이 1~n 개 있다 가정하고 만들기
const info = [
    // 객체 - name : "이순신", email : "lee@naver.com"
    //      name : "장영실", email : [ "jang@naver.com", "sil@gmail.com" ]
    { name : "이순신", email : "lee@naver.com" },
    { name : "장영실", email : [ "jang@naver.com", "sil@gmail.com" ] },
    { name : "정도전", email : "dojeon@gmail.com" },
    { name : "문익점", email : [ "moon@naver.com", "moon123@gmail.com", 
                                "point@naver.com", "moonpoint@gmail.com"]}
];

// 이름에 맞는 이메일 찾아서 화면에 출력하기

// 1. ul 태그 가져오기
let ul = document.querySelector(".email_list");
// 2. info 에서 이름 찾기
let person = info.find(u => u.name === parentName.value);

if ( !person ) { // 입력한 이름이 없는 경우
    ul.innerHTML = "<li class='emailText'> 일치하는 이름이 없습니다. </li>"
} else { // 입력한 이름이 존재하는 경우
    if (Array.isArray (person.email)) {
        for(email of person.email) {
            ul.innerHTML += `<li class="emailText">${email}</li>`;
        }
    }else {
        let li = document.createElement("li");
        li.classList.add("emailText");
        li.textContent = person.email;
        
        ul.appendChild(li);
    }
}




// 이메일을 클릭하면 부모창의 input 태그에 넣기

const list = document.querySelectorAll(".emailText");

//    1과 2는 같다.
// 1. list.forEach(text => {text.addEventListener('click', () => {})});
// 2. for (var text of list) {
//      a(text);
//    }
//    function a (text) {
//      text.addEventListener('click', function(){
//      });
//    }

list.forEach(text => {text.addEventListener('click', () => {
    let parentEmail = window.opener.document.getElementById("email");
    parentEmail.value = text.innerText;
    window.close();
})});