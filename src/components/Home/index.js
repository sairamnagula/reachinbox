import { Component } from "react";
import { CiHome, CiMail } from "react-icons/ci";

import { IoChevronDown } from "react-icons/io5";
import { IoMdRefresh } from "react-icons/io";
import { MdOutlinePersonSearch } from "react-icons/md";
import { FaTelegramPlane, FaBars, FaInbox } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";

import "./index.css";
import AllInboxes from "../AllInboxes";
import EmailItemDetails from "../EmailItemDetails";
import LeadDetails from "../LeadDetails";

class Home extends Component {
  state = {
    isActiveInboxes: false,
    isInboxArray: [],
  };

  componentDidMount() {
    this.renderApiData();
  }

  renderApiData = async () => {
    const options = {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoibmFndWxhc2FpcmFtMzg0QGdtYWlsLmNvbSIsImlkIjoxMTQ5LCJmaXJzdE5hbWUiOiJOYWd1bGEiLCJsYXN0TmFtZSI6IlNhaSBSYW0ifSwiaWF0IjoxNzI0NTEzNzQxLCJleHAiOjE3NTYwNDk3NDF9.dsKmSqo-NviHZLEeSxsXMJ3PNk0DRu_lb79t1r4m_gw",
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(
      "https://hiring.reachinbox.xyz/api/v1/onebox/list",
      options
    );
    // console.log(response);
    const responseData = await response.json();
    const { data } = responseData;
    console.log(data);
    this.setState({
      isInboxArray: data,
    });
  };

  mailsButtonTrigger = () => {
    this.setState({ isActiveInboxes: true });
  };

  renderAllInboxes = () => {
    const { isInboxArray } = this.state;
    return (
      <div>
        <div className="inbox-title-row">
          <div>
            <h1>
              All Inbox(s)
              <IoChevronDown />
            </h1>
            <p>
              25/25 <span>Inboxes Selected</span>
            </p>
          </div>
          <button>
            <IoMdRefresh />
          </button>
        </div>
        <input type="search" />
        <div>
          <h1>26 New Replies</h1>
          <h1>Newest</h1>
        </div>
        <ul>
          {isInboxArray.map((eachItem) => (
            <AllInboxes eachItem={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    );
  };

  renderMiddleContent = () => (
    <EmailItemDetails isInboxArray={this.state.isInboxArray} />
  );

  renderLastContent = () => <LeadDetails />;

  render() {
    const { isActiveInboxes } = this.state;
    return (
      <div className="total-container">
        <div className="left-container">
          <button>M</button>
          <div className="middle-card">
            <button className="left-button">
              <CiHome />
            </button>
            <button className="left-button">
              <MdOutlinePersonSearch />
            </button>
            <button className="left-button">
              <CiMail />
            </button>
            <button className="left-button">
              <FaTelegramPlane />
            </button>
            <button className="left-button">
              <FaBars />
            </button>
            <button className="left-button" onClick={this.mailsButtonTrigger}>
              <FaInbox />
            </button>
            <button className="left-button">
              <GiNetworkBars />
            </button>
          </div>
          <button className="left-end-button">AS</button>
        </div>
        <div className="right-container">
          <div className="top-container">
            <h1>One Box</h1>
            <div>
              <p>Tims Workspace</p>
            </div>
          </div>
          {isActiveInboxes ? (
            ""
          ) : (
            <div className="initial-page">
              <h1>Its a beginning of a legendary pipeline</h1>
              <p>
                When we have a inbound emails
                <br />
                you'll see them here
              </p>
            </div>
          )}
          <div className="display-flex">
            <div className="content-inbox-container">
              {isActiveInboxes && this.renderAllInboxes()}
            </div>
            <div className="content-middle-container">
              {isActiveInboxes && (
                <>
                  <h1>Middle Content</h1>
                  {this.renderMiddleContent()}
                </>
              )}
            </div>
            <div className="content-last-container">
              {isActiveInboxes && this.renderLastContent()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
