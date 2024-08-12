/*
문제 : 0~50 길이의 대소문자 알파벳으로 이루어진 문자열에서 'p'와 'y'의 갯수가 각각 같으면 true 아닐경우 false를 반환하는 문제입니다.

*/

/// 길이 만큼 랜덤한 문자열을 생성해줍니다.
function randomAlphabet(length){
    if(isNaN(length) || !isFinite(length)){
        console.log(`올바른 숫자가 아닙니다 : ${length}`);
        return "pPoooyY";
    }

    let s = "";
    const weightedChars = ['p', 'P', 'y', 'Y'];
    const weight = 0.3; // 이 값으로 가중치를 조절 (0.3이면 30% 확률로 'p', 'P', 'y', 'Y' 중 하나를 선택)

    for(let i = 0; i<length; i++){
        if (Math.random() < weight) {
            // 가중치를 가진 문자를 선택
            s += weightedChars[Math.floor(Math.random() * weightedChars.length)];
        } else {
            // 일반 알파벳을 선택
            let alphabet = Math.floor(Math.random() * (90 - 65 + 1)) + 65;
            if(Math.random() > 0.5){
                alphabet += 32; // 소문자로 변환
            }
            s += String.fromCharCode(alphabet);
        }
    }
    return s;
}


///p와 y의 개수를 비교하여 같은 개수인지 반환합니다.
function isPYCountEqual(alphabets){
    if(typeof alphabets !== 'string'){
        console.log("문자열이 아닙니다.");
        return false;
    }

    let pCount = 0;
    let yCount = 0;

    for(const alphabet of alphabets){
        if(alphabet === 'p'){
            pCount++;
        }else if(alphabet === 'y'){
            yCount++;
        }
        
    }

    return pCount === yCount;
}


let s = randomAlphabet(50);
console.log( `p와 y의 개수가 ${(isPYCountEqual(s) ? '같습니다.' : '다릅니다.')}\n${s}`);




