var Robot = function(inputName) {
    this.name = inputName
}


// constructor called DOMNode(). it should take as input a tagname, and assign that tagName to the outgoing object, every new DOMNode object should also have a children property that is assigned initially to [].



var DOMNode = function(tagName) {
    this.tagName = tagName
    this.children = []
    this.appendChild = function(childTag) {
    	var childNode = new DOMNode(childTag)
    	this.children.push(childNode)
    }
}

var newDiv = new DOMNode('div')

// method called findChildByTagName() it should take as input a tag name, and it should serch through the node's children until it finds one that has the given tag name.
