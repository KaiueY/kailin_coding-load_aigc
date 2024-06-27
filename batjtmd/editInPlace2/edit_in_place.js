function EditInPlace(storageKey, container, value) {
    this.container = container;
    this.storageKey = storageKey;
    this.value = value;
    this.createElement();
    console.log(this.value);
}

EditInPlace.prototype = {
    createElement: function () {
        this.editElement = document.createElement('div');
        this.container.appendChild(this.editElement);

        this.staticElement = document.createElement('span');
        this.staticElement.innerHTML = this.value;
        this.editElement.appendChild(this.staticElement);

        this.fieldElement = document.createElement('input');
        this.fieldElement.type = 'text';
        this.fieldElement.value = this.value;
        this.fieldElement.placeholder = this.value;
        this.editElement.appendChild(this.fieldElement);

        this.updateInputWidth();
        this.convertToText();
        this.attachEvents();
    },

    convertToText: function () {
        this.fieldElement.style.display = 'none';
        this.staticElement.style.display = 'inline';
    },

    convertToEdit: function () {
        this.updateInputWidth();
        this.fieldElement.style.display = 'inline';
        this.staticElement.style.display = 'none';
        this.fieldElement.focus();
    },

    attachEvents: function () {
        this.staticElement.addEventListener('click', () => {
            this.convertToEdit();
        });

        document.addEventListener('click', (event) => {
            if (this.fieldElement.style.display === 'inline' && !this.editElement.contains(event.target)) {
                this.save();
            }
        });

        this.fieldElement.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                this.save();
            }
        });

        this.fieldElement.addEventListener('input', () => {
            this.updateInputWidth();
        });
    },

    updateInputWidth: function () {
        this.fieldElement.style.width = `${Math.max(this.staticElement.offsetWidth, 50)}px`;
    },

    save: function () {
        this.value = this.fieldElement.value;
        this.staticElement.innerHTML = this.value;
        this.fieldElement.placeholder = this.value;
        this.convertToText();
        localStorage.setItem(this.storageKey, this.value);
        this.saveDate();
    },

    saveDate: function () {
        fetch('http://localhost:3000/users/1', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                signature: this.value
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data, '保存成功');
            });
    }
};
