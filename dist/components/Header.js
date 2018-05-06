import * as React from 'react';
import Link from 'next/link';
export default ({ pathname }) => React.createElement("header", null,
    React.createElement("p", null,
        React.createElement("img", { src: "/static/logo.png" })),
    React.createElement(Link, { href: "/" },
        React.createElement("a", { className: pathname === '/' && 'is-active' || '' }, "Home")),
    ' ',
    React.createElement(Link, { href: "/about" },
        React.createElement("a", { className: pathname === '/about' && 'is-active' || '' }, "About")));
//# sourceMappingURL=Header.js.map