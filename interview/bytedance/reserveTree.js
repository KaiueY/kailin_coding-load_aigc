function mirrorTree(root) {
    if(root === null) return null;
    let left = mirrorTree(root.left);
    let right = mirrorTree(root.right);

    root.left = right;
    root.right = left;
    return root;
}