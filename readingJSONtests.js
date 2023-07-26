import axios from "axios";

const getNewsData = await axios.get('http://localhost:3000/mockApiResponse');

try {
    const TEST = getNewsData.data.response.results;
    const mapTest = TEST.map(result => ({
        id: result.id,
        type: result.type,
        headline: result.fields.headline
    }));
    console.log(mapTest)

} catch (e) {
    console.log(e)
}
