'use strict';
const store = (function () {
    
        const items = [
          { id: cuid(), name: 'apples', checked: false },
          { id: cuid(), name: 'oranges', checked: false },
          { id: cuid(), name: 'milk', checked: true },
          { id: cuid(), name: 'bread', checked: false }
        ];
        let hideCheckedItems = false;
        let searchTerm = '';

        const findById = function(id) {
          return store.items.find(item => item.id === id);
        };

        const addItem = function(name) {
          try {
            Item.validateName(name);
            this.items.push(Item.create(name));
          } catch(err) {
            console.error(err.message);
          }
        }

        const findAndToggleChecked = function(id) {
          let foundItem = store.findById(id);
          foundItem.checked = !foundItem.checked;
        }
        
        const findAndUpdateName = function(id, newName) {
          try {
            Item.validateName(newName);
            let foundItem = store.findById(id);
            foundItem.name = newName;
          } catch(err) {
              console.error(`Cannot update name: ${err.message}`);
          }
        }
        
        const findAndDelete = function(id) {
          this.items = this.items.filter(item => item.id !== id);
        }

        return {
            items,
            hideCheckedItems,
            searchTerm,
            findById,
            addItem,
            findAndToggleChecked,
            findAndUpdateName,
            findAndDelete

        }
      
}() );