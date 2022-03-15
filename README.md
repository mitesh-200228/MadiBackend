# MadiBackend

You have to give command "node ./server.js" for running local server in your pc
After that set enviornment variables (name given in .env.example file) . But still if you dont want to change it , you can use mine , i am giving permission

DB used : MongoDB Cloud 

curl --location --request POST 'localhost:4000/reports' \ <br/>
--header 'Content-Type: application/json' \ <br/>
--data-raw '{ <br/>
    "reportDetails":{ <br/>
        "userID":"user-1", <br/>
        "marketID":"market-2", <br/>
        "marketName":"Vashi Navi Mumbai", <br/>
        "cmdtyID":"cmdty-2", <br/>
        "marketType":"Mandi", <br/>
        "cmdtyName":"Potato", <br/>
        "priceUnit":"Pack", <br/>
        "convFctr":7, <br/>
        "price":16 <br/>
    } <br/>
 }' <br/>
