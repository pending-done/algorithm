function solution(num_list) {
    let evenCount = 0

    for (const n of num_list) {
        if (n % 2 === 0) evenCount++
    }

    return [evenCount, num_list.length - evenCount]
}
