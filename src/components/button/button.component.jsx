import './button.styles.scss';

const buttonAesthetic_list = {
    google: "google-aesthetic-button",
    inverted: 'inverted-aesthetic-button'
};

const Button = ({children, buttonAesthetic, ...otherProperties}) => {
    return (
        <button className={`button-container ${buttonAesthetic_list[buttonAesthetic]}`}
                          {...otherProperties}>{children}</button>
        );
};

export default Button;