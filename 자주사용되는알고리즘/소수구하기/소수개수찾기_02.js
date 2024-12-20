/**
 * 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
(1은 소수가 아닙니다.)

n은 2이상 1000000이하의 자연수입니다

1부터 10 사이의 소수는 [2,3,5,7] 4개가 존재하므로 4를 반환
 */
function solution(n) {
  const arr = Array(n + 1).fill(true);
  arr[0] = arr[1] = false;

  for (let i = 2; i ** 2 <= n; i++) {
    if (arr[i]) {
      for (let j = i ** 2; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }


  console.log('arr', arr);
}

a = solution(10);

console.log('a', a);