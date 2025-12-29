import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import schemaLogin from "../../schema/loginSchema";
import { useLoginMutation, useMeQuery } from "../../services/auth";
import { useNavigate , Link } from "react-router";

export default function Login() {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const {register , handleSubmit ,formState : {errors}} = useForm({resolver : zodResolver(schemaLogin) });
   
    const [loginUser , response] = useLoginMutation();


    const{ isSuccess } = useMeQuery();

    useEffect(() => {
        if(isSuccess) {
            navigate("/")
        }
    },[isSuccess , navigate])

    console.log(response)

    useEffect(() => {
       if(response.isSuccess){
            const { access_token  } = response.data; 
            localStorage.setItem("access_token" , access_token)
            navigate("/")
       }
    }, [response , navigate]);

    const handleLogin = async (data) => {
        try{
            console.log("Data từ form");
            console.log(data);
            console.log("Json String");
            console.log(JSON.stringify(data, null , 2));
            const result = await loginUser(data).unwrap();
            console.log("Đăng nhập thành công " , result);
            alert("Bạn đã đăng nhập thành công")
        }catch(error){
            console.error("Lỗi đăng nhập " , error);
            if(error.data) {
            console.log("Error data : " , error.data);
        }
    }
};

    return (
        <form
            onSubmit={handleSubmit(handleLogin)}
            className="w-full min-h-screen bg-amber-100 flex items-center justify-center p-4"
        >
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center">
                    Đăng Nhập
                </h2>

                <div className="space-y-4">
                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-700 mb-1"
                        >
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            {...register("email")}
                            className="w-full text-black border border-gray-300 rounded px-4 py-2 bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                            type="email"
                            id="email"
                            placeholder="example@email.com"
                        />
                        {errors.email && (
                            <p className="text-red-400">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Password */}
                    <div className="relative">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-700 mb-1"
                        >
                            Mật khẩu <span className="text-red-500">*</span>
                        </label>
                        <input
                            {...register("password")}
                            className="w-full text-black border border-gray-300 rounded px-4 py-2 bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                            type={showPassword ? "text" : "password"}
                            id="password"
                            placeholder="Nhập mật khẩu"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-11 right-2 px-3 flex items-center text-gray-500 hover:text-amber-600"
                        >
                            {showPassword ? "👁" : "🙈"}
                        </button>
                        {/* {errors.password && (
                            <p className="text-red-400">{errors.password.message}</p>
                        )} */}
                    </div>

                    {/* Submit */}
                    <button
                        className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded transition duration-200 mt-6"
                    >
                        Đăng Nhập
                    </button>
                </div>

                {/* Footer */}
                <p className="text-center text-sm text-gray-600 mt-4">
                    Chưa có tài khoản?{" "}
                    <span className="text-amber-600 hover:text-amber-700 font-semibold cursor-pointer">
                        <Link to ="/register"> Đăng ký </Link>
                    </span>
                </p>
            </div>
        </form>
    );
}
