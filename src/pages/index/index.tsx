import { Component, PropsWithChildren } from "react";
import { Textarea as RawTextarea } from "@tarojs/components";
import { Button, Cell, TextArea } from "@nutui/nutui-react-taro";
import "./index.scss";

class Index extends Component<PropsWithChildren> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <div className="nutui-react-demo">
        <div className="index">欢迎使用 NutUI React 开发 Taro 多端项目。</div>
        <div className="index">
          <TextArea placeholder="nut-ui 带占位符的 textarea" disabled />
          <TextArea defaultValue="nut-ui 带默认内容的 textarea" disabled />
          <RawTextarea placeholder="taro 原生的 textarea" disabled />
        </div>
      </div>
    );
  }
}
export default Index;
