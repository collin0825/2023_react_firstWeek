import { useState } from "react";

const menu = [
  {
    id: 1,
    title: "珍珠奶茶",
    description: "香濃奶茶搭配QQ珍珠",
    price: 50,
    stock: 20,
  },
  {
    id: 2,
    title: "冬瓜檸檬",
    description: "清新冬瓜配上新鮮檸檬",
    price: 45,
    stock: 18,
  },
  {
    id: 3,
    title: "翡翠檸檬",
    description: "綠茶與檸檬的完美結合",
    price: 55,
    stock: 34,
  },
  {
    id: 4,
    title: "四季春茶",
    description: "香醇四季春茶，回甘無比",
    price: 45,
    stock: 10,
  },
  {
    id: 5,
    title: "阿薩姆奶茶",
    description: "阿薩姆紅茶搭配香醇鮮奶",
    price: 50,
    stock: 25,
  },
  {
    id: 6,
    title: "檸檬冰茶",
    description: "檸檬與冰茶的清新組合",
    price: 45,
    stock: 20,
  },
  {
    id: 7,
    title: "芒果綠茶",
    description: "芒果與綠茶的獨特風味",
    price: 55,
    stock: 18,
  },
  {
    id: 8,
    title: "抹茶拿鐵",
    description: "抹茶與鮮奶的絕配",
    price: 60,
    stock: 20,
  },
];

function App() {
  const [menuItem, setMenuItem] = useState(menu);
  const [toggle, setToggle] = useState(false);

  const handleUpdateStock = (id, type) => {
    const newMenu = menuItem.map((item) =>
      item.id === id
        ? {
            ...item,
            stock:
              type === "add"
                ? (item.stock += 1)
                : item.stock > 1
                ? (item.stock -= 1)
                : item.stock,
          }
        : item
    );
    setMenuItem(newMenu);
  };

  const handleChangeTitle = (e, id) => {
    const newList = menuItem.map((item) =>
      item.id === id ? { ...item, title: e.target.value } : item
    );
    setMenuItem(newList);
  };
  return (
    <table>
      <thead>
        <tr>
          <th scope="col">品項</th>
          <th scope="col">描述</th>
          <th scope="col">價格</th>
          <th scope="col">庫存</th>
        </tr>
      </thead>
      <tbody>
        {menuItem.map((item) => (
          <tr key={item.id}>
            <td>
              {toggle ? (
                <input
                  type="text"
                  value={item.title}
                  onChange={(e) => handleChangeTitle(e, item.id)}
                  style={{ width: `80px` }}
                  onBlur={() => setToggle(!toggle)}
                />
              ) : (
                <span onClick={() => setToggle(!toggle)}>{item.title}</span>
              )}
            </td>
            <td>{item.description}</td>
            <td>{item.price}</td>
            <button onClick={() => handleUpdateStock(item.id, "minus")}>
              -
            </button>
            <td>{item.stock}</td>
            <button onClick={() => handleUpdateStock(item.id, "add")}>+</button>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;
