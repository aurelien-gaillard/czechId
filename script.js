
const nidIsValid = (nid) => {
    if (Number.isNaN(parseInt(nid, 10))) {
        return false
    }
    if (nid.length !== 10) {      
        return false
    }
    if (nid % 11 !== 0) {
        return false
    }
    const yearMonth = Math.floor(nid / 1000000)
    const month = yearMonth % 100
    if ((month > 0 && month < 13) || (month > 50 && month < 63)) {
        const yearMonthDay = Math.floor(nid / 10000)
        const day = yearMonthDay % 100
        const year = Math.floor(nid / 100000000)
        if (month === 2 || month === 52) {
            if (year % 4 === 0) {
                if (day === 0 || day > 29) {
                    return false
                }
            }
            else {
                if (day === 0 || day > 28) {
                    return false
                }
            }
        }
        else if (month === 4 || month === 54 || month === 6 || month === 56 || month === 9 || month === 59 || month === 11 || month === 61) {
            if (day === 0 || day > 30) {
                return false
            }
        }
        else {
            if (day === 0 || day > 31) {
                return false
            }
        }
        return true;

    }
    else { return false }
}