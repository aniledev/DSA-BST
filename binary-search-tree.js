// create a BST class with its core functions -- insert, remove, find
// initialize a constructor
class BinarySearchTree {
  constructor(key = null) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

// create a balanced binary search tree
function createBalancedBST(arr) {
  const middleIndex = Math.floor(arr.length / 2);
  const middleValue = arr[middleIndex];

  // find the left portion of the array
  const left = arr.slice(0, middleIndex);
  // find the right portion of the array
  const right = ar.slice(middleIndex + 1);

  const leftSubTree = createBalancedBST(left);
  const rightSubTree = createBalancedBST(right);
}

console.dir(createBalancedBST([1, 2, 3, 5, 7, 9, 11]), [(depth: null)]);
