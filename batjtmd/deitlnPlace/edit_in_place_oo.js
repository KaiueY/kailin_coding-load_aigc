// 为了让js更好地适合大型企业级开发，原型式的面向对象可以升级为传统的面向对象 
// 因此可以拥抱更多的其他语言程序员
// class extend implement  oo（面向对象）的能力也就发挥出来了
// 虽然是es5没有的class ，本质仍然是原型式的，只是语法糖
class EditInPlace {
    constructor(storageKey, container, value) {
        this.container = container;
        this.storageKey = storageKey;
        this._value = value; // 使用 _value 存储实际的值
        this.createElement();
        this.attachEvents();
    }

    createElement() {
        // 动态创建一个 div
        this.editElement = document.createElement('div');
        // 将它挂载到 container 标签中
        this.container.appendChild(this.editElement);

        // 显示文本
        this.staticElement = document.createElement('span');
        this.staticElement.innerHTML = this._value;
        this.editElement.appendChild(this.staticElement);

        // 输入框
        this.fieldElement = document.createElement('input');
        this.fieldElement.type = 'text';
        this.fieldElement.value = this._value;
        this.editElement.appendChild(this.fieldElement);

        // 确定按钮
        this.saveButton = document.createElement('button');
        this.saveButton.type = 'button';
        this.saveButton.textContent = '保存';
        this.editElement.appendChild(this.saveButton);

        // 取消按钮
        this.cancelButton = document.createElement('button');
        this.cancelButton.type = 'button';
        this.cancelButton.textContent = '取消';
        this.editElement.appendChild(this.cancelButton);

        // 初始文本状态
        this.convertToText();
    }

    convertToText() {
        this.fieldElement.style.display = 'none';
        this.saveButton.style.display = 'none';
        this.cancelButton.style.display = 'none';
        this.staticElement.style.display = 'inline';
    }

    convertToEdit() {
        this.fieldElement.style.display = 'inline';
        this.saveButton.style.display = 'inline';
        this.cancelButton.style.display = 'inline';
        this.staticElement.style.display = 'none';
    }

    // 绑定事件处理
    attachEvents() {
        this.staticElement.addEventListener('click', () => {
            this.convertToEdit();
        });
        this.saveButton.addEventListener('click', () => {
            this.save();
        });
        this.cancelButton.addEventListener('click', () => {
            this.convertToText();
        });
    }

    save() {
        this.value = this.fieldElement.value;
        this.convertToText();
        // HTML5 localStorage
        localStorage.setItem(this.storageKey, this._value);
    }

    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
        this.fieldElement.value = value;
        this.staticElement.innerHTML = value;
    }
}
