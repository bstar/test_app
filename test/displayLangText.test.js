const { displayLangText } = require('../lib/lang');


const dataMock = {
    code: 'en',
    name: 'English',
    percentage: 100,
};

test('displays transformed data from api as text', async () => {

    const displayData = await displayLangText({ text: 'eat good food' });

    expect(displayData).toMatch(/(code:\s.+)/);
    expect(displayData).toMatch(/(name:\s.+)/);
    expect(displayData).toMatch(/(percentage:\s.+)/);
});
