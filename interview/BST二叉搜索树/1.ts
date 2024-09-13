// 数据存储方式 + 数据行为  构成数据结构
// 泛型 类型传参
// 约束内部类型

// 定义一个泛型类 TreeNode，用于表示二叉树的节点
class TreeNode<T> {
    val: T; // 节点的值
    left: TreeNode<T> | null; // 左子节点
    right: TreeNode<T> | null; // 右子节点

    // 构造函数，初始化节点的值和左右子节点
    constructor(val: T, left: TreeNode<T> | null = null, right: TreeNode<T> | null = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// 定义一个泛型类 BinarySearchTree，用于表示二叉搜索树
class BinarySearchTree<T> {
    private root: TreeNode<T> | null = null; // 树的根节点，初始为 null

    // 插入一个新的值到二叉搜索树中
    insert(val: T): void {
        const newNode = new TreeNode<T>(val); // 创建一个新的节点
        if (this.root === null) { // 如果树是空的
            this.root = newNode; // 将新节点设为根节点
        } else {
            this.insertNode(this.root, newNode); // 否则插入到适当的位置
        }
    }

    // 辅助函数，用于递归地插入节点
    private insertNode(node: TreeNode<T>, newNode: TreeNode<T>): void {
        if (newNode.val < node.val) { // 如果新节点的值小于当前节点的值
            if (node.left === null) { // 如果左子节点为空
                node.left = newNode; // 将新节点插入到左子节点
            } else {
                this.insertNode(node.left, newNode); // 否则递归地插入到左子树
            }
        } else { // 如果新节点的值大于或等于当前节点的值
            if (node.right === null) { // 如果右子节点为空
                node.right = newNode; // 将新节点插入到右子节点
            } else {
                this.insertNode(node.right, newNode); // 否则递归地插入到右子树
            }
        }
    }

    // 搜索一个值是否存在于二叉搜索树中
    search(val: T): boolean {
        return this.searchNode(this.root, val); // 调用辅助函数进行搜索
    }

    // 辅助函数，用于递归地搜索节点
    private searchNode(node: TreeNode<T> | null, val: T): boolean {
        if (node === null) { // 如果节点为空，表示未找到
            return false;
        }
        if (val < node.val) { // 如果搜索值小于当前节点的值
            return this.searchNode(node.left, val); // 递归地搜索左子树
        } else if (val > node.val) { // 如果搜索值大于当前节点的值
            return this.searchNode(node.right, val); // 递归地搜索右子树
        } else { // 如果搜索值等于当前节点的值
            return true; // 找到节点，返回 true
        }
    }
}

// 示例使用
const bst = new BinarySearchTree<number>(); // 创建一个新的二叉搜索树实例