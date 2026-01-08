import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <section className="banner-section">
      <div className="banner-container">
        <div className="badge">#1 JOB PORTAL</div>
        <h1 className="banner-title">
          Build your very own job <br /> portal with <span>Jobtale</span>
        </h1>
        <p className="banner-subtitle">
          Discover your next career move with confidence and ease. <br />
          Join over 10,000+ professionals today.
        </p>

        <div className="search-pill">
          <div className="input-box">
            <span className="icon">🔍</span>
            <input type="text" placeholder="Search job title..." />
          </div>
          <div className="line-divider"></div>
          <div className="input-box">
            <span className="icon">📍</span>
            <input type="text" placeholder="Location" />
          </div>
          <button className="btn-search">Search</button>
        </div>

        <div className="social-proof">
          <div className="avatars">
            <img src="https://i.pravatar.cc/100?img=1" alt="u1" />
            <img src="https://i.pravatar.cc/100?img=2" alt="u2" />
            <img src="https://i.pravatar.cc/100?img=3" alt="u3" />
          </div>
          <div className="rating">
            <div className="stars">
              ★★★★★ <span>4.9</span>
            </div>
            <p>Over 100+ reviews</p>
          </div>
        </div>
      </div>

      <div className="visual-elements">
        <div className="floating-ui ui-left">
          <div className="skeleton-line short">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2_7rsDfoBr-_iEa95Hq-_9zF90xiD_kxVdg&s" alt="banner-1" />
          </div>
          <div className="skeleton-line long"></div>
        </div>
        <div className="floating-ui ui-main">
          <div className="ui-header"></div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGtwCoYLV0atsh36Uvepvnt5TJ40I1JmI9IQ&s" alt="banner-2" />
          <div className="ui-body"></div>
        </div>
        <div className="floating-ui ui-right">
          <div className="skeleton-bar">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS151gEewRFelxpeGbgnB0QcjyaTPpRUwluBg&s" alt="banner-3" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
