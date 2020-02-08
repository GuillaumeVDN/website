// date utils
function getTimeFromDate(date, withMonths) {
    const daysDiff = Math.round(Math.abs((date.getTime() - Date.now()) / 86400000));
    const years = Math.floor(daysDiff / 365);
    var result = years + " year" + (years > 1 ? "s" : "");
    if (withMonths) {
            const months = Math.round((daysDiff - years * 365) / 30);
            if (months > 0) {
                result += " and " + months + " month" + (months > 1 ? "s" : "");
            }
    }
    return result
}

// utils
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function setProjectsId(object) {
    if (object.name != null) {
        object.id = uuidv4()
    } else if (typeof(object) == Array) {
        for (obj in object) {
            setProjectsId(obj)
        }
    } else {
        for (var obj in object) {
            if (!object.hasOwnProperty(obj)) { // The current property is not a direct property of p
                continue;
            }
            setProjectsId(object[obj])
        }
    }
}
