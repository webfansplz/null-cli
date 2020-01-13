const ora = require('ora');
const { parse } = require('url');
const puppeteer = require('puppeteer');

async function performance(url) {
  const spinner = ora('Loading Info ...');
  spinner.start();
  const { protocol } = parse(url);
  const website = protocol ? url : `http://${url}`;
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(website);
  const performanceTiming = JSON.parse(
    await page.evaluate(() => JSON.stringify(window.performance.timing)),
  );
  await browser.close();
  spinner.stop();
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
  console.log({
    DNS查询耗时: `${dnsLookupTime}ms`,
    TCP连接耗时: `${tcpConnectTime}ms`,
    页面请求耗时: `${downloadTime}ms`,
    白屏耗时: `${whiteScreenTime}ms`,
    DOM解析耗时: `${parseDomTime}ms`,
    DOMReady耗时: `${domReadyTime}ms`,
    页面加载总耗时: `${pageLoadTime}ms`,
  });
}
module.exports = performance;
