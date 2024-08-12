/** 문제:  1 ~ 1000 값을 무작위로 포함하고 있는 배열 absolutes와 같은 길이의 랜덤한 bool값을 가진 signs가 있을때 signs[i]가 true면 더하고 false면 빼서 결과 값이 나오도록 하세요.*/

/** 해당 길이의 문제를 생성합니다. */
function inputs(length){
    let absolutes = new Array(length);
    let signs = new Array(length);

    for(let i = 0; i < length ; i++){
        absolutes[i] = Math.floor(Math.random() * (1000 ) + 1 );
        signs[i] = Math.random() > 0.5;
    }

    return {absolutes, signs};
}

/** 주어진 문제를 토대로 출력합니다. */
function output(inputs){
    let result_string = "";
    let result = 0;
    for(let i in inputs.signs){
        const abs = inputs.absolutes[i];
        const sign = inputs.signs[i];
        result_string += `${(sign ? '+' : '-' )}${abs}`
        result += (sign ? 1 : -1 ) * abs;
    }
    result_string +=`=\n${result}`;
    console.log(`${result_string}`);
}

output(inputs(10));