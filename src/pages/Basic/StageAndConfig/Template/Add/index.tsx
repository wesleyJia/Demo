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
                value: '0',
                label: '项目评审',
                children: [
                  {
                    value: '0-1',
                    label: 'xx项目评审',
                  },
                ],
              },
              {
                value: '1',
                label: '事前请示',
                children: [
                  {
                    value: '1-1',
                    label: 'xx事前请示',
                  },
                ],
              },
              {
                value: '2',
                label: '采购管理',
                children: [
                  {
                    value: '2-1',
                    label: 'xx采购申请',
                  },
                  {
                    value: '2-2',
                    label: 'xx采购执行',
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
          itemRender={({ listDom, action }, { index }) => (
            <ProCard
              bordered
              style={{ marginBlockEnd: 8 }}
              title={`填写项${index + 1}`}
              extra={action}
              bodyStyle={{ paddingBlockEnd: 0 }}
            >
              {listDom}
            </ProCard>
          )}
          creatorRecord={{ name: '', items: [{ name: '' }] }}
          initialValue={[
            { name: '申请日期', items: [{ name: '红' }, { name: '黄' }] },
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
              options={[]}
              width="md"
              name="type"
            />
          </ProForm.Item>

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
        </ProFormList>
      </ProForm>
    </PageContainer>
  );
};
export default Page;
