/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){

  var head = null;

  function getHead() {
    return head;
  }

  function getTail(){
    var currentNode = getHead();
    while (currentNode !== null) {
      if (currentNode.next !== null) {
        currentNode = currentNode.next;
      }else{
        return currentNode;
      }
    }
    return currentNode;
  }

  function add(value){
    var tail = getTail();
    var newNode = {
      value: value,
      next: null
    };
    if (tail === null) {  //checking for empty list, could be head or tail
      head = newNode;
    }else{
      tail.next = newNode;
    }
    return newNode; //not neeeded just to add
  }

  function get(number){
    var counter = 0;
    var currentNode = getHead();
    while (counter < number) {
      if (currentNode.next !== null) {
        counter++;
        currentNode = currentNode.next;
      }else{
        return false;
      }
    }
    return currentNode;
  }

  function remove(number){
    var counter = 0;
    var currentNode = getHead();
    var prevNode = null;
    if (number === 0) {
      head = currentNode.next;
      currentNode = null;
      return currentNode;
    }
    while (counter < number) {
      if (currentNode.next !== null) {
        counter++;
        prevNode = currentNode;
        currentNode = currentNode.next;
      }else{
        return false;
      }
    }
    prevNode.next = currentNode.next;
    currentNode = null;
  }

//still fails npm test
  function insert(value,number){
    var counter = 0;
    var currentNode = getHead();
    var tail = getTail();
    var prevNode = null;
    var newNode = {
      value: value,
      next: null
    };
    if (number === 0) {
      head = newNode;
      head.next = currentNode;
      return currentNode;
    }
    while (counter < number) {
      if (currentNode.next !== null) {
        counter++;
        prevNode = currentNode;
        currentNode = currentNode.next;
      }else{
        return false;
      }
    }
    prevNode.next = newNode;
    newNode.next = currentNode;
  }

  return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    get: get,
    remove: remove,
    insert: insert
  };
}