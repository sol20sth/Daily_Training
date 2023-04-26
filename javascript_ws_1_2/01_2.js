words = ['level', 'noon', 'mom', 'happy', 'ssafy', 'life']

function palindrome(word) {
  let a = true
  for (let i = 0; i < word.length; i++) {
      if (word[i] !== word[word.length - 1-i]){
          a = false
      }
  }
  console.log(a)
}

for (const word of words) {
  console.log(palindrome(word))
}


// 출력 예시
// true
// true
// true
// false
// false
// false
