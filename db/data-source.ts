import { join } from 'path';
import { SGBD } from 'src/constante/sgbdType';
import { DataSource, DataSourceOptions } from 'typeorm';


export const dataSourceOptions: DataSourceOptions = {
    type: SGBD.POSTGRES,
    username: process.env.USER_NAME,
    password: process.env.PASSWORD,
    applicationName: 'umarket',
    host: process.env.DATA_HOST_NAME,
    database: process.env.DB_NAME,
    port: parseInt(<string>process.env.PORT),
    synchronize: true,
    entityPrefix: 't',
    entities: [join(process.cwd(), 'dist/**/*.entity.js')]
}
const dataSource = new DataSource(dataSourceOptions);
export default dataSource;