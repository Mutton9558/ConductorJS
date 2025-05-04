const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());

// app.get("/fetchUser", (req, res) => {
//     res.json([
//         {
//             "user" : "Mutton",
//             "pass" : "adnaidbqwiub"
//         }
//     ])
// })

app.listen(5000, ()=>{
    console.log("Server started on port 5000!");
})
