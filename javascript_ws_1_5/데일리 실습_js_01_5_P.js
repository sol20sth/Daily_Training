const participantNums =  [[1, 3, 2, 2, 1], 
[3, 7, 100, 21, 13, 6, 5, 7, 5, 6, 3, 13, 21],
[9, 1, 8, 7, 71, 33, 62, 35, 11, 4, 7, 71, 33, 8, 9, 1, 4, 11, 35]
]

for (numbers of participantNums) {
    for (let i = 0; i < numbers.length-1; i++) {
        let tmp = false
        for ( let j = i + 1; j < numbers.length; j++) {
            if (numbers[j] === numbers[i]) {
                tmp = true
            }
        } if (tmp === false) {
            console.log(numbers[i])
            break
        }
    }
}

// 3
// 100
// 62