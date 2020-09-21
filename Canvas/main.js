var customtitle = "true"
async function title(){
document.title = "Spyware";
await sleep(2000);
document.title = "Spywar";
await sleep(500);
document.title = "Spywa";
await sleep(500)
document.title = "Spyw";
await sleep(500)
document.title = "Spy";
await sleep(500)
document.title = "Sp";
await sleep(500)
document.title = "S";
await sleep(1500)
document.title = "Sp";
await sleep(500)
document.title = "Spy";
await sleep(500)
document.title = "Spyw";
await sleep(500)
document.title = "Spywa";
await sleep(500)
document.title = "Spywar";
await sleep(500)
redotitle()
}
title()
function stoptitle() {
	var customtitle = "false"
	
}
function redotitle() {
	if(customtitle = "true"){title()}
	else {document.title = ""}
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
