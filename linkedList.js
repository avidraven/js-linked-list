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

  function getTail() {
    var currentNode = getHead();
    if (currentNode !== null){
      while (currentNode.next !== null){
        currentNode = currentNode.next;
      }
    }
    return currentNode;
  }

  function add(value){
    var newNode = {
      value: value,
      next: null,
    };
    var tail = getTail();
    if (tail === null){
      head = newNode;
    }else{
      tail.next = newNode;
    }
    return newNode;
  }

  function get(number){
    var currentNode = getHead();
    var length = 0;
    if (number < 0){
      return false;
    }
    while (length < number){
      if (currentNode.next !== null){
        currentNode = currentNode.next;
        length++;
      }else{
        return false;
      }
    }
    return currentNode;
  }

  function remove(number){
    if (get(number)){
      var removeNode = get(number);
      if (number === 0){
        head = removeNode.next;
        removeNode = null;
      }else{
        var prevNode = get(number-1);
        prevNode.next = removeNode.next;
        removeNode = null;
      }
    }else{
      return false;
    }
  }

  function insert(value,number){
    var newNode = {
      value: value,
      next: null
      };
    if (get(number)){
      var nextNode = get(number);
      if (number === 0){
        head = newNode;
        newNode.next = nextNode;
      }else{
        var prevNode = get(number-1);
        prevNode.next = newNode;
        newNode.next = nextNode;
      }
    }else{
      return false;
    }
  }

  return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    get: get,
    remove: remove,
    insert: insert,
  };
}