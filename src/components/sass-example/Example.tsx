import "./Example.scss";

export default function Example() {
  return (
    <div>
      <p>Example</p>
      <p className="font">Example</p>
      <nav>
        <ul>
          <li>123</li>
          <li>
            <a>456</a>
          </li>
        </ul>
      </nav>
      <p className="base">Hello</p>
      <p className="inverse">Hello</p>
      <p className="info">Hello</p>
      <p className="alert">Hello</p>
      <p className="success">Hello</p>
      <p className="message">message</p>
      <p className="success2">success2</p>
      <p className="error">error</p>
      <p className="warning">Hello</p>
      <div className="square-av" />
      <div className="circle-av" />
      <div className="sidebar"></div>
      <div className="gray">Gray</div>
      <div className="button">Button</div>
    </div>
  );
}
