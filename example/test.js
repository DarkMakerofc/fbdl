const { facebook } = require('../index.js');

async function testFbDl() {
    const fbUrl = "https://www.facebook.com/share/v/Dk3JH9hRY7MU827F/?mibextid=jmPrMh";
    const result = await facebook(fbUrl);
    console.log(result);
}

testFbDl();
