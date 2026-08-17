// TypeScript 기본 타입 (Basic Types)
// 실행:  npm run study src/study/01-typescript/01-types.ts

// 1. 기본 타입 (string, number, boolean)
// 변수 이름 뒤에 ": 타입" 을 붙여 타입을 명시한다. (타입 표기, type annotation)
const username: string = 'sinyoung'
const age: number = 30
const isStudent: boolean = true

console.log('1. 기본 타입:', username, age, isStudent)

// 사실 대부분은 타입을 생략해도 된다.
// TypeScript가 값을 보고 타입을 추론(type inference)하기 때문이다.
const city = 'Seoul' // string 으로 자동 추론됨
console.log('   타입 추론:', city)


// 2. 배열 (Array)
// "타입[]" 형태로 "어떤 타입의 배열인지" 를 명시한다.
const scores: number[] = [90, 85, 100]
const fruits: string[] = ['apple', 'banana']

console.log('2. 배열:', scores, fruits)


// 3. 튜플 (Tuple) — 길이와 각 자리의 타입이 정해진 배열
// 예: [이름, 나이] 처럼 순서와 타입이 고정된 경우
const person: [string, number] = ['youd', 30]
console.log('3. 튜플:', person[0], person[1])


// 4. 유니온 타입 (Union) — "A 또는 B"
// | 기호로 여러 타입 중 하나를 허용한다.
let id: string | number
id = 'abc123'
console.log('4. 유니온(문자열):', id)
id = 42
console.log('   유니온(숫자):', id)


// 5. any 와 unknown
// any: 어떤 타입이든 허용 → 타입 검사를 사실상 꺼버린다. 되도록 쓰지 말 것.
const anything: any = '아무거나'

// unknown: any 처럼 무엇이든 담을 수 있지만, 쓰기 전에 타입을 확인해야 한다.
// any 보다 안전하므로 "타입을 모를 때"는 unknown 을 권장한다.
const value: unknown = '문자열일 수도 있음'
if (typeof value === 'string') {
  // 이 블록 안에서는 value 가 string 임이 보장된다.
  console.log('5. unknown → 확인 후 사용:', value.toUpperCase())
}
console.log('   any:', anything)


// 6. 리터럴 타입 (Literal) — 특정 값만 허용
// "빨강/초록/파랑 중 하나" 처럼 값 자체를 타입으로 제한할 수 있다.
let trafficLight: 'red' | 'yellow' | 'green'
trafficLight = 'red'
console.log('6. 리터럴:', trafficLight)
// trafficLight = 'blue' // ← 이건 에러! 허용된 값이 아님
