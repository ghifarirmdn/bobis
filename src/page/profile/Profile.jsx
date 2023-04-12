import React from "react";
import "./Profile.css";
import profile from "../../assets/image/pp.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faBook,
  faPhone,
  faUsersRectangle,
  faMessage,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import BottomNav from "../../components/BottomNav/BottomNav";

const Profile = () => {
  return (
    <>
      <div className="profile">
        <div className="card-profile">
          <div className="pp">
            <img src={profile} alt="" />
          </div>
          <div className="name">
            <h4>Tika</h4>
            <p>tika@gmail.com</p>
          </div>
        </div>

        <div className="profile-content">
          <div className="privasi">
            <div className="profile-content-left">
              <FontAwesomeIcon icon={faBook} />
              <h4>Kebijakan Privasi</h4>
            </div>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
          <div className="layanan">
            <div className="profile-content-left">
              <FontAwesomeIcon icon={faPhone} />
              <h4>Layanan</h4>
            </div>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
          <div className="about-us">
            <div className="profile-content-left">
              <FontAwesomeIcon icon={faUsersRectangle} />
              <h4>Tentang Kami</h4>
            </div>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
          <div className="bantuan">
            <div className="profile-content-left">
              <FontAwesomeIcon icon={faMessage} />
              <h4>Bantuan</h4>
            </div>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
          <div className="logout">
            <div className="profile-content-left">
              <FontAwesomeIcon icon={faRightFromBracket} />
              <h4>Logout</h4>
            </div>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        </div>
      </div>
      <BottomNav />
    </>
  );
};

export default Profile;
