const protocol = window.location.protocol; // "http:" or "https:"
const hostname = window.location.hostname; // domain name
const pathname = window.location.pathname; // path after the domain
const search = window.location.search; // query string

const currentUrl = window.location.href;
console.log(currentUrl);

const urlString = "http://example.com?name=John&email=john@example.com";
const url = new URL(urlString);
const queryString = url.search;
console.log(queryString);

const urlString2 = "http://example.com?name=John&email=john@example.com";
const url2 = new URL(urlString);
const name = url.searchParams.get("name");
console.log(name);

const urlString3 = "http://example.com?name=John&email=john@example.com";
const url3 = new URL(urlString);
url3.searchParams.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
