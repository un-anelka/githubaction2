const express = require("express"),
    app = express();

const PORT = process.env.PORT || 3007
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`)
})

app.get("/", (req, res) => {
    res.send({ ok: false })
}) 