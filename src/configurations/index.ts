require('dotenv').config();

interface IConfiguration {
    mail: {
        host: string;
        port: number;
        user: string;
        password: string;
    }
}

export default ():IConfiguration => ({
    mail: {
        host: process.env.MAIL_HOST,
        port: parseInt(process.env.MAIL_PORT),
        user: process.env.MAIL_USER,
        password: process.env.MAIL_PASSWORD,
    }
});
