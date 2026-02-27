# frontStudy

 ** git config --global user.email "you@example.com"
 ** git config --global user.name "Your Name"





 ## 화면에서 입력한 값을 DB에 저장하기까지 과정

     1. 어떤 데이터들을 저장할 것인지 테이블부터 만들기
     2. 테이블 (컬럼 명) 과 같은 클래스 (필드 변수) 만들기 (@Getter, @Setter)
     3. 화면 만들기 (html)
     4. controller 작업하기 (@GetMapping 을 통해 주소요청 들어오면 제공)
     5. 주소요청 했을 때 html 페이지 잘 보이는지 확인
     6. 확인했으면 다시 controller 가서 주소요청 페이지 제공 메서드에
        매개변수로 Model 만들고, model 에 setAttribute로 클래스(DTO) 객체 넣어주기
     7. html에 가서 DTO 객체 form 에 적용하기 (th:object="객체이름", th:field="필드변수 이름")
     8. form 태그의 action 에 붙어있는 주소 요청 받아주는 메서드를 controller 에 만들기
     9. 8번에서 만든 메서드의 의 매개변수는 DTO객체 받을 수 있는 매개변수
     10. 인터페이스 만들어서 @Mapper 붙여주고 저장 메서드 만들어주기
     11. 10번에서 만든 메서드를 8번에서 만든 메서드 안에서 실행시키기
     12. 실제 SQL 실행하는 xml 파일 만들기
     13. xml 파일에 10번의 인터페이스를 연결하고 메서드 사용하여 SQL문 작성하기
