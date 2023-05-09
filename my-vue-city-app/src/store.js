// 뷰엑스 스토어 - 전역 뷰데이터 저장소
import Vue from 'vue'
import Vuex from 'vuex'
import 'babel-polyfill'
import {myD0, myD1, myD2} from './jsData/cityData.js'

// Vuex 라이브러리를 Vue 프레임워크에서 사용하려면?
// Vue.use(Vuex) -> 뷰에서 뷰엑스 사용등록 필수
Vue.use(Vuex)
/******************************************************************************
    [ SPA 개발 환경에서 store를 내보낸 후 사용시 주의사항 ]
    -> vue 확장자 파일에서 이를 사용 시 일반변수와 같이 store라고 호출하면 에러 발생
    이유 : 일반 JS파일이 아니기 때문에
    this.$store라고 호출해야함
    this는 뷰인스턴스 객체 자신
    $store는 전역 뷰엑스 스토어에 등록된 변수를 말함
******************************************************************************/

// 뷰엑스 스토어를 활용한 변수 세팅
// 1. 뷰엑스 스토어 인스턴스 생성
export default new Vuex.Store({
    // (1) 데이터 세팅구역
    state : {
        // 도시 데이터 셋업
        // 스프레드 연산자로 두개의 객체를 합친다
        // {...객체1, ...객체2, ...객체3}
        cityData: {...myD0, ...myD1},
        // 변경되는 데이터는 state구역에 외부변수를 할당하여
        // 변경시 가상돔에 반영하여 실제돔으로 연결되도록 등록해줌
        // 이름은 같은 이름을 사용해도됨(구분되기 때문에)
        myD0 : myD0,
        myD1 : myD1,
        myD2 : myD2,
        // 이미지 정보 셋업 변수
        imgsrc : "",
        // 도시 설명정보 셋업 변수
        desc : "",
    }, /// state 구역
    // (2) 데이터 변경 메서드 구역 : 호출시 commit 사용
    mutations : {
        // 초기데이터 셋업 메서드
        initSet(헐){
            // 단일 데이터일 경우
            // state.imgsrc = param
            // 데이터가 여러개일 경우(파라미터가 객체일 경우)
            // 이미지 셋업
            헐.imgsrc = 헐.cityData.인트로.이미지;
            // 설명데이터 셋업
            헐.desc = 헐.cityData.인트로.설명;
        }, /// initSet
        // 데이터 변경 메서드 
        chgData(헐, 슉){
            // 이자리에서 바로 스토어 변수 업데이트
            // 1. 이미지 변수 : imgsrc
           헐.imgsrc =헐.cityData[슉].이미지
            // 2. 도시 설명 변수 : desc
           헐.desc =헐.cityData[슉].설명
        }, // chgData
        // 메뉴 데이터 변경 메서드
        chgMenu(헐, 슉){// 헐 - state 변수, 슉 - 전달변수
            헐.cityData = 슉===1?{...헐.myD0, ...헐.myD1}:{...헐.myD0, ...헐.myD2};
            // console.log(슉, 헐.myD1)
            // 메뉴 변경시 인트로 화면으로 변경하기
            헐.imgsrc = 헐.cityData.인트로.이미지;
            헐.desc = 헐.cityData.인트로.설명;

        }, // chgMenu
    },
    // (3) 백엔드 관련 코딩 비동기처리 메서드 구역 : 호출시 dispatch 사용
    actions : {
        myAct(헝, 벙){
            console.log("나의 액션", 헝, 벙)
        }
    }
}) ///// 뷰엑스 인스턴스 /////// 

// export default store;