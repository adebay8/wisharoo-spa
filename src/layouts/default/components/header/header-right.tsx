import React from "react";
import classes from "./header-right.module.scss";
import { actionSetModalItem, useAppContext } from "@/store";
import dynamic from "next/dynamic";
import { CreateList } from "@/components";
import cx from "classnames";
import Link from "next/link";

const Modal = dynamic(() => import("@/components/modal"), {
  ssr: false,
});

const HeaderRight = () => {
  const [{ modal }, dispatch] = useAppContext();
  return (
    <>
      <div className={classes.primaryNavSignup}>
        <div className={classes.popoverRoot} aria-haspopup="true">
          <div
            aria-describedby="82cb8546-3296-4099-a124-8543cc45e074"
            className={classes.popoverActivator}
          >
            <button
              className={classes.button}
              type="button"
              role="button"
              onClick={() =>
                dispatch(
                  actionSetModalItem({ name: "createList", value: true })
                )
              }
            >
              <div className={classes.labelWrapper}>
                <div className={classes.label}>Create list</div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <Modal
        showModal={modal.createList}
        setModalState={(state) =>
          dispatch(actionSetModalItem({ name: "createList", value: state }))
        }
      >
        <CreateList />
      </Modal>
      {/* <div className="PrimaryNav-searchLink-xVd">
        <a
          className="PrimaryNav-link-hxX e2e-PrimaryNav-search"
          href="/search/projects?tracking_source=nav20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 12 12"
            aria-labelledby="IconBase-title-2053e1f9-ef27-4779-af2b-ab9a625d037c IconBase-description-2053e1f9-ef27-4779-af2b-ab9a625d037c"
            role="graphics-symbol img"
            width="100%"
            height="100%"
          >
            <title id="IconBase-title-2053e1f9-ef27-4779-af2b-ab9a625d037c">
              search icon
            </title>
            <desc id="IconBase-description-2053e1f9-ef27-4779-af2b-ab9a625d037c">
              magnifying glass
            </desc>
            <g>
              <path d="M11.407,10.421,8.818,7.832a4.276,4.276,0,1,0-.985.985l2.589,2.589a.7.7,0,0,0,.985-.985ZM2.355,5.352a3,3,0,1,1,3,3,3,3,0,0,1-3-3Z" />
            </g>
          </svg>
        </a>
      </div>
      */}
      <ul className={classes.userControls}>
        <div className={classes.userControl}>
          <div
            aria-describedby="eb719c6a-2842-4c4e-9d13-51ea865e5e9c"
            className={classes.activator}
          >
            <li className={classes.mail}>
              <button className={classes.controlLink}>
                <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9,10.094l9-6.7615v-.75A.5735.5735,0,0,0,17.4375,2H.5625A.57351.57351,0,0,0,0,2.5835V3.318Z" />
                  <polygon points="12.389 8.981 18 13.184 18 6.667 18 4.771" />
                  <path d="M11.433,9.7,9.645,11.047a1.086,1.086,0,0,1-1.29,0L6.541,9.6875,0,14.534v.883A.573.573,0,0,0,.5625,16h16.875A.573.573,0,0,0,18,15.417v-.795Z" />
                  <polygon points="5.582 8.969 0 4.756 0 6.667 0 13.097" />
                </svg>
              </button>
            </li>
          </div>
        </div>
        <div className={classes.notificationPopover}>
          <div className={classes.activator}>
            <div className={classes.menu}>
              <div className={classes.notificationsDesktop}>
                <div className={classes.popoverActivator}>
                  <li className={classes.userControl}>
                    <button className={classes.userControlLink}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={13}
                        height={13}
                        viewBox="5641 835.999 14 17.001"
                        className="PrimaryNav-icon-r_P"
                      >
                        <g>
                          <desc>View your notifications within Behance.</desc>
                          <path d="M5648 853a2.2 2.2 0 0 0 2-2h-4a2.2 2.2 0 0 0 2 2z" />
                          <path d="M5652.57 840.692c0-1.72-1.6-2.445-3.57-2.634V836.5a.54.54 0 0 0-.572-.5h-.857a.54.54 0 0 0-.57.5v1.558c-1.97.188-3.57.916-3.57 2.634 0 7.71-2.43 7.363-2.43 8.385V850h14v-.922c0-1.077-2.43-.677-2.43-8.386z" />
                          <path d="M5648 853a2.2 2.2 0 0 0 2-2h-4a2.2 2.2 0 0 0 2 2z" />
                          <path d="M5652.57 840.692c0-1.72-1.6-2.445-3.57-2.634V836.5a.54.54 0 0 0-.572-.5h-.857a.54.54 0 0 0-.57.5v1.558c-1.97.188-3.57.916-3.57 2.634 0 7.71-2.43 7.363-2.43 8.385V850h14v-.922c0-1.077-2.43-.677-2.43-8.386z" />
                        </g>
                      </svg>
                    </button>
                  </li>
                </div>
              </div>
              {/* <div className="NotificationsMenu-notificationsMobile-kcE">
                <li className="PrimaryNav-userControl-LdV PrimaryNav-notifications-DqR e2e-NotificationBadge--notification">
                  <button
                    className="PrimaryNav-link-hxX PrimaryNav-userControlLink-JRN"
                    aria-label="Notifications"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={13}
                      height={13}
                      viewBox="5641 835.999 14 17.001"
                      className="PrimaryNav-icon-r_P"
                    >
                      <g>
                        <desc>View your notifications within Behance.</desc>
                        <path d="M5648 853a2.2 2.2 0 0 0 2-2h-4a2.2 2.2 0 0 0 2 2z" />
                        <path d="M5652.57 840.692c0-1.72-1.6-2.445-3.57-2.634V836.5a.54.54 0 0 0-.572-.5h-.857a.54.54 0 0 0-.57.5v1.558c-1.97.188-3.57.916-3.57 2.634 0 7.71-2.43 7.363-2.43 8.385V850h14v-.922c0-1.077-2.43-.677-2.43-8.386z" />
                        <path d="M5648 853a2.2 2.2 0 0 0 2-2h-4a2.2 2.2 0 0 0 2 2z" />
                        <path d="M5652.57 840.692c0-1.72-1.6-2.445-3.57-2.634V836.5a.54.54 0 0 0-.572-.5h-.857a.54.54 0 0 0-.57.5v1.558c-1.97.188-3.57.916-3.57 2.634 0 7.71-2.43 7.363-2.43 8.385V850h14v-.922c0-1.077-2.43-.677-2.43-8.386z" />
                      </g>
                    </svg>
                  </button>
                </li>
              </div> */}
            </div>
          </div>
          <div></div>
        </div>
        <li className={cx(classes.userControl, classes.profile)}>
          <div className={classes.popoverRoot}>
            <Link className={classes.activator} href="/oluwaponnle">
              <div className={classes.avatarTrigger}>
                <div
                  role="link"
                  tabIndex={0}
                  className="PrimaryNav-userControlLink-JRN e2e-PrimaryNav-link-image"
                >
                  <img
                    className="PrimaryNav-avatarImgEl-WDU"
                    alt="avatar"
                    src="https://picsum.photos/200"
                  />
                </div>
              </div>
            </Link>
          </div>
        </li>
      </ul>
    </>
  );
};

export default HeaderRight;
