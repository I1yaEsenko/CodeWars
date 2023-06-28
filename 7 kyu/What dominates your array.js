function dominator(arr) {
    const map = arr.reduce((a,c) => (a[c] = ++a[c] || 1, a), {})

    for(let k in map){
        if(map[k] > arr.length / 2) return +k
    }

    return -1
}