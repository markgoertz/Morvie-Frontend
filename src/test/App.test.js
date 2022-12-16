import {} from "@testing-library/react";
import puppeteer from "puppeteer";

test("Initialize testing with Jest and React!", () => {
  expect("Hello world").toBe("Hello world");
});

describe("App.js", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  it("contains the welcome text", async () => {
    await page.goto("http://localhost:3000");
    await page.waitForSelector("MORVIE");
    const text = await page.$eval("MORVIE", (e) => e.textContent);
    expect(text).toContain("MORVIE");
  });

  afterAll(() => browser.close());
});