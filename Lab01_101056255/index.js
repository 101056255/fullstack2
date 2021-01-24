const csv = require('csv-parser');
const fs = require('fs');

fs.createReadStream('input_countries.csv')
    .pipe(csv())
    .on('data', (row) => {
        if(row.country === "Canada")
        {
            fs.appendFile("canada.txt",row.country + "," + row.year + ","
                + row.population + "\n", err => {
                if(err)
                {
                    console.log("failed")
                }
            })
            console.log(row);
        }

        if(row.country === "United States")
        {
            fs.appendFile("usa.txt",row.country + "," + row.year + ","
                + row.population + "\n", err => {
                if(err)
                {
                    console.log("failed")
                }
            })
            console.log(row);
        }

    })
    .on('end', () => {
        console.log('CSV file successfully processed');
    });
