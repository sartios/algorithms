(function(){


	function Link(bookName, millionsSold){
		this.bookName = bookName;
		this.millionsSold = millionsSold;
		this.next = null;
	}

	Link.prototype.display = function(){
		console.log(this.bookName + ': ' + this.millionsSold);
	};

	Link.prototype.toString = function(){
		return this.bookName;
	};

	Link.prototype.setNext = function(next){
		this.next = next;
	};

	function LinkedList(){
		this.firstLink = null;
	}

	LinkedList.prototype.isEmpty = function(){
		return (this.firstLink === null);
	};

	LinkedList.prototype.insertFirstLink = function(bookName, millionsSold){
		var newLink = new Link(bookName, millionsSold);
		newLink.setNext(this.firstLink);
		this.firstLink = newLink;
	};

	LinkedList.prototype.removeFirst = function(){
		var linkReference = this.firstLink;
		if(!this.isEmpty()){
			this.firstLink = this.firstLink.next;
		}else{
			console.log('List is empty');
		}
		return linkReference;
	};

	LinkedList.prototype.display = function(){
		var theLink = this.firstLink;
		while(theLink !== null){
			theLink.display();
			theLink = theLink.next;
		}
	};

	LinkedList.prototype.find = function(bookName){
		var theLink = this.firstLink;
		if(!this.isEmpty()){
			while(theLink.bookName != bookName){
				if(theLink.next === null){
					return null;
				}else{
					theLink = theLink.next;
				}
			}
		}else{
			console.log('Empty list');
		}
		return theLink;
	};

	LinkedList.prototype.removeLink = function(bookName){
		var currentLink = this.firstLink;
		var previousLink = this.firstLink;

		while(currentLink.bookName != bookName){
			if(currentLink.next == null){
				return null;
			}else{
				previousLink = currentLink;
				currentLink = currentLink.next;
			}
		}

		if(currentLink == this.firstLink){
			this.firstLink = this.firstLink.next;
		} else{
			previousLink.next = currentLink.next;
		}
		return currentLink;
	}


	var myLinkedList = new LinkedList();
	myLinkedList.insertFirstLink('bookName 1', 1);
	myLinkedList.insertFirstLink('bookName 2', 2);
	myLinkedList.insertFirstLink('bookName 3', 3);
	myLinkedList.insertFirstLink('bookName 4', 4);
	myLinkedList.insertFirstLink('bookName 5', 5);

	console.log('--- Display after add');

	myLinkedList.display();

	myLinkedList.removeLink('bookName 3');
	console.log('--- Display after revome');
	myLinkedList.display();

})();
