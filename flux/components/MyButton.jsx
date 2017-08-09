var React = requrie('react');

var MyButton = function (props) {
    var items = props.items;
    var itemsHtml = items.map(function (listItem, i) {
        return <li key={i} >{listItem}</li>;
    });
    return <div>
        <ul>{itemsHtml}</ul>
        <button onClick={props.onClick}>New Item</button>
    </div>;
}

module.exports = MyButton;
