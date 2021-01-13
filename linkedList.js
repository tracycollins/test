class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

class LinkedList {

  constructor(head = null){
    this.head = head
  }

  size() {
    let count = 0
    let node = this.head
    while (node) {
      count++
      node = node.next
    }
    return count
  }

  clear() {
    this.head = null
  }

  getLast() {
    let lastNode = this.head
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next
      }
    }
    return lastNode
  }

  getFirst() {
    return this.head
  }
}

var addTwoNumbers = function(l1, l2) {

  let carry = 0
  let lastNode = new ListNode()
  let prevNode = new ListNode()

  while(l1.next || l2.next){
    let sum = carry
    sum += (l1 !== undefined) ? l1.val : 0
    sum += (l2 !== undefined) ? l2.val : 0
    if (sum >= 10) {
      carry = 1
      sum -= 10
    }
    const nodeDigit = new ListNode(sum)
    listSum.next = nodeDigit
  }

  return listSum
}

let node1 = new ListNode(2)
let node2 = new ListNode(5)

node1.next = node2

let list = new LinkedList(node1)

console.log(`list.head.next.val: ${list.head.next.val}`)
console.log(`size: ${list.size()}`)
console.log(`last: ${list.getLast().val}`)
console.log(`first: ${list.getFirst().val}`)
console.log(`clear: ${list.clear()}`)
console.log(`size: ${list.size()}`)
