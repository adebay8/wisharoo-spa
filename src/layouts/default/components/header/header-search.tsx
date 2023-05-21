import React, { useState } from "react";
import cx from "classnames";
import classes from "./header.module.scss";
import Link from "next/link";

const HeaderSearch = () => {
  const [inputFocused, setInputFocused] = useState(false);

  return (
    <>
      <div className={classes.primaryNavSiteSearch}>
        <div
          className={cx(classes.searchTypeAhead, classes.searchContainer)}
          tabIndex={-1}
        >
          <div className={classes.searchInputWrap}>
            <div className={classes.searchIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 12 12"
                aria-labelledby="IconBase-title-0d21b1a9-f60f-460b-a14f-7a69d1c8c34f IconBase-description-0d21b1a9-f60f-460b-a14f-7a69d1c8c34f"
                role="graphics-symbol img"
                width="100%"
                height="100%"
                className={classes.icon}
                aria-hidden="true"
              >
                <title id="IconBase-title-0d21b1a9-f60f-460b-a14f-7a69d1c8c34f">
                  search icon
                </title>
                <desc id="IconBase-description-0d21b1a9-f60f-460b-a14f-7a69d1c8c34f">
                  magnifying glass
                </desc>
                <g>
                  {/*[*/}
                  <path d="M11.407,10.421,8.818,7.832a4.276,4.276,0,1,0-.985.985l2.589,2.589a.7.7,0,0,0,.985-.985ZM2.355,5.352a3,3,0,1,1,3,3,3,3,0,0,1-3-3Z" />
                  {/*]*/}
                </g>
              </svg>
            </div>
            <form
              className={classes.searchForm}
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <label htmlFor="search">
                {/**/}
                <input
                  type="search"
                  name="search"
                  autoComplete="off"
                  autoCapitalize="off"
                  className={classes.searchInput}
                  placeholder="Search…"
                  tabIndex={0}
                  aria-label="Search Behance"
                  aria-controls="34e572d4-5826-4a7f-a9be-97928beacf3c"
                  onFocus={() => setInputFocused(true)}
                />
              </label>
              <input
                type="hidden"
                name="tracking_source"
                defaultValue="typeahead_nav_direct"
              />
              {/**/}
              {/**/}
            </form>
            <div
              className={cx(classes.suggestions, {
                [classes.focused]: inputFocused,
              })}
              id="34e572d4-5826-4a7f-a9be-97928beacf3c"
              aria-busy="false"
            >
              <div
                className={classes.suggestionsInner}
                role="region"
                aria-live="polite"
              >
                {/**/}
                <ul>
                  <li>
                    <span className={classes.searchResultTypeHeading}>
                      Suggested Searches
                    </span>
                    <ul>
                      <li className={classes.suggestion}>
                        <a
                          className={classes.suggestionLink}
                          href="/search/projects?search=landing+page&amp;tracking_source=typeahead_nav_suggested_term"
                          tabIndex={-1}
                        >
                          accessories
                        </a>
                      </li>
                      <li className={classes.suggestion}>
                        <a
                          className={classes.suggestionLink}
                          href="/search/projects?search=typography&amp;tracking_source=typeahead_nav_suggested_term"
                          tabIndex={-1}
                        >
                          sportswear
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <div
                  className={cx(
                    classes.contentTypeShortcutWrapper,
                    classes.contentTypeShortcutAfterResults
                  )}
                >
                  <span
                    className={cx(
                      classes.searchResultTypeHeading,
                      classes.headingDefault
                    )}
                  >
                    {/*[*/}Sort &amp; filter all:{/*]*/}
                  </span>
                  <ul className={classes.searchContentTypeSelectorWrapper}>
                    {/*[*/}
                    <li>
                      <Link
                        className={classes.searchContentTypeButton}
                        href="/search/projects?tracking_source=typeahead_nav_suggestion_filter"
                        type="button"
                        target="_self"
                        role="link"
                        aria-label="View the most recommended projects across Behance from both our users and curators."
                        tabIndex={-1}
                      >
                        <div
                          className={
                            classes.searchContentTypeButtonLabelWrapper
                          }
                        >
                          <div className={classes.searchContentTypeButtonIcon}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <defs />
                              <g
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.25"
                              >
                                <path d="M18.858 12.392L12.5 18.75l-3.125.625L10 16.25l6.358-6.358a1.762 1.762 0 012.493 0l.007.007a1.762 1.762 0 010 2.493z" />
                                <path d="M6.875 16.875h-5a1.25 1.25 0 01-1.25-1.25V1.875a1.25 1.25 0 011.25-1.25h8.857a1.25 1.25 0 01.883.366l2.394 2.394a1.25 1.25 0 01.366.883v2.607" />
                                <path d="M4.375 4.687A.312.312 0 114.062 5a.312.312 0 01.312-.312" />
                                <path d="M10.833 9.2L9.375 6.875a.624.624 0 00-1.032-.012L6.677 9.239 5.65 8.417a.625.625 0 00-.911.141l-1.614 3.317h5" />
                              </g>
                            </svg>
                          </div>
                          <div className={classes.searchContentTypeButtonLabel}>
                            Bestsellers
                          </div>
                          <div
                            className={cx(
                              classes.searchContentTypeButtonIcon,
                              classes.trailing
                            )}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={8}
                              height="13.42"
                              viewBox="0 0 8 13.42"
                              className={classes.searchContentTypeButtonArrow}
                              aria-hidden="true"
                            >
                              <path d="M1.28,0a1.07,1.07,0,0,1,.25,0L1.77.1A.91.91,0,0,1,2,.21,1.2,1.2,0,0,1,2.2.38L7.62,5.8a1.52,1.52,0,0,1,.28.43,1.15,1.15,0,0,1,.1.48,1.16,1.16,0,0,1-.1.49,1.34,1.34,0,0,1-.28.42L2.2,13a1.42,1.42,0,0,1-.43.29,1.32,1.32,0,0,1-.48.09,1.37,1.37,0,0,1-.49-.09A1.1,1.1,0,0,1,.38,13a1.34,1.34,0,0,1-.28-.42,1.23,1.23,0,0,1,0-1,1.34,1.34,0,0,1,.28-.42L4.9,6.72.38,2.18A1.34,1.34,0,0,1,.1,1.76a1.23,1.23,0,0,1,0-1A1.34,1.34,0,0,1,.38.38L.58.21A.65.65,0,0,1,.8.1L1,0a1,1,0,0,1,.24,0Z" />
                            </svg>
                            {/*]*/}
                          </div>
                        </div>
                      </Link>
                    </li>
                    {/*]*/}
                  </ul>
                  {/*]*/}
                </div>
              </div>
            </div>
          </div>
          <div
            className={cx(classes.searchTypeAheadOverlay, {
              [classes.active]: inputFocused,
            })}
            onClick={() => setInputFocused(false)}
          />
        </div>
      </div>
    </>
  );
};

export default HeaderSearch;
