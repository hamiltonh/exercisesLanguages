// codility
// time
// find special clock, using only 2 digits

function solution(S, T) {
    
    
    const strDateIni = S.split(':')
    const strDateEnd = T.split(':')
    // console.log(strDateIni, strDateEnd)
    let result = []

    for (let h = strDateIni[0]; h <= strDateEnd[0]; h++) {

        // console.log(h)
        for (let m = strDateIni[1]; m <= strDateEnd[1]; m++) {
            // console.log(m)

            for (let s = strDateIni[2]; s <= strDateEnd[2]; s++) {
                // console.log(s)
                const opcion = `${h.toString().padStart(2,'0')}${m.toString().padStart(2,'0')}${s.toString().padStart(2,'0')}`
                // console.log(opcion)
                // posibilidades.push (opcion)

                if ( [...new Set(opcion)].length <= 2 ){
                    result.push(opcion)
                }               
            }
        }
    }
    console.log('Qty: ', result.length, result)
    
}

solution('15:15:00', '15:15:12')
solution('22:22:21', '22:22:23')


