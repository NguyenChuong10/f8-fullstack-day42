
import { useMeQuery } from "../services/auth";


function Home() {

    const {isSuccess  , data: currentUsers} = useMeQuery();
    

    console.log(currentUsers);

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
            {/* Header/Navbar */}
            <nav className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <h1 className="text-2xl font-bold text-amber-600">MyApp</h1>
                        </div>
                        <div className="flex items-center space-x-4">
                            {isSuccess && <span className="text-gray-700">Xin chào {currentUsers.firstName} </span>}
                            <button
                                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-200"
                            >
                                Đăng xuất
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        Chào mừng đến với trang chủ
                    </h2>
                    <p className="text-lg text-gray-600">
                        Khám phá các tính năng tuyệt vời của chúng tôi
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {/* Feature 1 */}
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                        <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                            <span className="text-2xl">📊</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Thống kê
                        </h3>
                        <p className="text-gray-600">
                            Theo dõi và phân tích dữ liệu của bạn một cách chi tiết và trực quan
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                            <span className="text-2xl">🔒</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Bảo mật
                        </h3>
                        <p className="text-gray-600">
                            Dữ liệu của bạn được bảo vệ với công nghệ mã hóa hiện đại
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                            <span className="text-2xl">⚡</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Nhanh chóng
                        </h3>
                        <p className="text-gray-600">
                            Trải nghiệm tốc độ xử lý nhanh và hiệu suất cao
                        </p>
                    </div>

                    {/* Feature 4 */}
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                            <span className="text-2xl">🎨</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Giao diện đẹp
                        </h3>
                        <p className="text-gray-600">
                            Thiết kế hiện đại, thân thiện và dễ sử dụng
                        </p>
                    </div>

                    {/* Feature 5 */}
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                        <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                            <span className="text-2xl">🌐</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Đa nền tảng
                        </h3>
                        <p className="text-gray-600">
                            Hoạt động mượt mà trên mọi thiết bị và trình duyệt
                        </p>
                    </div>

                    {/* Feature 6 */}
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                        <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                            <span className="text-2xl">💬</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Hỗ trợ 24/7
                        </h3>
                        <p className="text-gray-600">
                            Đội ngũ hỗ trợ luôn sẵn sàng giúp đỡ bạn mọi lúc
                        </p>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl shadow-2xl p-8 text-center text-white">
                    <h3 className="text-3xl font-bold mb-4">
                        Sẵn sàng bắt đầu?
                    </h3>
                    <p className="text-lg mb-6 opacity-90">
                        Khám phá thêm nhiều tính năng tuyệt vời khác
                    </p>
                    <button className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-200 transform hover:scale-105">
                        Tìm hiểu thêm
                    </button>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-8 mt-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p>&copy; 2025 MyApp. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Home;