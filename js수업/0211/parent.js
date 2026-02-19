let search = document.getElementById("search");

search.addEventListener('click', function() {
/*
    새 창 옵션
    width, height
    위치 : top, left
    창 크기 조절 가능 : resizable = yes / no
    스크롤바 표시 : scrollbars = yes / no
    툴바 표시 : toolbar = yes / no
    주소창 표시 : location = yes / no
*/

    if(document.querySelector("#name").value == '') {
        alert("이름을 입력해주세요!");
        return;
    }
    window.open("child.html","_blank", "width=500,height=700,top=100,left=400,toolbar=yes");
    
});