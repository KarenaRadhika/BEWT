// 5) Create a new URL object with base, then append pathname and query, also print the final
// URL. (B)

const newurl=new URL("https://www.youtube.com/pathhhh?name=radhika&age=24");
newurl.pathname="http://10.255.1.1:8090/"
newurl.searchParams.append("user","radhika");
newurl.searchParams.append("age","56");
newurl.searchParams.append("lang","javascript");

console.log("final url",newurl.toString());