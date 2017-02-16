function Node(value){
  this.value = value;
  this.next = null;
}

function List(){
 	this._length = null;
  this.head = null;
}

List.prototype.add = function(value){
  var node = new Node(value);
  var currentNode = this.head;
  
  // empty list
  if(!currentNode){
    this.head = node;
    this._length++;
    return node;
  }
  
  // non-empty list
  while(currentNode.next){
    currentNode = currentNode.next;
  }
  
  currentNode.next = node;
  this._length++;
  
  return node;
}

List.prototype.searchNodeAt = function(position){
  var currentNode = this.head;
  var length = this._length;
  var count = 1;
  var message = { failure: 'Failure: non-existent node in this list'};
  
  if(length == 0 || position < 1 || position > length){
    throw new Error(message.failure);
  }
  
  while(count < position){
    currentNode = currentNode.next;
    count++;
  }
  
  return currentNode;
}

List.prototype.remove = function(position){
  var currentNode = this.head;
  var length = this._length;
  var message = { failure: 'Error!' };
 	var count = 1;
  
  var beforeNodeToDelete = null;
  var nodeToDelete = null;
  var deletedNode = null;
  
  if(position > length || position < 0){
    throw new Error(message.failure);
  }
  
  if(position == 1){
    this.head = currentNode.next;
    deletedNode = currentNode;
    currentNode = null;
    this._length--;
    
    return deletedNode;
  }
  
  while(count < position){
    beforeNodeToDelete = currentNode;
    nodeToDelete = currentNode.next;
    currentNode = currentNode.next;
    count++;
  }
  
  beforeNodeToDelete.next = nodeToDelete.next;
  deletedNode = nodeToDelete;
  nodeToDelete = null;
  this._length--;
  
  return deletedNode;  
}

List.prototype.printList = function(){
  var currentNode = this.head;
  
  log(currentNode);
  while (currentNode.next){
    currentNode = currentNode.next;
    log(currentNode);
  }
    
}

var sl = new List();
sl.add(1);
sl.add(2);
sl.add(3);
sl.add(4);
sl.add(5);

//sl.printList();
//var node = sl.searchNodeAt(5);
//log('Our node:', node);

log(sl.remove(3), sl);