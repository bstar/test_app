const { processData } = require('../lib/lang');


const dataMock = {
  results: [
    {
      language_code: 'en',
      language_name: 'English',
      percentage: 100,
    }
  ]
};

test('transforms data', () => {

  const processedData = processData(dataMock);

  expect(processedData.length).toEqual(1);

  expect(processedData).toMatchObject([
    { code: 'en', name: 'English', percentage: 100 },
  ]);
});
