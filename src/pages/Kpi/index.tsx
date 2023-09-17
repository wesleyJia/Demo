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
      title: '指标名称',
      dataIndex: 'key1',
    },
    {
      title: '部门名称',
      dataIndex: 'key2',
    },
    {
      title: '项目总额',
      dataIndex: 'key3',
    },
    {
      title: '预计年度',
      dataIndex: 'key4',
    },
    {
      title: '年度预算金额',
      dataIndex: 'key5',
    },
    {
      title: '所属财政项目',
      dataIndex: 'key6',
    },
    {
      title: '主要功能',
      dataIndex: 'option',
      valueType: 'option',
      render: () => (
        <>
          <a onClick={() => {}}>生成</a>
          <Divider type="vertical" />
          <a href="">修改</a>
          <Divider type="vertical" />
          <a href="">发布</a>
          <Divider type="vertical" />
          <a href="">调成</a>
          <Divider type="vertical" />
          <a href="">录入</a>
          <Divider type="vertical" />
          <a href="">过入</a>
        </>
      ),
    },
  ];

  return (
    <PageContainer
      header={{
        title: '立项及评审',
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
            新增
          </Button>,
        ]}
        dataSource={[
          {
            key1: '项目1（2023）',
            key2: '部门1',
            key3: '100,000,000.00',
            key4: '2024',
            key5: '100,000,000.00',
            key6: '财政项目',
          },
          {
            key1: '项目2（2023）',
            key2: '部门2',
            key3: '100,000,000.00',
            key4: '2024',
            key5: '100,000,000.00',
            key6: '财政项目',
          },
          {
            key1: '项目3（2023）',
            key2: '部门3',
            key3: '100,000,000.00',
            key4: '2024',
            key5: '100,000,000.00',
            key6: '财政项目',
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
