import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import schemaRegister from "../../schemas/registerSchema";
import { useEffect, useState } from "react";
import { useMeQuery, useRegisterMutation } from "../../services/auth";
import { useNavigate, Link } from "react-router";


function Register() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schemaRegister) });

    const { isSuccess } = useMeQuery();

    const [registerUser, response] = useRegisterMutation();

    useEffect(() => {
        if (isSuccess) {
            navigate("/login");
        }
    }, [isSuccess, navigate])

    useEffect(() => {
        if (response.isSuccess) {
            navigate("/login")
        }
    }, [response, navigate]);

    console.log(response.isSuccess);


    const handleRegister = async (data) => {
        try {
            console.log(" DATA TỪ FORM ");
            console.log(data);
            console.log(" JSON STRING ");
            console.log(JSON.stringify(data, null, 2));
            const result = await registerUser(data).unwrap();
            console.log("Đăng ký thành công:", result);
            alert("bạn đã đăng ký thành công")
        } catch (err) {
            console.error("Lỗi đăng ký:", err);
            if (err.data) {
                console.error("Error data:", err.data);
            }

        }
    };

    return (
        <form onSubmit={handleSubmit(handleRegister)} className="w-full min-h-screen bg-amber-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center">
                    Đăng Ký Tài Khoản
                </h2>

                <div className="space-y-4">
                    <div>
                        <label htmlFor="hoVaTen" className="block text-sm font-semibold text-gray-700 mb-1">
                            tên <span className="text-red-500">*</span>
                        </label>
                        <input
                            {...register('firstName')}
                            className="w-full text-black border border-gray-300 rounded px-4 py-2 bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                            type="text"
                            id="name"
                            placeholder="Nhập tên"
                        />
                        {errors.name && <p className="text-red-400">{errors.name.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-1">
                            Họ <span className="text-red-500">*</span>
                        </label>
                        <input
                            {...register('lastName')}
                            className="w-full text-black border border-gray-300 rounded px-4 py-2 bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                            type="text"
                            id="firstName"
                            placeholder="Nhập họ"
                        />
                        {errors.firstName && <p className="text-red-400">{errors.firstName.message}</p>}
                    </div>


                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            {...register("email")}
                            className="w-full text-black border border-gray-300 rounded px-4 py-2 bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                            type="email"
                            id="email"
                            placeholder="example@email.com"
                        />
                        {errors.email && <p className="text-red-400" >{errors.email.message}</p>}
                    </div>



                    <div className="relative">
                        <label htmlFor="matKhau" className="block text-sm font-semibold text-gray-700 mb-1">
                            Mật khẩu <span className="text-red-500">*</span>
                        </label>
                        <input
                            className="w-full text-black border border-gray-300 rounded px-4 py-2 bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                            type={showPassword ? "text" : "password"}
                            {...register("password")}
                            id="matKhau"
                            placeholder="Nhập mật khẩu (tối thiểu 6 ký tự)"
                        />
                        <button type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-11 right-2 px-3 flex items-center text-gray-500 hover:text-blue-600" >
                            {showPassword ? "👁" : "🙈"}
                        </button>
                        {errors.password && <p className="text-red-400">{errors.password.message}</p>}
                    </div>

                    <div className="relative">
                        <label htmlFor="xacNhanMatKhau" className="block text-sm font-semibold text-gray-700 mb-1">
                            Xác nhận mật khẩu <span className="text-red-500">*</span>
                        </label>
                        <input
                            className="w-full text-black border border-gray-300 rounded px-4 py-2 bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                            type={showConfirmPassword ? "text" : "password"}
                            {...register("password_confirmation")}
                            id="xacNhanMatKhau"
                            placeholder="Nhập lại mật khẩu"
                        />
                        <button type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute inset-y-11 right-2 px-3 flex items-center text-gray-500 hover:text-blue-600" >
                            {showConfirmPassword ? "👁" : "🙈"}
                        </button>
                        {errors.password_confirmation && <p className="text-red-400">{errors.password_confirmation.message}</p>}
                    </div>

                    <button
                        className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded transition duration-200 mt-6"
                    >
                        Đăng Ký
                    </button>
                </div>

                <p className="text-center text-sm text-gray-600 mt-4">
                    Đã có tài khoản? <span className="text-amber-600 hover:text-amber-700 font-semibold cursor-pointer"><Link to="/login"> Đăng nhập </Link></span>
                </p>
            </div>
        </form>

    );
}

export default Register;