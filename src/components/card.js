import React from 'react';

class CardP extends React.PureComponent {
    render() {
        return (
            <div className="project-card shadow-3">
                {/* Card Title and Background Image */}
                <div
                    className="card-title"
                    style={{
                        background: "url(" + this.props.bgImage + ") center / cover",
                    }}
                >
                    <span>{this.props.projectName}</span>
                </div>

                {/* Description */}
                <div className="card-text">
                    <span style={{ fontWeight: "bold" }}>Tech Stack:-</span>
                    <b> {this.props.techStack}</b>
                    <br /><br />
                    <p>{this.props.detail}</p>
                </div>

                {/* Git-Link */}
                <div className="card-actions">
                    <a
                        className="card-btn"
                        href={this.props.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        );
    }
}

export default CardP;
