import "./logOutCard.css";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";

const LogOutCard = () => {

    const { setIsUserLoggedIn } = useAuth();
    const navigate = useNavigate();

    const handleLogOutClick = () => {
        setIsUserLoggedIn(false);
        navigate("/")
        toast.success('LoggedOut successfully!')
    }

    return (
        <div className="ap_logout-card-section auth-card-section">
            <div className="ap_logout-card-container auth-card-container">

                <div className="ap_logout-card auth-card">
                    <div className="ap_logout-first-section">
                        <div className="et_circular-wbn-avatars">
                            <img
                                className="et_circular-avatar wbn l-avatar b-rad4"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdnD4e6B_8RzF8ZOT4kg-5OKSJVauyqxhZFw&usqp=CAU"
                                alt="circular avatar" />
                            <div className="et_notifi-avatar-n green b-rad4 l-avatar-bn"></div>
                        </div>
                        <h4>APRIZE</h4>
                        <p>aprize@gmail.com</p>
                        <div className="ap_logout-manage-account">
                            <p className="fw-2 b-rad4">
                                <a href="#">Manage Your Account</a>
                            </p>
                        </div>
                    </div>
                    <div className="ap_logout-second-section">
                        <p className="a-tl">
                            <a href="=#">
                                <span>+</span>
                                Add another acount
                            </a>
                        </p>
                    </div>
                    <div className="ap_logout-btn">
                        <button className="et_p-simple-btn action-color btn" onClick={handleLogOutClick}>
                            <a href="#">Logout</a>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export { LogOutCard };