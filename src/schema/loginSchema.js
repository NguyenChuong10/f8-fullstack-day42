import {z} from "zod";

const schemaLogin = z.object({
    email:z.email("Email không hợp lệ").min(1, "Email là bắt buộc"),              
    password:z.string()
                .min(8,"Mật khẩu phải có ít nhất 8 ký tự"),
})

export default schemaLogin;