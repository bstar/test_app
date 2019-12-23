const axios = require('axios');
const access_key = 'd868891b266d6ebb394c642877827092';
const api_base = 'http://api.languagelayer.com/detect';


const getLangStatus = async query => {

    const config = {
        method: 'get',
        baseURL: api_base,
        params: {
            access_key,
            query,
        },
    };

    return await axios(config)
    .then(res => res.data)
    .catch(err => err);
};

const processData = data => {

    const results = data.results;

    return results && results.map(result => {
        
        return {
            code: result.language_code,
            name: result.language_name,
            percentage: result.percentage,
        };
    });
};

const displayLangText = async ({ text }) => {

    const langStatus = await getLangStatus(text);
    const formatted = processData(langStatus);

    const displayText = formatted.reduce((acc, item) => {
        return acc + `code: ${item.code}\nname: ${item.name}\npercentage: ${item.percentage}\n-------------\n`;
    }, '');

    return displayText;
};

const displayLangData = async ({ text }) => {

    const langStatus = await getLangStatus(text);

    return processData(langStatus);
}

module.exports = {
    getLangStatus,
    processData,
    displayLangText, 
    displayLangData,
};