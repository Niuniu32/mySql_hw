var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,
    user: "root",

    password: "",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    main();
});

function main() {
    connection.query("SELECT product_name,department_name,price,stock_quantity FROM products", function (err, res) {
        console.log("-----------------------------------")
        for (var i = 0; i < res.length; i++) {
            console.log("Name:" + res[i].product_name + "\n")
            console.log("Department:" + res[i].department_name + "\n")
            console.log("Price:" + res[i].price + "\n")
            console.log("Stock:" + res[i].stock_quantity + "\n")
            console.log("-----------------------------------")
        }
        order();
    })

}
function order() {
    inquirer
        .prompt([
            {
                name: "productName",
                type: "input",
                meesage: "What would you like to order?",
            },
            {
                name: "quantity",
                type: "input",
                message: "How many would you like to order?"
            }
        ])
        .then(function (answer) {
            var query = "SELECT stock_quantity,price From products WHERE ?";
            connection.query(query, { product_name: answer.productName }, function (err, res) {
                if (parseInt(res[0].stock_quantity) >= parseInt(answer.quantity)) {

                    var current_stock = (parseInt(res[0].stock_quantity) - parseInt(answer.quantity));
                    console.log(current_stock)
                    connection.query("UPDATE products SET ? WHERE ?", [
                        {
                            stock_quantity: current_stock
                        },
                        {
                            product_name: answer.productName
                        }
                    ], function (err) {
                        //if (error) throw err;
                    }
                    );
                    console.log("Total Price:");
                    console.log(parseInt(res[0].price) * parseInt(answer.quantity));
                    console.log("Order completed");
                    main()
                    }
                else {
                    console.log("Insufficient quantity!");
                    main()
                }
            })
        })
        
}