/* yaha par bss connection ka code hai. 
baaki ka jitna bhi baccha hua code hai woh sab code hum ne app.js main rakh diye hai*/

const app = require("./src/app"); // import ho gya hai
let port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
