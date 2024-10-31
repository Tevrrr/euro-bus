import axios from "axios";

export const sendMsg = (phone: string, text?: string) => {
    const token = process.env.TOKEN_TG;
    const chatID = process.env.CHAT_ID_TG;
    let msg = `<b>Телефон</b>: ${phone}`;
    if (text) {
        msg += `\n<b>Дополнительная информация</b>:  ${text}`;
    }

    msg = encodeURI(msg)
    axios.post(
		`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatID}&parse_mode=html&text=${msg}`
	);

}