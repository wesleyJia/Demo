import { RunTimeLayoutConfig } from '@umijs/max';
import './index.css';

export const layout: RunTimeLayoutConfig = () => {
  return {
    // 常用属性
    title: 'Produce',
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',

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
