const fs = require('fs');
const chalk = require('chalk');
const process = require('process');
const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);


let main = () => {
    let filePath, data, strToFind, caseSensitive;


    let arText = (isCaseSensitive) => {
        if (!isCaseSensitive) {
            data.toLowerCase();
            strToFind.toLowerCase();
        }
        return data.split(' ');
    };


    let countOccurence = (text, strToSearch) => {
        return text.filter(t => t.includes(strToSearch)).length;
    };


    let strFormat = (oldData, searchStr, count) => {

        return `${oldData}

    - =============================
    - == Search String: ${searchStr}
    - == Total Occurrece: ${count}
    - =============================`;
    };


    readlineInterface.question("Path: ", (path) => {

        fs.access(path, fs.constants.F_OK, (err) => {
            if (err) {
                console.log(chalk.red(`${path} does not exist!`));
                readlineInterface.removeAllListeners();
                readlineInterface.close();
            }
            else {
                filePath = path;

                readlineInterface.question("String to Search: ", (str) => {
                    data = fs.readFileSync(path, 'utf8');

                    strToFind = str;

                    readlineInterface.question("Is Case Sensitive?: Y/[N] ", (ics) => {

                        caseSensitive = ((ics != ('Y') || ics != ('y'))) ? false : true;
                        readlineInterface.pause();

                    });

                });
            }


        });




    });



    readlineInterface.on('pause', () => {

        let totalOccurence = countOccurence(arText(caseSensitive), strToFind);

        if (totalOccurence == 0) {
            console.log(chalk.yellow('No string found!'));
        }
        else {
            console.log(chalk.green(`${totalOccurence} found!`));


            let txt = strFormat(data, strToFind, totalOccurence);
            fs.writeFileSync(filePath, txt, 'utf8');
        }




    });



}

main();


//hello Hello HELLO hellnaaw