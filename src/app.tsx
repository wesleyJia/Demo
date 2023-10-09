import {
  BellOutlined,
  CustomerServiceOutlined,
  PoweroffOutlined,
} from '@ant-design/icons';
import { RunTimeLayoutConfig, history } from '@umijs/max';
import './index.css';

export const layout: RunTimeLayoutConfig = () => {
  return {
    // 常用属性
    title: '项目管理信息系统',
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    layout: 'mix',
    rightRender: () => {
      return (
        <>
          <div>欢迎您，单位管理员 预算单位：xxx</div>
          <div style={{ paddingLeft: 10, paddingRight: 10 }}>
            <BellOutlined />
          </div>
          <div style={{ paddingLeft: 10, paddingRight: 10 }}>
            <CustomerServiceOutlined />
          </div>
          <div
            style={{ paddingLeft: 10, paddingRight: 10 }}
            onClick={() => {
              history.push('/login');
            }}
          >
            <PoweroffOutlined />
            注销
          </div>
        </>
      );
    },
    childrenRender: (children) => (
      <div
        style={{
          paddingTop: 64,
        }}
      >
        <div className="children-content"></div>
        {children}
      </div>
    ),

    // 其他属性见：https://procomponents.ant.design/components/layout#prolayout
  };
};
