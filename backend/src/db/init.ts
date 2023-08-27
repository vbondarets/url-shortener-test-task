import Link from './models/Link.model.js';
import { sequelize } from './db.js';

const dbInit = async () => {
    await sequelize.authenticate().catch(error => {
        console.log(error);
        process.exit();
    });
    await sequelize.sync();
    await Link.sync();
}

export default dbInit 