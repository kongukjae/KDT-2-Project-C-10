

// let allElements = document.body.getElementsByTagName("*");


// // 모든 요소에 스타일을 적용
// for (let i = 0; i < allElements.length; i++) {
//   allElements[i].style.margin = 0;
//   allElements[i].style.padding = 0;
//   allElements[i].style.boxSizing = "border-box";
// }

export class Allstyling {

  static Size = {

    inherit: "inherit",
    percent100: "100%",
    percent90: "90%",
    vw100: "100vw",
    vh100: "100vh",

  };

  static display = {

    flex: "flex",

  };

  static position = {
    relative: "relative",
    sticky: "sticky",
    fixed: "fixed",
  };

static align = {

  

}


  //root 스타일
  static rootStyle = {
    width: "100vw",
    maxWidth: "100vw",
    height: "100vh",
    maxHeight: "100vh",
  }

  //header 스타일
  static headerStyle = {
    width: "inherit",
    height: "10vh",
    backgroundColor: "#55b0aa",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    flexDirection: "row",

    position: "sticky",
    top: 0,
  }

  //#root>header>ul
  static categoryStyle = {

    width: "inherit",
    height: "100%",

    /* flex */
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    textAlign: "center",
  }

  //#root>header>ul>li 
  static categoryTextStyle = {
    border: "1px solid #fff",
    padding: "20px",
    width: "inherit",
    height: "inherit",

  }

  //#root>header>div
  static editBtnStyle = {

    width: "inherit",
    height: "100%",

    position: "relative",
    top: "0px",

    /* flex */
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",

  }

  //#root>header>div>ul 
  static editBtnStyleContainer = {
    width: "50%",
    height: "100%",

    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  }

  //#root>header>div>ul>li 
  static editBtnStyleContainerText = {
    width: "20%",
    height: "40%",
    backgroundColor: "#FF9C9C"

  }

  //메인 부분
  //#root>main 
  static mainStyle = {

    width: "inherit",
    height: "90vh",
    backgroundColor: "#ccc",
    /* flex */
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }


  // #root>main>article
  static articleStyle = {

    width: "inherit",
    height: "inherit",
    /* flex */
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: "70px",

  }

  //약 이름
  // #root>main>article>h1 
  static articleH1Style = {

    fontSize: "1rem",

  }

  //약 정보 컨테이너
  //#root>main>article>div 
  static articleChildStyle = {
    width: "90%",
    height: "50%",
    backgroundColor: "#007088",
    /* flex */
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid black",
    position: "relative",
  }


  //상단 약명, 정보, 화살표
  //#root>main>article>div>div:nth-child(1) 
  static pillSectorStyle = {

    width: "100%",
    height: "80%",
    /* flex */
    display: "flex",
    /* flex-direction: column; */
    justifyContent: "space-around",
    alignItems: "center",

  }

  // #root>main>article>div>div:nth-child(1)>div 
  //약명(타이레놀) 박스
  static pillNameSectorStyle = {

    width: "100%",
    height: "100%",
    padding: "10px",

    border: "1px solid red",
  }


}


