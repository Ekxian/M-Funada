import React from "react";

const OrderSumamry = ({ cartItems, handleRemoveItem }) => {
  return (
    <div className="container">
      <div className="shadow">
        <h2 className="mb-3">Your Orders</h2>
        {Object.values(cartItems).length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Code</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody className="table-group-divider ">
              {Object.values(cartItems).map((item, index) => (
                <tr key={item.id}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <img
                      src={item.image}
                      alt={item.product}
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                      }}
                    />
                  </td>
                  <td>{item.product}</td>
                  <td>{item.code}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>{item.count}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => handleRemoveItem(item.id)}
                      className="btn btn-danger d-flex  align-items-center"
                      style={{ width: "40px", height: "40px" }}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-muted">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default OrderSumamry;
