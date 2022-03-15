# MadiBackend

You have to give command "node ./server.js" for running local server in your pc
After that set enviornment variables (name given in .env.example file) . But still if you dont want to change it , you can use mine , i am giving permission

DB used : MongoDB Cloud 

# curl --location --request POST 'localhost:4000/reports' \
# --header 'Content-Type: application/json' \
# --data-raw '{
#    "reportDetails":{
#        "userID":"user-1",
#        "marketID":"market-2",
#        "marketName":"Vashi Navi Mumbai",
#        "cmdtyID":"cmdty-2",
#        "marketType":"Mandi",
#        "cmdtyName":"Potato",
#        "priceUnit":"Pack",
#        "convFctr":7,
#        "price":16
#    }
# }'
