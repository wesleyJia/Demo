import { PageContainer } from '@ant-design/pro-components';
import { history } from '@umijs/max';
import { Button, Table, Tabs } from 'antd';

export default () => {
  const items = [
    {
      key: '1',
      label: '财政项目',
      children: (
        <Table
          columns={[
            {
              title: '立项时间',
              dataIndex: 'key1',
            },
            {
              title: '项目编号',
              dataIndex: 'key2',
            },
            {
              title: '项目名称',
              dataIndex: 'key3',
            },
            {
              title: '项目归类',
              dataIndex: 'key4',
            },
            {
              title: '项目类型',
              dataIndex: 'key5',
            },
            {
              title: '项目分类',
              dataIndex: 'key6',
            },
            {
              title: '项目期限',
              dataIndex: 'key7',
            },
            {
              title: '项目总额',
              dataIndex: 'key8',
            },
            {
              title: '支出计划',
              dataIndex: 'key9',
            },
            {
              title: '操作',
              dataIndex: 'option',
              render: () => (
                <>
                  <a
                    onClick={() => {
                      history.push('/files');
                    }}
                  >
                    详情
                  </a>
                </>
              ),
            },
          ]}
          dataSource={[
            {
              key1: '2023-01-01',
              key2: '10001',
              key3: '项目1',
              key4: '归类1',
              key5: '运行类',
              key6: '信息化',
              key7: '1年',
              key8: '100w',
              key9: '无',
            },
            {
              key1: '2023-01-01',
              key2: '10001',
              key3: '项目2',
              key4: '归类2',
              key5: '特定目标类',
              key6: '基建',
              key7: '1年',
              key8: '100w',
              key9: '无',
            },
          ]}
        />
      ),
    },
    {
      key: '2',
      label: '部门项目',
      children: (
        <Table
          dataSource={[
            {
              key1: '部门1',
              key2: '项目编号1',
              key3: '2023-01-01',
              key4: '部门项目1',
              key5: '运行类',
              key6: '特定目标类',
              key7: '10000',
              key8: '1年',
              key9: '否',
              key10: '-',
            },
            {
              key1: '部门2',
              key2: '项目编号2',
              key3: '2023-01-01',
              key4: '部门项目2',
              key5: '信息化',
              key6: '基建',
              key7: '10000',
              key8: '1年',
              key9: '否',
              key10: '-',
            },
          ]}
          columns={[
            {
              title: '部门名称',
              dataIndex: 'key1',
            },
            {
              title: '项目编号',
              dataIndex: 'key2',
            },
            {
              title: '立项时间',
              dataIndex: 'key3',
            },
            {
              title: '项目名称',
              dataIndex: 'key4',
            },
            {
              title: '项目类型',
              dataIndex: 'key5',
            },
            {
              title: '项目分类',
              dataIndex: 'key6',
            },
            {
              title: '项目总投资',
              dataIndex: 'key7',
            },
            {
              title: '项目期限',
              dataIndex: 'key8',
            },
            {
              title: '是否验收',
              dataIndex: 'key9',
            },
            {
              title: '支出计划',
              dataIndex: 'key10',
            },
            {
              title: '操作',
              dataIndex: 'option',
              render: () => (
                <>
                  <Button
                    type="link"
                    onClick={() => {
                      history.push('/files');
                    }}
                  >
                    详情
                  </Button>
                </>
              ),
            },
          ]}
        />
      ),
    },
  ];
  return (
    <PageContainer
      header={{
        title: '财政项目库管理',
      }}
    >
      <Tabs defaultActiveKey="1" items={items} />
    </PageContainer>
  );
};
