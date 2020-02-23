

const {BinaryTree} = require('./tree.js');
const {Node} = require('./tree.js');
const {BinarySearchTree} = require('./tree.js');


describe('Binary Tree', () => {

  let tree = null;

  let one = new Node('A');
  let two = new Node('B');
  let three = new Node('C');
  let four = new Node('F');
  let five = new Node('D');
  let six = new Node ('E');

  one.left = two;
  one.right = three;
  three.left = four;
  two.left = five;
  two.right = six ;

  tree = new BinaryTree(one);
  //   });

  it('preorder()', () => {
    let expected = ['A','B','D','E','C','F'];
    let preOrder = tree.preOrder();
    expect(preOrder).toEqual(expected);

  });

  it('inorder()', () => {
    let expected = ['D','B','E','A','F','C'];
    let preOrder = tree.inOrder();
    expect(preOrder).toEqual(expected);

  });
  it('postorder()', () => {
    let expected = ['D','E','B','F','C','A'];
    let preOrder = tree.postOrder();
    expect(preOrder).toEqual(expected);

  });
});


describe('BinarySearchTree' , () => {

  let list = null ;
  beforeEach(()=> {
    list = new BinarySearchTree();


  });


  it('should add a left node and right node to a single root node' , ()=> {
    list.add(4) ;
    list.add(1) ;
    let addToTree = list.add(12) ;

    expect(addToTree.left.value).toEqual(1);
    expect(addToTree.right.value).toEqual(12);
  });


  it('should check if tree find certain value and return aboleen if it true or false' , ()=> {
    list.add(1) ;
    list.add(2) ;
    list.add(3) ;
    list.add(4) ;
    list.add(5) ;

    // console.log('list' , list.contain(3))
    expect(list.contain(1)).toBe(true);
    expect(list.contain(8)).toBe(false);
  });




});