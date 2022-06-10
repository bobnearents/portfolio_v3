import {
  GithubFilled,
  LinkedinFilled,
  MailFilled,
  MailOutlined,
} from "@ant-design/icons";
import "./Header.css";
export default function Header() {
  return (
    <div className="header">
      <h1 className="name">
        <span className="highlight">Bob</span> Nearents
      </h1>
      <div className="contact">
        <a href="https://github.com/bobnearents">
          <GithubFilled />
        </a>
        <a href="https://www.linkedin.com/in/bobnearents/">
          <LinkedinFilled />
        </a>
        <a href="mailto:bobnearents@gmail.com">
          <MailOutlined />
        </a>
      </div>
    </div>
  );
}
