import { ProCard } from '@ant-design/pro-components';
import RcResizeObserver from 'rc-resize-observer';
import { useState } from 'react';

export default () => {
  const [, setResponsive] = useState(false);
  return (
    <RcResizeObserver
      key="resize-observer"
      onResize={(offset) => {
        setResponsive(offset.width < 596);
      }}
    >
      <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
        <ProCard
          title="组织机构"
          style={{ width: '30%', margin: '10px' }}
          boxShadow
          onClick={() => {}}
        >
          <div>组织机构</div>
        </ProCard>
        <ProCard
          title="人员"
          style={{ width: '30%', margin: '10px' }}
          boxShadow
        >
          <div>人员</div>
        </ProCard>
        <ProCard
          title="角色"
          style={{ width: '30%', margin: '10px' }}
          boxShadow
        >
          <div>角色</div>
        </ProCard>
      </div>
    </RcResizeObserver>
  );
};
