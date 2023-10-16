/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { Button, Divider, message } from 'antd';
import React, { useRef, useState } from 'react';

const { addUser, queryUserList, deleteUser, modifyUser } =
  services.UserController;

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
  const [stepFormValues, setStepFormValues] = useState<any>({});
  const actionRef = useRef<ActionType>();
  const [selectedRowsState, setSelectedRows] = useState<any>([]);
  const columns: ProDescriptionsItemProps[] = [
    {
      title: 'ID',
      dataIndex: 'key1',
    },
    {
      title: '对应系统名称',
      dataIndex: 'key2',
      formItemProps: {
        rules: [
          {
            required: true,
            message: '对应系统名称为必填项',
          },
        ],
      },
    },
    {
      title: '接口名称',
      dataIndex: 'key3',
      formItemProps: {
        rules: [
          {
            required: true,
            message: '接口名称为必填项',
          },
        ],
      },
    },
    {
      title: '接口地址',
      dataIndex: 'key4',
      formItemProps: {
        rules: [
          {
            required: true,
            message: '接口地址为必填项',
          },
        ],
      },
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (record) => (
        <>
          <a onClick={() => {}}>删除</a>
          <Divider type="vertical" />
          <a href="">修改</a>
          <Divider type="vertical" />
          <a onClick={() => {}}>查看</a>
        </>
      ),
    },
  ];

  return (
    <PageContainer
      header={{
        title: '部门项目库管理',
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
            key1: '1',
            key2: '预算系统',
            key3: '预算批复',
            key4: 'http://192.168.3.178/getBudget',
          },
          {
            key1: '2',
            key2: '内控系统',
            key3: '内部批复',
            key4: 'http://192.168.3.178/getInternalAssignment',
          },
          {
            key1: '3',
            key2: '财务核算系统',
            key3: '项目执行',
            key4: 'http://192.168.3.178/getExecute',
          },
        ]}
        request={async (params, sorter, filter) => {
          const { data, success } = await queryUserList({
            ...params,
            // FIXME: remove @ts-ignore
            // @ts-ignore
            sorter,
            filter,
          });
          return {
            data: [],
            success,
          };
        }}
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
