const app = require('./app');
require('dotenv').config({ path: './.env' });
const chalk = require('chalk');

app.listen(5050, () => {
    console.log(
        chalk.cyanBright(
            `Server is running on ${chalk.blueBright(
                `http://localhost:${process.env.PORT}`
            )}`
        )
    );
});
