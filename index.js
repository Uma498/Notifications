const Notification = (props) => {
  const { className, message, imgUrl } = props;

  return (
    <div className={`notifications-container ${className}`}>
      <img src={imgUrl} className="icon" />
      <p className="message">{message}</p>
    </div>
  );
};

const element = (
  <div className="notifications-bg-container">
    <h1 className="heading">Notifications</h1>
    <div className="notifications-list">
      <Notification
        className="primary-icon"
        message="Information Message"
        imgUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
      <Notification
        className="success-icon"
        message="Success Message"
        imgUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <Notification
        className="warning-icon"
        message="Warning Message"
        imgUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />
      <Notification
        className="danger-icon"
        message="Error Message"
        imgUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
