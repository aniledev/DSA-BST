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
  // true base case
  if (!arr.length) {
    return nill;
  }

  // write base case, the base case is where there is one value in the array -- that cuts down on run time becausse recursive calls won't get triggers but isn't necessary
  if (arr.length === 1) {
    const node = new BinarySearchTree(arr[0]);
    return node;
  }

  // used to split the array into two parts
  const middleIndex = Math.floor(arr.length / 2);
  const middleValue = arr[middleIndex];

  // find the left portion of the array
  const left = arr.slice(0, middleIndex);
  // find the right portion of the array
  const right = arr.slice(middleIndex + 1);

  // create sub tress by calling a recursive function
  const leftSubTree = createBalancedBST(left);
  const rightSubTree = createBalancedBST(right);
  const node = new BinarySearchTree(middleValue);
  node.left = leftSubTree;
  node.right = rightSubTree;
  return node;
}

console.dir(createBalancedBST([1, 2, 3, 5, 7, 9, 11]), { depth: null });
