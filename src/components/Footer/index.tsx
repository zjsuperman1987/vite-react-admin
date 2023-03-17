/* Footer 页面底部 */
import React from "react";
import { Layout } from "antd";
import "./index.less";

const { Footer } = Layout;

interface Props {
  className?: string;
}

export default function FooterCom(props: Props) {
  return (
    <Footer className={`footer ${props.className}`}>
      <a
        href="javscript:void(0)"
        rel="noopener noreferrer"
      >
        xxxxxx
      </a>
    </Footer>
  );
}
