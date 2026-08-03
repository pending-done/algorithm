const solution = (n, m, section) => {
    let prevEnd = 0;
    let count = 0;

    for (const i of section) {


        if(i <= prevEnd) continue;
        count++;
        prevEnd = i + m - 1;

    }

    return count;

}
