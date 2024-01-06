import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./authContext";

const UserImageContext = createContext();

const UserImageProvider = ({ children }) => {
	const [auth, setAuth] = useAuth();
	const [userImage, setUserImage] = useState({
		image: "",
	});

	useEffect(() => {
		const fetchImage = async () => {
			if (auth.token) {
				const { data } = await axios.get("/user-image");
				console.log(data);
				if (data.error) {
					console.log(data.error);
				} else {
					setUserImage({
						...userImage,
						image: data.userImageURL,
					});
				}
			}
		};
		fetchImage();
	}, [auth]);

	return (
		<UserImageContext.Provider value={[userImage, setUserImage]}>
			{children}
		</UserImageContext.Provider>
	);
};

const useUserImage = () => {
	return useContext(UserImageContext);
};

export { useUserImage, UserImageProvider };
