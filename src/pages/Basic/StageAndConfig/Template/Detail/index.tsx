import {
  PageContainer,
  ProCard,
  ProForm,
  ProFormCascader,
  ProFormList,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components';

const Page = () => {
  const formItem = () => {
    return (
      <>
        <ProForm.Item isListField style={{ marginBlockEnd: 0 }} label="名称">
          <ProFormText style={{ padding: 0 }} width="md" name="name" />
        </ProForm.Item>
        <ProForm.Item
          isListField
          style={{ marginBlockEnd: 0 }}
          label="数据类型"
        >
          <ProFormSelect
            style={{ padding: 0 }}
            options={[
              {
                value: 'date',
                label: '日期',
              },
              {
                value: 'input',
                label: '输入框',
              },
              {
                value: 'select',
                label: '下拉框',
              },
            ]}
            width="md"
            name="type"
          />
        </ProForm.Item>
      </>
    );
  };

  const renderSelect = () => {
    return (
      <ProForm.Item isListField style={{ marginBlockEnd: 0 }} label="值">
        <ProFormList
          name="items"
          creatorButtonProps={{
            creatorButtonText: '新建',
            icon: false,
            type: 'link',
            style: { width: 'unset' },
          }}
          min={1}
          copyIconProps={false}
          deleteIconProps={{ tooltipText: '删除' }}
          itemRender={({ listDom, action }) => (
            <div
              style={{
                display: 'inline-flex',
                marginInlineEnd: 25,
              }}
            >
              {listDom}
              {action}
            </div>
          )}
        >
          <ProFormText allowClear={false} width="xs" name={['name']} />
        </ProFormList>
      </ProForm.Item>
    );
  };
  return (
    <PageContainer
      header={{
        title: '新增事前定义模版',
      }}
    >
      <ProForm
        layout="horizontal"
        onFinish={async (values) => {
          console.log(values);
          return true;
        }}
      >
        <ProFormText
          style={{ padding: 0 }}
          width="md"
          name="name"
          label="模版名称"
        />
        {/* TODO 需要有层级之分 */}
        <ProFormCascader
          style={{ padding: 0 }}
          width="md"
          name="defined"
          label="阶段定义"
          fieldProps={{
            options: [
              {
                value: '1',
                label: '事前请示',
                children: [
                  {
                    value: '1-1',
                    label: 'xx请示',
                  },
                ],
              },
              {
                value: '2',
                label: '采购管理',
                children: [
                  {
                    value: '2-2',
                    label: 'xx采购',
                  },
                ],
              },
              {
                value: '3',
                label: '合同管理',
                children: [
                  {
                    value: '3-3',
                    label: 'xx合同',
                  },
                ],
              },
            ],
          }}
        />
        <ProFormList
          name="attributes"
          label="填写项"
          creatorButtonProps={{
            creatorButtonText: '添加规格项',
          }}
          min={1}
          copyIconProps={false}
          itemRender={({ listDom, action }, listMeta) => {
            console.log('listDome', listMeta);
            return (
              <ProCard
                bordered
                style={{ marginBlockEnd: 8 }}
                title={listMeta.record.name}
                extra={action}
                bodyStyle={{ paddingBlockEnd: 0 }}
              >
                {/* {listDom} */}
                {formItem()}
                {listMeta.record.type === 'select' && renderSelect()}
              </ProCard>
            );
          }}
          creatorRecord={{ name: '' }}
          initialValue={[
            { name: '申请日期', type: 'date' },
            { name: '项目名称', type: 'input' },
            { name: '总投资', type: 'input' },
            {
              name: '申请部门',
              type: 'select',
              items: [{ name: '部门1' }, { name: '部门2' }],
            },
            { name: '申请金额', type: 'input' },
            { name: '申请标题', type: 'input' },
          ]}
        >
          <ProForm.Item isListField style={{ marginBlockEnd: 0 }} label="名称">
            <ProFormText style={{ padding: 0 }} width="md" name="name" />
          </ProForm.Item>
          <ProForm.Item
            isListField
            style={{ marginBlockEnd: 0 }}
            label="数据类型"
          >
            <ProFormSelect
              style={{ padding: 0 }}
              options={[
                {
                  value: 'date',
                  label: '日期',
                },
                {
                  value: 'input',
                  label: '输入框',
                },
                {
                  value: 'select',
                  label: '下拉框',
                },
              ]}
              width="md"
              name="type"
            />
          </ProForm.Item>

          {/* <ProForm.Item isListField style={{ marginBlockEnd: 0 }} label="值">
            <ProFormList
              name="items"
              creatorButtonProps={{
                creatorButtonText: '新建',
                icon: false,
                type: 'link',
                style: { width: 'unset' },
              }}
              min={1}
              copyIconProps={false}
              deleteIconProps={{ tooltipText: '删除' }}
              itemRender={({ listDom, action }) => (
                <div
                  style={{
                    display: 'inline-flex',
                    marginInlineEnd: 25,
                  }}
                >
                  {listDom}
                  {action}
                </div>
              )}
            >
              <ProFormText allowClear={false} width="xs" name={['name']} />
            </ProFormList>
          </ProForm.Item> */}
        </ProFormList>
      </ProForm>
    </PageContainer>
  );
};
export default Page;
