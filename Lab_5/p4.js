// 4) Write a program that parses the given URL, Print protocol, hostname, pathname, and query
// parameters separately. (A)
const url= new URL("https://www.youtube.com/pathhhh?name=radhika&age=24");
console.log(`Hostname:${url.hoostname}`);
console.log(`protocol:${url.protocol}`);
console.log(`pathname:${url.pathname}`);

url.searchParams.forEach((value,key) => {
    console.log(`${key}:${value}`);
});