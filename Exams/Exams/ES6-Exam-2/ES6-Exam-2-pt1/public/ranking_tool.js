var first, second, third = '';

var getWinners = (formData, cb1) => {

    var sortedArr = formData.sort(function (a, b) {
        return b[1] - a[1]
    });


    const groupedMap = sortedArr.reduce(
        (entryMap, e) => entryMap.set(e[1], [...entryMap.get(e[1]) || [], e]),
        new Map()
    );

    var keys = [...groupedMap.keys()];

    for (var i = 0; i <= 2; i++) {


        var count = groupedMap.get(keys[i]).length;

        if (count > 1) {
            switch (i) {
                case 0:
                    first = '(1st) ' + count + ' scored ' + keys[i] + ' out of 10';
                    break;

                case 1:
                    second = '(2nd) ' + count + ' scored ' + keys[i] + ' out of 10';
                    break;

                case 2:
                    third = '(3rd) ' + count + ' scored ' + keys[i] + ' out of 10';
                    break;

            }
        }
        else {
            switch (i) {
                case 0:
                    first = '(1st) ' + ((groupedMap.get(keys[i]))[0])[0] + ' scored ' + keys[i] + ' out of 10';
                    break;

                case 1:
                    second = '(2nd) ' + ((groupedMap.get(keys[i]))[0])[0] + ' scored ' + keys[i] + ' out of 10';
                    break;

                case 2:
                    third = '(3rd) ' + ((groupedMap.get(keys[i]))[0])[0] + ' scored ' + keys[i] + ' out of 10';
                    break;

            }

        }



    }

   cb1({f: first, s: second, t: third});

}

module.exports = {
    getWinners: getWinners 
};
