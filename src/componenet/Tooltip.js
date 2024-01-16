import React from "react";

class Tooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTooltipVisible: false,
    };
  }

  showTooltip = () => {
    this.setState({ isTooltipVisible: true });
  };

  hideTooltip = () => {
    this.setState({ isTooltipVisible: false });
  };

  render() {
    const { text, children } = this.props;
    const { isTooltipVisible } = this.state;

    return (
      <div
        className="tooltip-container"
        onMouseEnter={this.showTooltip}
        onMouseLeave={this.hideTooltip}
      >
        <span className="tooltip-text">{text}</span>
        {children}
        {isTooltipVisible && <div className="tooltip">{text}</div>}
      </div>
    );
  }
}

export default Tooltip;
