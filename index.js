// import fs from 'fs';
// import lighthouse from 'lighthouse';
// import * as chromeLauncher from 'chrome-launcher';
//
// const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
// const options = {logLevel: 'info', output: 'html', onlyCategories: ['performance','accessibility','seo','pwa','best-practices',], port: chrome.port};
// const runnerResult = await lighthouse('https://www.flipkart.com/', options);
//
// // `.report` is the HTML report as a string
// const reportHtml = runnerResult.report;
// fs.writeFileSync('lhreport.html', reportHtml);
//
// // `.lhr` is the Lighthouse Result as a JS object
// console.log('Report is done for', runnerResult.lhr.finalDisplayedUrl);
// console.log('Performance score was', runnerResult.lhr.categories.performance.score * 100);
//
// await chrome.kill();


// importing the required library
// headless mode means accessing the chrome without gui means accessing the url without direactly
// options defines the output format and the catgories we are going to shown


// import fs from 'fs';
// import lighthouse from 'lighthouse';
// import * as chromeLauncher from 'chrome-launcher';
// import puppeteer from 'puppeteer';
//
// async function generatePDF(htmlContent,pdfPath) {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.setContent(htmlContent);
//     await page.pdf({ path: pdfPath, format: 'A4' });
//     await browser.close();
// }
//
// const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
// const options = {logLevel: 'info', output: 'html', onlyCategories: ['performance','accessibility','seo','pwa','best-practices',], port: chrome.port,emulatedFormFactor: 'mobile'};
// const runnerResult = await lighthouse('https://www.mahindra.com/', options);
//
// // `.report` is the HTML report as a string
// const reportHtml = runnerResult.report;
// fs.writeFileSync('lhreport.html', reportHtml);
// await generatePDF(reportHtml,'lhreport.pdf');
//
// // `.lhr` is the Lighthouse Result as a JS object
// console.log('Report is done for', runnerResult.lhr.finalDisplayedUrl);
// console.log('Performance score was', runnerResult.lhr.categories.performance.score * 100);
//
// await chrome.kill();

import fs from 'fs';
import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';

const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
const options = {logLevel: 'info', output: 'html', onlyCategories: ['performance'], port: chrome.port};
const runnerResult = await lighthouse('https://mahindra.com', options);

const reportHtml = runnerResult.report;
fs.writeFileSync('lhreports.html', reportHtml);

console.log('Report is done for', runnerResult.lhr.finalDisplayedUrl);
console.log('Performance score was', runnerResult.lhr.categories.performance.score * 100);
await chrome.kill();
