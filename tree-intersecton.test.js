const {BinaryTree} = require('./tree.js');
const {Node} = require('./tree.js');
const {treeInterSection} = require('./tree-intersecton.js');


describe('tree intersection algorithm ', ()=>{

  // let tree1 = null;
  // let tree2= null ;

  let one = new Node(150);
  let two = new Node(100);
  let three = new Node(250);
  let four = new Node(160);
  let five = new Node(200);
  let six = new Node (160);

  one.left = two;
  one.right = three;
  three.left = four;
  two.left = five;
  two.right = six ;

  let a = new Node(170);
  let b = new Node(100);
  let c = new Node(4);
  let d = new Node(6);
  let e = new Node(201);
  let f = new Node (160);

  a.left = b;
  a.right = c;
  c.left = d;
  b.left = e;
  b.right = f;

  let tree1 = new BinaryTree(one);
  let tree2 = new BinaryTree(a);
  console.log('tree2', tree2);

  it(' treeInterSection() should find the values that shared between two tree ' , ()=>{
    let expected = [100, 160];
    expect(treeInterSection(tree1 , tree2)).toEqual(expected);
  });

  it(' treeInterSection() should return (empty tree) if thereis empty ' , ()=>{
    let tree3 = null;
    expect(treeInterSection(tree1 , tree3)).toEqual('empty tree');
  });

});
