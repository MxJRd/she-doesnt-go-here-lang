const firstHref = $("a[href^='http']").eq(0).attr("href");//this grabs our url
//var headContent = document.getElementsByTagName('head')[0].innerHTML;
const headContent = document.getElementsByTagName('head')[0].innerHTML;
alert("Hello from your Chrome extension!");
console.log(firstHref);
console.log(headContent);