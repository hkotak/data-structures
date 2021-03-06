/*
  In a breadth first search you will start at the root node.
    You will then search all their children nodes moving from left to right.
    Once all the children nodes have been searched, the process is repeated
    on the level below the root node.

  This process is repeated on each level until you reach the end of the
    tree or you reach the node that you were searching for initially.
    The image below shows you the order that you will search a tree in a breadth first search.
 */

const bfs = (start) => {
  // initailize the open to be the nodes we are currently exploring
  const open = [];
  open.push(start);

  // Keep track of the nodes we have already visited, so we don't repeat nodes
  const visitedNode = [start];
  const searchPath = [];

  // Keep checking nodes until our open array is empty
  while (open.length > 0) {

    // Pull the first item off of our queue
    const current = open.shift();

    // Add the current node to our search path stack
    searchPath.push(current.name);

    // Iterate through all of the neighbors of the current node
    current.neighbors.forEach((next) => {
      // If we haven't already visisted a node, add it to our
      //  visisted stack, and add it to our open queue
      if (visitedNode.indexOf(next) < 0) {
        visitedNode.push(next);
        open.push(next);
      }
    });
  }

  // Once we have traversed the whole graph - return the search path
  return searchPath;
};

module.exports = bfs;
