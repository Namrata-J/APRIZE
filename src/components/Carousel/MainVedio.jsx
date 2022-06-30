import "./vedioCarousel.css";

const MainVedio = () => {
    return (
        <div className="ap_main-vedio">
            <video width="100%" src="https://tinyurl.com/yrcuf5sc" autoPlay loop muted />
            <div className="ap_main-vedio-overlay-text">
                <h4>APRIZE</h4>
            </div>
        </div>
    );
}

export { MainVedio };