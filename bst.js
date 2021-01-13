class Node{
  constructor(data){
    this.data = data;
    this.left = null
    this.right = null
  }
}

class BinarySearchTree{
  
  constructor(){
    this.root = null
  }

  insert(data){
    const newNode = new Node(data)

    if (this.root === null){
      this.root = newNode
    }
    else {
      this.insertNode(this.root, newNode)
    }
    // console.log({newNode})
  }

  insertNode(node, newNode){
    if (newNode.data < node.data){
      if (node.left === null){
        node.left = newNode
      }
      else{
        this.insertNode(node.left, newNode)
      }
    }
    else
      if (node.right === null){
        node.right = newNode
      }
      else{
        this.insertNode(node.right, newNode)
      }
    // console.log({node})
  }

  remove(data){
    this.root = this.removeNode(this.root, data)
  }
  removeNode(node, key){
    if (node === null){ 
      return null
    }else if (key < node.data){
      node.left = this.removeNode(node.left, key)
      return node
    }
    else if (key > node){
      node.right = this.removeNode(node.right, key)
      return node;
    }
    else{
      if (node.left === null && node.right === null){
        node = null
        return node;
      }

      if (node.left === null){
        node = node.right;
        return node;
      }
      else if (node.right === null) {
        node = node.left;
        return node;
      }

      const aux = this.findMinNode(node.right)
      node.data = aux.data;

      node.right = this.removeNode(node.right, aux.data)
      return node;
    }
  }

  findMinNode(node){
    if (node.left === null){
      return node
    }
    else{
      return this.findMinNode(node.left)
    }
  }

  getRootNode(){
    return this.root
  }

  inorder(node){
    if (node !== null){
      this.inorder(node.left)
      console.log(node.data)
      this.inorder(node.right)
    }
  }

  preorder(node){
    if (node !== null){
      console.log(node.data)
      this.inorder(node.left)
      this.inorder(node.right)
    }
  }

  postorder(node){
    if (node !== null){
      this.inorder(node.left)
      this.inorder(node.right)
      console.log(node.data)
    }
  }

  search(node, data){
    if (node === null){
      return null
    }
    else if (data < node.data){
      return this.search(node.left, data)
    }
    else if (data > node.data){
      return this.search(node.right, data)
    }
    else {
      return node;
    }
  }
}

const BST = new BinarySearchTree(); 

BST.insert(15); 
BST.insert(25); 
BST.insert(10); 
BST.insert(7); 
BST.insert(22); 
BST.insert(17); 
BST.insert(13); 
BST.insert(5); 
BST.insert(9); 
BST.insert(27); 

var root = BST.getRootNode(); 
console.log("inorder")
BST.inorder(root); 
console.log("postorder")
BST.postorder(root); 
