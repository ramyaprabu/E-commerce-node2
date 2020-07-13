# E-commerce-node2

Download the file and run "npm install".

# To start the host

Run "npm start" to start the host.

# To create new admin

Request method:Post.
http://localhost:2019/api/admin/signup
{
 "firstName":"string",
 "lastName":"string",
 "email":"example@gmail.com",
 "password":"2244668800"   
}

# To login admin

Request method:Post.
http://localhost:2019/api/admin/login
 {
 "email":"example@gmail.com",
 "password":"2244668800"
 }
 
 # To create user
 
 Request method:Post
 http://localhost:2019/api/user/signup
 {
    "firstName":"Xxx",
    "lastName":"yyy",
    "email":"yyy@gmail.com",
    "password":"12345566"
}

# To login user

Request method:Post.
http://localhost:2019/api/user/login
 {
 "email":"uyyy@gmail.com",
 "password":"12345566"
 }
 
 # To create a categroy
 
 Request method:Post
 http://localhost:2019/api/category/create
 Header-Key:"auth-token",value:"admin login id"
{
name: String,
    slug: String.
    }
    
 # To create a new product
 
 Request method:Post
 http://localhost:2019/api/products/create
 Header-Key:"auth-token",value:"admin login id"
 {
            "name": "Jean",
        "price": 650,
        "stock": 200,
        "description": "Rough and tough ",
        "productPic": [
                { "img": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTR-H6aau8FF8y-EBXKfpWLY1fbEMlVNf2t43pSUarNHOIqvJblxHfMIzQ5rDXipgK8uVPBRgsmzpk&usqp=CAc"}
        ],
        "keyword": "Casual",
        "category": "5f074c42ff1de31dc89a28f1",
        "createdBy": "5efb5192890e8130c06d6898"
}

# To order a product

Request type:Post
http://localhost:2019/api/order/create
 Header-Key:"auth-token",value:"admin login id"
 {
    "user": "user login id",
    "order": [
        {
            "product": "product id",
            "price": 300,
            "quantity": 1
        }
    ],
    "address": "5f07522bf34bae2c98c6cee2",
    "orderDate": "09/07/2020",
    "paymentType": "upi",
    "paymentStatus": "paid",
    "isOrderCompleted": "no"
}
 
 
