import { Component, PropsWithChildren } from "react";
import { Input } from "@nutui/nutui-react-taro";
import "./index.scss";

class Index extends Component<PropsWithChildren<any>> {
  constructor(props: any) {
    super(props);

    this.state = {
      bankcount: "",
      tel: "",
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
        <div className="index" style={{ width: "100vw" }}>
          <Input
            name="number"
            label="银行卡"
            placeholder="银行卡"
            defaultValue={this.state.bankcount}
            inputAlign="right"
            type="digit"
            maxlength={18}
          />{" "}
          <Input
            name="tel"
            labelWidth="120"
            label="银行卡预留手机号"
            placeholder=""
            defaultValue={this.state.tel}
            inputAlign="right"
            type="tel"
            border={false}
          />
        </div>
      </div>
    );
  }
}
export default Index;
