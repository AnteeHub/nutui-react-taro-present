import { Component, PropsWithChildren } from "react";
import { Audio } from "@nutui/nutui-react-taro";
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
          <Audio
            url="http://downsc.chinaz.net/Files/DownLoad/sound1/201906/11582.mp3"
            type="progress"
          />
        </div>
      </div>
    );
  }
}
export default Index;
