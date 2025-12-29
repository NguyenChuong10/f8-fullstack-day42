
import { z } from "zod";


const schemaRegister = z.object({
    firstName:z.string().min(1, " Tên là bắt buộc"),
    lastName:z.string().min(1, " họ là bắt buộc"),
    email:z.email("Email không hợp lệ").min(1, "Email là bắt buộc"),              
    password:z.string()
                .min(8,"Mật khẩu phải có ít nhất 8 ký tự"),
                
    password_confirmation:z.string()
                       .min(1,"xác nhận mật khẩu là bắt buộc")
})
.refine((data) => data.password === data.password_confirmation, {
  message: "mật khẩu xác nhận không khớp ",
  path: ["password_confirm"],
});


export default schemaRegister;
