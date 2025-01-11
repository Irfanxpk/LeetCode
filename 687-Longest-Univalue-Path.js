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
 * @return {number}
 */
var longestUnivaluePath = function(root) {
   let level = 0
   function helper(parent, current){
    if (current === null) return 0
    let left = helper(current.val,current.left);
    let right = helper(current.val,current.right);
    level = Math.max(level,left + right)
    return current.val===parent?Math.max(left,right)+1:0
   }
   if(root !=null) helper(root.val,root)
   return level
};