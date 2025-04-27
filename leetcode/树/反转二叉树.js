/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var flipTree = function(root) {
    if (root === null) {
        return null;
    }
     let temp = root.left
    root.left = root.right
    root.right = temp
    flipTree(root.left)
    flipTree(root.right)
    return root
};