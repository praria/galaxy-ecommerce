<!DOCTYPE html>
<html>
<head>
    <title>Order Page</title>
</head>
<body>
    <%- include('partials/header') %>
    <h1>Your Orders</h1>

    <ul>
        <% orders.forEach(order => { %>
            <li>
                <h3>Order ID: <%= order._id %></h3>
                <p>Status: <%= order.status %></p>
                <p>Placed At: <%= order.placedAt %></p>
                <h4>Items:</h4>
                <ul>
                    <% order.cart.products.forEach(item => { %>
                        <li><%= item.product.name %> - Quantity: <%= item.quantity %></li>
                    <% }) %>
                </ul>
            </li>
        <% }) %>
    </ul>

    <form action="/order" method="POST">
        <input type="hidden" name="cartId" value="1">
        <button type="submit">Place Order</button>
    </form>
</body>
</html>
