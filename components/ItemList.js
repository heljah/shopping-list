"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ItemList;
var React = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ItemList() {
  const [items, setItems] = React.useState([]);
  const [itemName, setItemName] = React.useState('');
  const AddItem = props => {
    return /*#__PURE__*/React.createElement("button", {
      className: "addButton",
      style: {
        marginLeft: "2em"
      },
      onClick: () => props.onClick(props.item)
    }, "ADD");
  };
  const addNewItem = () => {
    console.log(itemName);
    setItems(items.concat(itemName));
    setItemName('');
  };
  const changeItemName = event => {
    setItemName(event.target.value);
  };
  const deleteItem = item_to_delete => {
    console.log({
      item_to_delete,
      items
    });
    setItems(items.filter(item => item != item_to_delete));
  };
  const ListItemRow = props => {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        flexDirection: "row"
      }
    }, props.index + 1, ". ", props.item, /*#__PURE__*/React.createElement("button", {
      onClick: () => deleteItem(props.item),
      style: {
        marginLeft: "auto"
      }
    }, "DELETE"));
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      width: "max-content"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "row"
    }
  }, /*#__PURE__*/React.createElement("input", {
    name: "itemName",
    value: itemName,
    onChange: changeItemName,
    onKeyDown: event => {
      if (event.key === 'Enter') return addNewItem();
    }
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(AddItem, {
    onClick: addNewItem,
    item: itemName
  })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, items.map((item, index) => /*#__PURE__*/React.createElement(ListItemRow, {
    key: index,
    index: index,
    item: item
  }))));
}