var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as React from 'react';
import App from '../components/App';
export default class About extends React.Component {
    static getInitialProps({ query }) {
        return __awaiter(this, void 0, void 0, function* () {
            const content = yield new Promise(res => setTimeout(res, 1000));
            return {
                message: '!!'
            };
        });
    }
    render() {
        return (React.createElement(App, null,
            React.createElement("p", null,
                "About Page $",
                this.props.message)));
    }
}
//# sourceMappingURL=about.js.map