

/*
    Find merge point of two linked lists
    Note that the head may be 'null' for the empty list.
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function findMergeNode(headA, headB) {
    let pointer1 = headA;
      
      while(pointer1){  
          let pointer2 = headB;
          while(pointer2){
              if(pointer1===pointer2){
                  return pointer1.data;
              }
              pointer2=pointer2.next;
          }
          pointer1 = pointer1.next;
      }
      return null;
}

