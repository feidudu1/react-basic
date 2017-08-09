var EventEmiter = require('events').EventEmiter;
var assign = require('object-assign');

var ListStore = assign({}, EventEmiter.prototype, {
    items: [],
    getAll: function () {
        return this.items;
    },
    addNewItemHandler: function (text) {
        this.items.push(text);
    },
    emitChange: function () {
        this.emit('change');
    },
    addChangeListener: function (callback) {
        this.on('change', callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener('change',callback);
    }
})

module.exports = ListStore;
