import React from "react";
import classes from "./profile-details.module.scss";
import Link from "next/link";

const ProfileDetails = () => {
  return (
    <div className={classes.profileContainer}>
      <div className={classes.profileWrapper}>
        <div className={classes.profilePhotoContainer}>
          <div className={classes.profilePhotoWrapper}>
            <div className={classes.profilePhoto}>
              <div className={classes.relative}>
                <img
                  src="https://picsum.photos/200"
                  role="presentation"
                  alt="Avatar of user Onuchukwu Adebayo"
                  width={150}
                  height={150}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.profileDetailsContainer}>
          <div className={classes.profileDetailsWrapper}>
            <div className={classes.profileDetailsTop}>
              <div className={classes.profileName}>Onuchukwu Adebayo</div>
              <div className={classes.editProfileContainer}>
                <a
                  className={classes.editProfileLink}
                  href="https://unsplash.com/account"
                >
                  <svg
                    width={32}
                    height={32}
                    className="n16BS"
                    viewBox="0 0 24 24"
                    version="1.1"
                    aria-hidden="false"
                  >
                    <desc lang="en-US">A pencil</desc>
                    <path d="m14.1 6.2 3.8 3.8L6.8 21H3v-3.8l11.1-11Zm6.6-.6-2.3-2.3c-.4-.4-1-.4-1.4 0l-1.8 1.8L19 8.9 20.7 7c.4-.3.4-1 0-1.4Z" />
                  </svg>
                  Edit profile
                </a>
              </div>
            </div>
            <div className={classes.profileDetailsBottom}>
              <div className={classes.profileDescription}>
                Discover my favorite things, dreams, and wishes. Let's turn
                imagination into reality together.
              </div>
              <Link href="https://ponnle.xyz" target="_blank">
                <div className={classes.profileDescription}>
                  https://ponnle.xyz
                </div>
              </Link>
              {/* <div className="cKTRE">
                <div className="F_5sH">
                  <div className="EvQHG">
                    <div className="MXkxY">
                      <svg
                        width={32}
                        height={32}
                        className="xFKwB"
                        viewBox="0 0 24 24"
                        version="1.1"
                        aria-hidden="false"
                      >
                        <desc lang="en-US">An X outlined</desc>
                        <path d="M14.59 8 12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8ZM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z" />
                      </svg>
                      Not available for hire
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
