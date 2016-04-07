var checkExist = setInterval(function() {
   if ($('.m-header').length) {
   		function getElementByXpath(path) {
   		  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
   		}
   		getElementByXpath('/html/body/div[1]/div/div[4]/div[2]/div[1]/div[3]/i').style.display = 'none';
   		getElementByXpath('//*[@id="moot-logo"]').style.display = 'none';
   		var img = document.createElement("img");
   		img.src = "http://true-happiness.github.io/img/logo-fb.png";
   		getElementByXpath('/html/body/div[1]/div/div[4]/div[2]/div[1]/div[3]').appendChild(img);
      clearInterval(checkExist);
   }
}, 100); 