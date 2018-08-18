function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(nest, target) {
  return document.querySelector('#nested div.target')
}

function increaseRankBy(n) {
  const lists = document.querySelectorAll('.ranked-list');

  for (let i = 0; i < lists.length; i++) {
    let children = lists[i].children;

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n;
    }
  }
}

function deepestChild() {
  let node = document.getElementById('grand-node');
  let nextNode = node.children[0];

  while (nextNode) {
    node = nextNode;
    nextNode = node.children[0];
  }

  return node;
}