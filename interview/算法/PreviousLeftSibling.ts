interface Element{
    parentElement: Element;
    previousElementSibling: Element;
    nextElementSibling: Element;
    children: Element[];
}

// 遍历
function PreviousLeftSibling(root: Element, target: Element): Element | null {
    if (root === target) {
        return null; // 根节点没有兄弟节点
    }

    let queue: { level: Element[]; parent: Element | null }[] = [];
    queue.push({ level: [root], parent: null });

    while (queue.length > 0) {
        const current = queue.shift()!;
        const currentLevel = current.level;
        
        // 检查当前层级是否包含目标节点
        const targetIndex = currentLevel.indexOf(target);
        if (targetIndex !== -1) {
            // 找到目标节点，返回前一个兄弟节点
            return targetIndex > 0 ? currentLevel[targetIndex - 1] : null;
        }

        // 准备下一层级
        const nextLevel: Element[] = [];
        for (const node of currentLevel) {
            nextLevel.push(...node.children);
        }

        if (nextLevel.length > 0) {
            queue.push({ level: nextLevel, parent: null });
        }
    }

    return null; // 目标节点不在树中
}

// 利用树节点已有的指针结构
function PreviousLeftSibling(root: Element, target: Element): Element | null {
    // 如果目标节点有直接前兄弟节点，直接返回
    if (target.previousElementSibling !== null) {
        return target.previousElementSibling;
    }

    // 如果目标节点没有父节点，说明它是根节点，没有兄弟节点
    if (target.parentElement === null) {
        return null;
    }

    // 查找父节点的前兄弟节点的最后一个子节点
    let parentSibling = target.parentElement.previousElementSibling;
    while (parentSibling !== null) {
        if (parentSibling.children.length > 0) {
            return parentSibling.children[parentSibling.children.length - 1];
        }
        parentSibling = parentSibling.previousElementSibling;
    }

    return null;
}