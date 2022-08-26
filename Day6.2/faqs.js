window.onload = function () {
    var faqs = $("faqs");
    var h2_elements = faqs.getElementsByTagName("h2");
    		    
    var headingNode;
    for (var i = 0; i < h2_elements.length; i++ ) {
    	headingNode = h2_elements[i];
    	
    	// Attach event handler
    	headingNode.onclick = function () {
			var h2 = this;         // h2 is the current headingNode object
			
			//this	
			if (h2.getAttribute("class") == "plus") {
				h2.setAttribute("class","minus");	
			}
			else {
				h2.setAttribute("class", "plus");
			}
			if (h2.nextElementSibling.getAttribute("class") == "closed") {
				h2.nextElementSibling.setAttribute("class","open");
			}
			else {
				h2.nextElementSibling.setAttribute("class", "closed");
			}
		}
    }
    $("first_link").focus();
}
var $ = function (id) {
	return document.getElementById(id);
}