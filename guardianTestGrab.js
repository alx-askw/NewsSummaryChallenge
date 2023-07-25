import axios from "axios";
import { writeFile, readFile } from "fs";


const write2JSON = (data) => {
    writeFile('./guardianMockData.json', JSON.stringify(data), (err) => {
        console.log(err)
    });
}
const getDataFromAPI = () => {
    axios.get('https://content.guardianapis.com/search?order-by=newest&show-fields=byline%2Cthumbnail%2Cheadline%2CbodyText&api-key=1cd9ce21-3d13-487a-8493-d972f9903814')
        .then(function (response) {
            // write2JSON(response.data);
            console.log(response.data);
        })
        .catch(e => console.error(e));
}

const savedDataTests = () => {
    readFile("./guardianMockData.json", (err, data) => {
        const reTest = JSON.parse(data);
        console.log(reTest.response.results[0].type)
        // console.log(reTest.response.results)
    })
}

savedDataTests()

