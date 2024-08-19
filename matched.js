//- 출력의 결과를 제출해주세요, 그리고 그 이유를 최대한 상세히 설명해주세요
//- **주의사항 : 브라우저에서 테스트해주세요(Chrome → 개발자 도구 → 콘솔에 입력하여 실행)**

var fullname = 'Ciryl Gane'

var fighter = {
    fullname: 'John Jones',
    opponent: {
        fullname: 'Francis Ngannou',
        getFullname: function () {
            return this.fullname;
        }
    },

    getName: function() {
        return this.fullname;
    },

    getFirstName: () => {
        return this.fullname.split(' ')[0];
    },

    getLastName: (function() {
        return this.fullname.split(' ')[1];
    })()

}

console.log('Not', fighter.opponent.getFullname(), 'VS', fighter.getName());
console.log('It is', fighter.getName(), 'VS', fighter.getFirstName(), fighter.getLastName);

/**
 출력
 Not Francis Ngannou VS John Jones
 It is John Jones VS Ciryl Gane

 이유
 전역으로 선언된 fullname은 fighter 내부의 전역 this에선 호출될리 없으니 첫 출력에선 순서대로 각 위치에 있는 이름들이 this가 속하게 됩니다.
  fighter.opponent.getFullname() -> opponent를 통해 진입했으니 일반적으로 this 는 opponent가 맞습니다.
  fighter.getName() -> opponent 및 최상단 fullname에 연관되어 있지 않습니다. 그러니 fighter.fullname이 출력되는게 맞습니다.
 fighter.getLastName -> 래핑되면서 호출 대상자를 찾기가 어려워 전역으로 전환됩니다. 따라서 최상단 전역에 있는 첫번째 fullname이 불리게 됩니다.
 
 */