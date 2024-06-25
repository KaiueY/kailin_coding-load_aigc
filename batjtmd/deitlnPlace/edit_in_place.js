/**
 * @func 就地编辑
 * @param {ele} container 挂载点
 * @author kailin
 * @date 2024/6/25
 */
// es6 2015 让代码更加优雅 好读   value='' 设置默认值 
function EditInPlace(storageKey,container, value) {
    this.container = container;
    this.storageKey = storageKey;
    this.value = value;
    // 将动态创建文本和编辑input的DOM封装，代码管理好
    this.createElement();
    console.log(this.value);
}

EditInPlace.prototype = {
    createElement: function () {
        // Dom树 动态创建一个div 
        this.editElement = document.createElement('div');
        // 将它挂载到container标签中
        this.container.appendChild(this.editElement);

        // signature 文本值
        this.staticElement = document.createElement('span');
        this.staticElement.innerHTML = this.value;
        this.editElement.appendChild(this.staticElement);

        // input 
        this.fieldElement = document.createElement('input');
        this.fieldElement.type = 'text';
        this.fieldElement.value = this.value;
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

        // 绑定事件处理
        this.attachEvents();
    },

    // 文本状态
    convertToText: function () {
        this.fieldElement.style.display = 'none';
        this.saveButton.style.display = 'none';
        this.cancelButton.style.display = 'none';
        this.staticElement.style.display = 'inline';
    },

    // 编辑状态
    convertToEdit: function () {
        this.fieldElement.style.display = 'inline';
        this.saveButton.style.display = 'inline';
        this.cancelButton.style.display = 'inline';
        this.staticElement.style.display = 'none';
    },

    // 绑定事件处理
    attachEvents: function () {
        this.staticElement.addEventListener('click', () => {
            this.convertToEdit();
        });
        this.saveButton.addEventListener('click', () => {
            this.save();
            this.saveDate();
        });
        this.cancelButton.addEventListener('click', () => {
            this.convertToText(); 
        });
    },

    save: function () {
        this.value = this.fieldElement.value;
        this.staticElement.innerHTML = this.value;
        this.convertToText();
        // html5 localStorage
        localStorage.setItem(this.storageKey, this.value);
    },
    saveDate: function () {
        let value = this.value;
        // restful = url定义的方式+Method
        // GET是读 POST创建 PUT更新 PATCH局部更新 DELETE删除
        //看见这个url 就知道啥资源    
        //修改
        //get
        fetch('http://localhost:3000/users/1',{
            method: 'PATCH',
            //请求头
            headers:{
                'Content-Type': 'application/json'
            },
            //请求体
            body: JSON.stringify({
                signature: value
            })
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data,'保存成功');
        })
    }
};
