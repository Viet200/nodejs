import User from "../models/user"

export const signup = async (req, res) => {
	try {
		const { email, name, password } = req.body;
		const existUser = await User.findOne({ email }).exec();
		if (existUser) {
			res.status(400).json({ message: "Tài khoản đã tồn tại" });
		}
		const user = await User({ email, name, password }).save();
		res.json({
			user: {
				_id: user._id,
				name: user.name,
				email: user.email
			}
		})
	} catch (error) {

	}
}
export const signin = async (request, response) => {
	const { email, password } = request.body
	const user = await User.findOne({ email }).exec()
	if (!user) {
		return response.status(400).json({
			message: "User không tồn tại"
		})
	}
	if (!user.authenticate(password)) {
		return response.status(400).json({
			message: "Mật khẩu không đúng"
		})
	}
	response.json({
		user: {
			_id: user._id,
			email: user.email,
			name: user.name
		}
	})
}


