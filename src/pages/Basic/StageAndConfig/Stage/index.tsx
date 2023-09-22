import CreateForm from '@/components/CreateForm';
import UpdateForm from '@/components/UpdateForm';
import services from '@/services/demo';
import {
  ActionType,
  FooterToolbar,
  PageContainer,
  ProDescriptionsItemProps,
  ProTable,
} from '@ant-design/pro-components';
import { history } from '@umijs/max';
import { Button, Divider, message } from 'antd';
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
  const columns: ProDescriptionsItemProps[] = [
    {
      title: '编号',
      dataIndex: 'key1',
    },
    {
      title: '分类',
      dataIndex: 'key2',
      valueEnum: {
        0: { text: '事情请示', status: '1' },
        1: { text: '采购管理', status: '2' },
        2: { text: '合同管理', status: '3' },
      },
      formItemProps: {
        rules: [
          {
            required: true,
            message: '分类为必填项',
          },
        ],
      },
    },
    {
      title: '名称',
      dataIndex: 'key3',
      formItemProps: {
        rules: [
          {
            required: true,
            message: '名称为必填项',
          },
        ],
      },
    },
    {
      title: '创建时间',
      dataIndex: 'key4',
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
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: () => (
        <>
          <a
            onClick={() => {
              history.push('/basic/mgt/stage/111');
            }}
          >
            修改
          </a>
          <Divider type="vertical" />
          <a href="">删除</a>
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
            新增阶段定义
          </Button>,
        ]}
        dataSource={[
          {
            key1: '10001',
            key2: '0',
            key3: 'xx请示',
            key4: '2023-01-01',
          },
          {
            key1: '10002',
            key2: '1',
            key3: 'xx采购',
            key4: '2023-01-01',
          },
          {
            key1: '10003',
            key2: '2',
            key3: 'xx合同',
            key4: '2023-01-01',
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
