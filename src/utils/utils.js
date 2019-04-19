const getMenuNum = (a, n) => {
    let x = 0, y = 0, z = 0;
    for(let i = 0; i < a.length; i++){
        if(a[i].children){
            let ac = a[i].children;
            for (let j = 0; j < ac.length; j++) {
                if (ac[j].children) {
                    let acc = ac[j].children;
                    for (let k = 0; k < acc.length; k++) {
                        if (acc[k].key == n) {
                            [x, y, z] = [i, j+1, k+1]
                        }
                    }
                } else {
                    if (ac[j].key == n) {
                        [x, y, z] = [i, j+1, 0]
                    }
                }
            }
        } else {
            if (a[i].key == n) {
                [x, y, z] = [i , 0, 0]
            }
        }
    }
    return {x, y, z};
}



module.exports = {
    getMenuNum
}