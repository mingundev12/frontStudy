// modal.js


// 제목을 클릭하면 모달창을 띄우고 모달의 x를 클릭하면 모달이 닫힌다.
window.onload = function () {
    const title = document.querySelectorAll(".titleText");

    for (var text of title) {
        text.addEventListener("click", showModal);
    }

    let close = document.querySelector(".close");

    close.addEventListener("click", hideModal);
}

function showModal() {
    // 어떤 제목을 클릭했냐? 해당 제목의 글번호와 일치하는
    // 내용을 찾아서 모달안에 넣어줘야 한다.

    // 지금은 모달 display를 block으로 바꾸기만 할거
    let modal = document.querySelector("#modalWrap");
    // modal.style.display = "block";
    // modal.className = "";
    modal.classList.remove("hide");
}

function hideModal() {
    let modal = document.querySelector("#modalWrap");
    
    modal.classList.add("hide");
}