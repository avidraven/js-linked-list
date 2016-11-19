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
    var length = 0;
    var currentNode = getHead();
    while (length < number) {
      if (currentNode.next !== null) {
        length++;
        currentNode = currentNode.next;
      }else{
        return false;
      }
    }
    return currentNode;
  }

  function remove(number){
    var length = 0;
    var currentNode = getHead();
    var prevNode = null;
    if (number === 0) {
      head = currentNode.next;
      currentNode = null;
      return currentNode;
    }
    while (length < number) {
      if (currentNode.next !== null) {
        length++;
        prevNode = currentNode;
        currentNode = currentNode.next;
      }else{
        return false;
      }
    }
    prevNode.next = currentNode.next;
    currentNode = null;
  }

  function _getLength() {
    let length = 0;
    let node = head;
    if (head === null) {
      return 0;
    }else{
      length = 1;
    }
    while (node.next !== null) {
      length++;
      node = node.next;
    }
    return length;
  }

  function insert(value,number){
    var newNode = {
      value: value,
      next: null
      };
    if (number < 0 ||number > _getLength()) {
      return false;
    }else if (number === 0) {
      let nextNode = getHead();
      newNode.next = nextNode;
      head = newNode;
    }else{
      let prevNode = get(number - 1);
      let nextNode = prevNode.next;
      prevNode.next = newNode;
      newNode.next = nextNode;
    }
  }


 //still fails npm test
  //  function insert(value,number){
  //   var length = 0;
  //   var currentNode = getHead();
  //   var prevNode = null;
  //   var newNode = {
  //     value: value,
  //     next: null
  //   };
  //   if (number === 0) {
  //     head = newNode;
  //     head.next = currentNode;
  //     return currentNode;
  //   }
  //   while (length < number) {
  //     if (currentNode.next !== null) {
  //       length++;
  //       prevNode = currentNode;
  //       currentNode = currentNode.next;
  //     }else{
  //       return false;
  //     }
  //   }
  //   prevNode.next = newNode;
  //   newNode.next = currentNode;
  // }

  return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    get: get,
    remove: remove,
    insert: insert
  };
}