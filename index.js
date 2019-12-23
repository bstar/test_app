const lang = require('./lib/lang');

const text = 'bob is nifty';


const displayToConsole = async () => {

    const displayText = await lang.displayLangText({ text });

    console.log(displayText);
};

displayToConsole();