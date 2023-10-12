import { PageContainer } from '@ant-design/pro-components';
import { Table, Tabs, TabsProps } from 'antd';
import React from 'react';

const TableList: React.FC<unknown> = () => {
  const columns: any = [
    {
      title: '部门名称',
      dataIndex: 'key1',
      rowScope: 'row',
      onCell: (_: any, index: any) => {
        if (index === 0 || index === 3) {
          return { rowSpan: 2 };
        }
        if (index === 1 || index === 4) {
          return { rowSpan: 0 };
        }
        return {};
      },
    },
    {
      title: '项目名称',
      dataIndex: 'key2',
      onCell: (_: any, index: any) => {
        if (index === 0 || index === 3) {
          return { rowSpan: 2 };
        }
        if (index === 1 || index === 4) {
          return { rowSpan: 0 };
        }
        return {};
      },
    },
    {
      title: '拟采购项目',
      dataIndex: 'key3',
    },
    {
      title: '拟采购金额（万元）',
      dataIndex: 'key4',
    },
    {
      title: '拟采购方式',
      dataIndex: 'key5',
    },
    {
      title: '计划开始时间',
      dataIndex: 'key6',
    },
    {
      title: '计划结束时间',
      dataIndex: 'key7',
    },
  ];

  const columns1: any = [
    {
      title: '部门名称',
      dataIndex: 'key1',
      rowScope: 'row',
      onCell: (_: any, index: any) => {
        if (index === 0) {
          return { rowSpan: 2 };
        }
        if (index === 1) {
          return { rowSpan: 0 };
        }
        return {};
      },
    },
    {
      title: '项目名称',
      dataIndex: 'key2',
      onCell: (_: any, index: any) => {
        if (index === 0) {
          return { rowSpan: 2 };
        }
        if (index === 1) {
          return { rowSpan: 0 };
        }
        return {};
      },
    },
    {
      title: '采购项目名称',
      dataIndex: 'key3',
    },
    {
      title: '采购金额（万元）',
      dataIndex: 'key4',
    },
    {
      title: '采购方式',
      dataIndex: 'key5',
    },
    {
      title: '中标单位名称',
      dataIndex: 'key6',
    },
    {
      title: '公告日期',
      dataIndex: 'key7',
    },
    {
      title: '中标金额（万元）',
      dataIndex: 'key8',
    },
  ];

  const data = [
    {
      key1: '计划财务处',
      key2: '内控审计项目',
      key3: '审计服务采购',
      key4: '5',
      key5: '内部评议',
      key6: '2023年4月10日',
      key7: '2023年4月25日',
    },
    {
      key1: '计划财务处',
      key2: '内控审计项目',
      key3: '内控服务采购',
      key4: '15',
      key5: '内部评议',
      key6: '2023年6月5日',
      key7: '2023年6月20日',
    },
    {
      key1: '政策研究处',
      key2: '政策研究管理系统研发',
      key3: '政研系统项目采购',
      key4: '80',
      key5: '公开招标',
      key6: '2023年5月10日',
      key7: '2023年7月5日',
    },
    {
      key1: '信息中心',
      key2: 'OA办公系统项目',
      key3: 'OA办公系统采购',
      key4: '65',
      key5: '公开招标',
      key6: '2023年4月5日',
      key7: '2023年6月25日',
    },
    {
      key1: '信息中心',
      key2: 'OA办公系统项目',
      key3: '第三方数据库采购',
      key4: '55',
      key5: '公开招标',
      key6: '2023年4月5日',
      key7: '2023年6月25日',
    },
  ];

  const data1 = [
    {
      key1: '计划财务处',
      key2: '内控审计项目',
      key3: '审计服务采购',
      key4: '5',
      key5: '内部评议',
      key6: '海思会计师事务所',
      key7: '2023年8月5日',
      key8: '4.8万元',
    },
    {
      key1: '计划财务处',
      key2: '内控审计项目',
      key3: '内控服务采购',
      key4: '15',
      key5: '内部评议',
      key6: '信德咨询公司',
      key7: '2023年6月10日',
      key8: '14.4万元',
    },
  ];

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: '采购计划',
      children: <Table columns={columns} dataSource={data} />,
    },
    {
      key: '2',
      label: '采购登记',
      children: <Table columns={columns1} dataSource={data1} />,
    },
  ];

  return (
    <PageContainer
      header={{
        title: '采购计划及登记',
      }}
    >
      <Tabs defaultActiveKey="1" items={items} />
    </PageContainer>
  );
};

export default TableList;
