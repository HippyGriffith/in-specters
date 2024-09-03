'use client';

import React from 'react';

/*
function App() {
  var __html = require('./index.html');
  var template = { __html: __html };
  return (
    <div dangerouslySetInnerHTML={template} />
  );
}
  */

class App extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>Eventually by HTML5 UP</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        </head>
        <body className="is-preload">
      
            <header id="header">
              <h1>Eventually</h1>
              <p>A simple template for telling the world when you'll launch<br />
              your next big thing. Brought to you by <a href="http://html5up.net">HTML5 UP</a>.</p>
            </header>
      
            <form id="signup-form" method="post" action="#">
              <input type="email" name="email" id="email" placeholder="Email Address" />
              <input type="submit" value="Sign Up" />
            </form>
      
            <footer id="footer">
              <ul className="icons">
                <li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
                <li><a href="#" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
                <li><a href="#" className="icon fa-envelope"><span className="label">Email</span></a></li>
              </ul>
              <ul className="copyright">
                <li>&copy; Untitled.</li><li>Credits: <a href="http://html5up.net">HTML5 UP</a></li>
              </ul>
            </footer>
        </body>
      </html>
     );
  }
}
;

export default App;