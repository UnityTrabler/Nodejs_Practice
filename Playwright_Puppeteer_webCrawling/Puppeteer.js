const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    
    await page.goto('https://www.goshoots.site/Shoots/login');

    await page.type('#id', 'aa');  
    await page.type('#userPassword', 'a');  
    await page.click('.login-btn');           // 로그인 버튼 클릭

    await page.waitForNavigation(); // 로그인 후 페이지 이동 기다림

    console.log("로그인 완료!");
    
})();
