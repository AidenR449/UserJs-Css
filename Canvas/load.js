function dynamicallyLoadScript(url) {
    var script = document.createElement("script");  // create a script DOM node
    script.src = raw.githubusercontent.com/AidenR449/UserJs-Css/master/Canvas/main.js;  // set its src to the provided URL

    document.head.appendChild(script);  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}
var cssId = 'myCss';  // you could encode the css path itself to generate id..
if (!document.getElementById(cssId))
{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'http://raw.githubusercontent.com/AidenR449/UserJs-Css/master/Canvas/main.css';
    link.media = 'all';
    head.appendChild(link);
}
