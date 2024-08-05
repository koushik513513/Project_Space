import PropTypes from "prop-types"
import React, { useEffect, useRef , useCallback} from "react"

// //Import Scrollbar
import SimpleBar from "simplebar-react"

// MetisMenu
import MetisMenu from "metismenujs"
import { withRouter } from "react-router-dom"
import { Link } from "react-router-dom"

//i18n
import { withTranslation } from "react-i18next"

const SidebarContent = props => {
  const ref = useRef()
  const activateParentDropdown = useCallback((item) => {
    item.classList.add("active")
    const parent = item.parentElement
    const parent2El = parent.childNodes[1]
    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show")
    }
    if (parent) {
      parent.classList.add("mm-active")
      const parent2 = parent.parentElement
      if (parent2) {
        parent2.classList.add("mm-show") // ul tag
        const parent3 = parent2.parentElement // li tag
        if (parent3) {
          parent3.classList.add("mm-active") // li
          parent3.childNodes[0].classList.add("mm-active") //a
          const parent4 = parent3.parentElement // ul
          if (parent4) {
            parent4.classList.add("mm-show") // ul
            const parent5 = parent4.parentElement
            if (parent5) {
              parent5.classList.add("mm-show") // li
              parent5.childNodes[0].classList.add("mm-active") // a tag
            }
          }
        }
      }
      scrollElement(item);
      return false
    }
    scrollElement(item);
    return false
  }, []);
  // Use ComponentDidMount and ComponentDidUpdate method symultaniously
  useEffect(() => {
    const pathName = props.location.pathname
    const initMenu = () => {
      new MetisMenu("#side-menu")
      let matchingMenuItem = null
      const ul = document.getElementById("side-menu")
      const items = ul.getElementsByTagName("a")
      for (let i = 0; i < items.length; ++i) {
        if (pathName === items[i].pathname) {
          matchingMenuItem = items[i]
          break
        }
      }
      if (matchingMenuItem) {
        activateParentDropdown(matchingMenuItem)
      }
    }
    initMenu()
  }, [props.location.pathname, activateParentDropdown])
  useEffect(() => {
    ref.current.recalculate()
  }, []);
  const scrollElement = (item) => {
    if (item) {
      const currentPosition = item.offsetTop
      if (currentPosition > window.innerHeight) {
        ref.current.getScrollElement().scrollTop = currentPosition - 300
      }
    }
  }

  

  return (
    <React.Fragment>
      <SimpleBar ref={ref} className="vertical-simplebar">
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title">{props.t("Menu")} </li>
            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="mdi mdi-airplay"></i>
                <span>{props.t("Floor Managment")}</span>
                
              </Link>
              <ul className="sub-menu">
                {/* <li><Link to="/Ground Floor">{props.t("Ground Floor")} </Link></li> */}
                <li><Link to="/floor2">{props.t("Floor 2")} </Link></li>
                <li><Link to="/Floor3">{props.t("Floor 3")} </Link></li>
                <li><Link to="/Floor4">{props.t("Floor 4")} </Link></li>
                <li><Link to="/Floor5">{props.t("Floor 5")} </Link></li>
                {/* <li><Link to="/Floor 5">{props.t("Floor 5")} </Link></li> */}
              </ul>
            </li>

            <li>
              <Link to="/email-inbox" >
                <i className="mdi mdi-inbox-full"></i>
                <span>{props.t("Inbox")}</span>
              </Link>
              {/* <ul className="sub-menu">
                <li>
                  <Link to="/email-inbox">{props.t("Inbox")}</Link>
                </li>
                
              </ul> */}
            </li>

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="mdi mdi-calendar-check"></i>
                <span>{props.t("Complaints")}</span>
              </Link>
              <ul className="sub-menu">
                <li><Link to="/tasks-list">{props.t("New Complaints")}</Link></li>
                <li><Link to="/tasks-kanban">{props.t("Pending Complaints")}</Link></li>
                <li><Link to="/tasks-create">{props.t("Completed Complaints")}</Link></li>
              </ul>
            </li>
            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="mdi mdi-account-circle-outline"></i>
                <span>{props.t("Profile")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/pages-login">{props.t("Login")}</Link>
                </li>
                <li>
                  <Link to="/pages-Register">{props.t("Register")}</Link>
                </li>
                {/* <li>
                  <Link to="/page-recoverpw">
                    {props.t("Recover Password")}
                  </Link>
                </li> */}
                <li>
                  <Link to="/profile">{props.t("Profile")}</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/feedback1" className="waves-effect">
                <i className="mdi mdi-newspaper"></i>
                {/* <span className="badge rounded-pill bg-danger float-end">1</span> */}
                <span>{props.t("Feedback")}</span>
              </Link>
              {/* <ul className="sub-menu">
                <li>
                  <Link to="/form-wizard">{props.t("Form Wizard")}</Link>
                </li>
              </ul> */}
            </li>

           
          </ul>
        </div>
      </SimpleBar>
    </React.Fragment>
  )
}

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
}

export default withRouter(withTranslation()(SidebarContent))