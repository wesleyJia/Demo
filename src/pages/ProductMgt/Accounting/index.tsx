import CreateForm from '@/components/CreateForm';
import UpdateForm from '@/components/UpdateForm';
import services from '@/services/demo';
import {
  ActionType,
  FooterToolbar,
  ModalForm,
  PageContainer,
  ProDescriptionsItemProps,
  ProTable,
} from '@ant-design/pro-components';
import { history } from '@umijs/max';
import { Button, Divider, Table, Tag, message } from 'antd';
import React, { useRef, useState } from 'react';

const { addUser, deleteUser, modifyUser } = services.UserController;

/**
 * 添加节点
 * @param fields
 */
const handleAdd = async (fields: API.UserInfo) => {
  const hide = message.loading('正在添加');
  try {
    await addUser({ ...fields });
    hide();
    message.success('添加成功');
    return true;
  } catch (error) {
    hide();
    message.error('添加失败请重试！');
    return false;
  }
};

/**
 * 更新节点
 * @param fields
 */
const handleUpdate = async (fields: any) => {
  const hide = message.loading('正在配置');
  try {
    await modifyUser(
      {
        userId: fields.id || '',
      },
      {
        name: fields.name || '',
        nickName: fields.nickName || '',
        email: fields.email || '',
      },
    );
    hide();

    message.success('配置成功');
    return true;
  } catch (error) {
    hide();
    message.error('配置失败请重试！');
    return false;
  }
};

/**
 *  删除节点
 * @param selectedRows
 */
const handleRemove = async (selectedRows: API.UserInfo[]) => {
  const hide = message.loading('正在删除');
  if (!selectedRows) return true;
  try {
    await deleteUser({
      userId: selectedRows.find((row) => row.id)?.id || '',
    });
    hide();
    message.success('删除成功，即将刷新');
    return true;
  } catch (error) {
    hide();
    message.error('删除失败，请重试');
    return false;
  }
};

const TableList: React.FC<unknown> = () => {
  const [createModalVisible, handleModalVisible] = useState<boolean>(false);
  const [updateModalVisible, handleUpdateModalVisible] =
    useState<boolean>(false);
  const [stepFormValues, setStepFormValues] = useState({});
  const actionRef = useRef<ActionType>();

  const [selectedRowsState, setSelectedRows] = useState<any>([]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const data1 = [
    {
      index: '1111',
      key1: '部门1',
      key2: '项目编号1',
      key3: '2023-01-01',
      key4: '部门项目1',
      key5: '运行类',
      key6: '基建',
      key7: '10000',
      key8: '1年',
      key9: '否',
      key10: '-',
    },
    {
      index: '2222',
      key1: '部门2',
      key2: '项目编号2',
      key3: '2023-01-01',
      key4: '部门项目2',
      key5: '运行类',
      key6: '基建',
      key7: '10000',
      key8: '1年',
      key9: '否',
      key10: '-',
    },
  ];

  const [selectedData, setSelectedData] = useState([]);
  const onFinish = () => {
    const selectedData: any = [];
    selectedRowKeys.forEach((it: any) => {
      const a = data1.find((item) => item.index === it);
      selectedData.push(a);
    });
    setSelectedData(selectedData);
  };

  const columns: ProDescriptionsItemProps[] = [
    {
      title: '立项时间',
      dataIndex: 'key1',
      formItemProps: {
        rules: [
          {
            required: true,
            message: '立项时间为必填项',
          },
        ],
      },
    },
    {
      title: '项目编号',
      dataIndex: 'key2',
      formItemProps: {
        rules: [
          {
            required: true,
            message: '项目编号为必填项',
          },
        ],
      },
    },
    {
      title: '项目名称',
      dataIndex: 'key3',
      formItemProps: {
        rules: [
          {
            required: true,
            message: '项目名称为必填项',
          },
        ],
      },
    },
    // TODO,弹窗部门项目列表，选择之后回填到输入框中
    {
      title: '项目归类',
      dataIndex: 'key4',
      valueType: 'select',
      fieldProps: {
        capture: true,
      },
      renderFormItem: () => {
        return (
          <>
            {selectedData.map((item: any) => {
              return <Tag key={item.index}>{item.key2}</Tag>;
            })}
            <ModalForm
              trigger={<Button type="primary">选择</Button>}
              title="新建表单1"
              onFinish={async () => {
                onFinish();
                return true;
              }}
            >
              <Table
                rowSelection={rowSelection}
                rowKey={'index'}
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
                ]}
                dataSource={data1}
              />
            </ModalForm>
          </>
        );
      },
    },
    {
      title: '项目类型',
      dataIndex: 'key5',
      valueEnum: {
        0: { text: '运行类', status: '1' },
        1: { text: '特定目标类', status: '2' },
      },
      formItemProps: {
        rules: [
          {
            required: true,
            message: '项目类型为必填项',
          },
        ],
      },
    },
    {
      title: '项目分类',
      dataIndex: 'key6',
      valueEnum: {
        0: { text: '信息化', status: '1' },
        1: { text: '基建', status: '2' },
        2: { text: '其他', status: '3' },
      },
      formItemProps: {
        rules: [
          {
            required: true,
            message: '项目分类为必填项',
          },
        ],
      },
    },
    {
      title: '项目期限',
      dataIndex: 'key7',
      formItemProps: {
        rules: [],
      },
    },
    {
      title: '项目总额',
      dataIndex: 'key8',
      formItemProps: {
        rules: [],
      },
    },
    {
      title: '支出计划',
      dataIndex: 'key9',
      formItemProps: {
        rules: [],
      },
      renderFormItem: () => {
        return (
          <ModalForm
            trigger={<Button type="primary">新增</Button>}
            title="新建表单"
          >
            <Button type="primary">添加</Button>
            <Table
              columns={[
                { title: '年度', key: 'test1', dataIndex: 'test1' },
                { title: '金额', key: 'test2', dataIndex: 'test2' },
              ]}
              dataSource={[
                { test1: '2023', test2: '100w' },
                { test1: '2024', test2: '200w' },
              ]}
            />
          </ModalForm>
        );
      },
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (record: any) => (
        <>
          <a
            onClick={() => {
              handleUpdateModalVisible(true);
              setStepFormValues(record);
            }}
          >
            项目调整
          </a>
          <Divider type="vertical" />
          <a href="">项目结项</a>
          <Divider type="vertical" />
          <a
            onClick={() => {
              history.push('/product-mgt/detail/1234');
            }}
          >
            项目配置
          </a>
        </>
      ),
    },
  ];

  return (
    <PageContainer
      header={{
        title: '财政项目库管理',
      }}
    >
      <ProTable
        headerTitle="查询表格"
        actionRef={actionRef}
        rowKey="id"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button
            key="1"
            type="primary"
            onClick={() => handleModalVisible(true)}
          >
            项目新增
          </Button>,
        ]}
        dataSource={[
          {
            key1: '2023-01-01',
            key2: '10001',
            key3: '项目1',
            key4: '归类1',
            key5: '1',
            key6: '1',
            key7: '1年',
            key8: '100w',
            key9: '无',
          },
          {
            key1: '2023-01-01',
            key2: '10001',
            key3: '项目2',
            key4: '归类2',
            key5: '1',
            key6: '1',
            key7: '1年',
            key8: '100w',
            key9: '无',
          },
        ]}
        columns={columns as any}
        rowSelection={{
          onChange: (_, selectedRows) => setSelectedRows(selectedRows),
        }}
      />
      {selectedRowsState?.length > 0 && (
        <FooterToolbar
          extra={
            <div>
              已选择{' '}
              <a style={{ fontWeight: 600 }}>{selectedRowsState.length}</a>{' '}
              项&nbsp;&nbsp;
            </div>
          }
        >
          <Button
            onClick={async () => {
              await handleRemove(selectedRowsState);
              setSelectedRows([]);
              actionRef.current?.reloadAndRest?.();
            }}
          >
            批量删除
          </Button>
          <Button type="primary">批量审批</Button>
        </FooterToolbar>
      )}
      <CreateForm
        onCancel={() => handleModalVisible(false)}
        modalVisible={createModalVisible}
      >
        <ProTable<API.UserInfo, API.UserInfo>
          onSubmit={async (value) => {
            const success = await handleAdd(value);
            if (success) {
              handleModalVisible(false);
              if (actionRef.current) {
                actionRef.current.reload();
              }
            }
          }}
          rowKey="id"
          type="form"
          columns={columns as any}
        />
      </CreateForm>
      {stepFormValues && Object.keys(stepFormValues).length ? (
        <UpdateForm
          onSubmit={async (value) => {
            const success = await handleUpdate(value);
            if (success) {
              handleUpdateModalVisible(false);
              setStepFormValues({});
              if (actionRef.current) {
                actionRef.current.reload();
              }
            }
          }}
          onCancel={() => {
            handleUpdateModalVisible(false);
            setStepFormValues({});
          }}
          updateModalVisible={updateModalVisible}
          values={stepFormValues}
        />
      ) : null}
    </PageContainer>
  );
};

export default TableList;
