import Link from './models/Link.model.js';
import { sequelize } from './db.js';

const dbInit = async () => {
    await sequelize.authenticate();
    await sequelize.sync();
    Link.sync();
}

export default dbInit 