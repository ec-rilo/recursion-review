/* -----------------------------------------------------------------------------
   Comments

   1. Depth-first search.
   2. Write a tree traversal function/loop which pushes found results.
   3. Return results.

*/

/**
 * Returns an array of nodes (HTMLElement) if there is a match on `className`.
 * @param { string } className
 * @returns { Array } of nodes that match on `className`.
 */
var getElementsByClassName = function(className) {
  // <crawl> will traverse the tree, and FOR EVERY child it finds:
  //   1. See if it has <className>. If it does, push to <found>.
  //   2. Recurse into the child by running <helper(child)>
  //   3. When our <helper> finishes, then <found> should be ready to return.
  var crawl = function(node) {
    for (const child of node.children) {
      if (child.classList.contains(className)) {
        found.push(child);
      }

      crawl(child);
    }
  };

  var found = [];   // all the HTMLElements that we find with <className>
  crawl(document);  // do the recursive work
  return found;
};
