import { ProCard } from '@ant-design/pro-components';
import { history } from '@umijs/max';
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
          title="立项及评审"
          style={{ width: '30%', margin: '10px' }}
          boxShadow
          onClick={() => {
            history.push('/business-mgt/approval-preview');
          }}
        >
          <div>项目立项登记、评审登记</div>
        </ProCard>
        <ProCard
          title="采购"
          style={{ width: '30%', margin: '10px' }}
          boxShadow
        >
          <div>采购计划登记、采购结果登记</div>
        </ProCard>
        <ProCard
          title="合同"
          style={{ width: '30%', margin: '10px' }}
          boxShadow
        >
          <div>合同登记</div>
        </ProCard>
        <ProCard
          title="支出"
          style={{ width: '30%', margin: '10px' }}
          boxShadow
        >
          <div>支出登记</div>
        </ProCard>
        <ProCard
          title="项目验收"
          style={{ width: '30%', margin: '10px' }}
          boxShadow
        >
          <div>验收登记</div>
        </ProCard>
      </div>
    </RcResizeObserver>
  );
};
