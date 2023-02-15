import { Component, PropsWithChildren } from "react";
import { Button, Dialog } from "@nutui/nutui-react-taro";
import "./index.scss";

class Index extends Component<PropsWithChildren> {
  constructor(props: any) {
    super(props);

    this.state = {
      visible: false,
    };
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
          <Dialog
            title="使用组件弹窗"
            content="这里是不起作用的"
            visible={this.state.visible}
            onOk={() => {
              this.setState({ visible: false });
            }}
            onCancel={() => {
              this.setState({ visible: false });
            }}
          >
            组件调用对话框，用 `content` 属性是不起作用的
          </Dialog>
          <Button
            onClick={() => {
              Dialog.alert({
                title: "使用 Dialog.alert 弹窗",
                content: "内容",
              });
            }}
          >
            使用 Dialog.alert 弹窗
          </Button>
          <Button
            onClick={() => {
              this.setState({
                visible: !this.state.visible,
              });
            }}
          >
            使用组件弹窗
          </Button>
        </div>
      </div>
    );
  }
}
export default Index;
