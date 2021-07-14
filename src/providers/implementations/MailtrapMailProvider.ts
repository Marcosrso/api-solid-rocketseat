import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from 'nodemailer';
import Mail from "nodemailer/lib/mailer";
import config from "../../configurations";

export class MailtrapMailProvider implements IMailProvider {
    private transporter: Mail;
     
    constructor(){
        const appConfig = config();

        this.transporter = nodemailer.createTransport({
            host: appConfig.mail.host,
            port: appConfig.mail.port,
            auth: {
              user:  appConfig.mail.user,
              pass:  appConfig.mail.password,
            }
        });
    }

    async sendMail(message: IMessage): Promise<void> {
        await this.transporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.email,
            },
            from: {
                name: message.from.name,
                address: message.from.email,
            },
            subject: message.subject,
            html: message.body
        })
    }
}