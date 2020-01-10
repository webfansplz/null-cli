const puppeteer = require('puppeteer');

async function performance(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const performanceTiming = JSON.parse(
    await page.evaluate(() => JSON.stringify(window.performance.timing)),
  );
  const {
    loadEventEnd,
    navigationStart,
    domainLookupEnd,
    domainLookupStart,
    connectEnd,
    connectStart,
    responseEnd,
    responseStart,
    domComplete,
    domInteractive,
    domContentLoadedEventEnd,
  } = performanceTiming;

  // DNS查询耗时
  const dnsLookupTime = domainLookupEnd - domainLookupStart;
  // TCP连接耗时
  const tcpConnectTime = connectEnd - connectStart;
  // 页面请求耗时
  const downloadTime = responseEnd - responseStart;
  // DOM解析耗时
  const parseDomTime = domComplete - domInteractive;
  // 白屏耗时
  const whiteScreenTime = responseStart - navigationStart;
  // DOM Ready 耗时
  const domReadyTime = domContentLoadedEventEnd - navigationStart;
  // 页面加载总耗时
  const pageLoadTime = loadEventEnd - navigationStart;
  console.log(dnsLookupTime, tcpConnectTime, downloadTime, whiteScreenTime);
  console.log('DOM解析耗时', parseDomTime);
  console.log('DOM Ready 耗时', domReadyTime);
  console.log('页面加载总耗时', pageLoadTime);
}
module.exports = performance;
