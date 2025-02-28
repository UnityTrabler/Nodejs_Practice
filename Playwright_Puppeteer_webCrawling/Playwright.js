const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();  
  await page.goto('https://www.g2b.go.kr/');

  console.log("Search");
  waitAndClick(page, '.w2window_close'); //팝업 닫기
  waitAndClick(page, '.btn.srch'); // 돋보기 버튼
  await page.fill('.w2input', '공고'); // 검색어 입력
  await page.press('.w2input', 'Enter'); // 엔터 키 입력

  console.log("First notice click");
  await page.waitForSelector('.w2tb.tb_list .w2tb_td .link_txt');
  await page.locator('.w2tb.tb_list .w2tb_td .link_txt').first().click();
  
  console.log("Download");
  await page.waitForTimeout(2000);
  await page.click('input[type="checkbox"][title="전체선택"]', { force: true });  
  const [download] = await Promise.all([ 
    page.waitForEvent('download'),
    await page.click('[id$="btnFileDown"]')
  ]);

  const downloadPath = './downloads/' + download.suggestedFilename();
  await download.saveAs(downloadPath);
  console.log(`downloaded path : ${downloadPath}`);
  await browser.close();
})();

async function waitAndClick(page, id){
  await page.waitForSelector(id, { state: 'visible' });
  await page.click(id);
  await page.waitForTimeout(3000);
}