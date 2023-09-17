import { PageContainer } from '@ant-design/pro-components';
import { Transfer } from 'antd';
import type { TransferDirection } from 'antd/es/transfer';
import React, { useState } from 'react';

interface RecordType {
  key: string;
  title: string;
}

const mockData: RecordType[] = [
  {
    key: '1',
    title: `事前请示`,
  },
  {
    key: '2',
    title: `采购管理`,
  },
  {
    key: '3',
    title: `合同管理`,
  },
];

const TableList: React.FC<unknown> = () => {
  const [targetKeys, setTargetKeys] = useState<any>([]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const onChange = (
    nextTargetKeys: string[],
    direction: TransferDirection,
    moveKeys: string[],
  ) => {
    console.log('targetKeys:', nextTargetKeys);
    console.log('direction:', direction);
    console.log('moveKeys:', moveKeys);
    setTargetKeys(nextTargetKeys);
  };

  const onSelectChange = (
    sourceSelectedKeys: string[],
    targetSelectedKeys: string[],
  ) => {
    console.log('sourceSelectedKeys:', sourceSelectedKeys);
    console.log('targetSelectedKeys:', targetSelectedKeys);
    setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
  };

  const onScroll = (
    direction: TransferDirection,
    e: React.SyntheticEvent<HTMLUListElement>,
  ) => {
    console.log('direction:', direction);
    console.log('target:', e.target);
  };

  return (
    <PageContainer
      header={{
        title: '项目定义',
      }}
    >
      <Transfer
        dataSource={mockData}
        titles={['', 'Target']}
        targetKeys={targetKeys}
        selectedKeys={selectedKeys}
        onChange={onChange}
        onSelectChange={onSelectChange}
        onScroll={onScroll}
        render={(item) => item.title}
      />
    </PageContainer>
  );
};

export default TableList;
