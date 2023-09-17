import {
  ProCard,
  ProFormGroup,
  ProFormSwitch,
} from '@ant-design/pro-components';

const Page = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'row wrap',
      }}
    >
      <ProCard
        title="仅内部项目"
        bordered
        style={{
          flex: '1',
          height: 200,
          margin: '0 10px',
        }}
        extra={
          <ProFormGroup>
            <ProFormSwitch
              name="Enable"
              noStyle
              checkedChildren={'启用'}
              unCheckedChildren={'禁用'}
            />
          </ProFormGroup>
        }
        tooltip="业务部门使用时只需内部项目即可"
      >
        <div>业务部门使用时只需内部项目即可</div>
      </ProCard>

      <ProCard
        title="增配财政项目"
        bordered
        style={{
          flex: '1',
          height: 200,
          margin: '0 10px',
        }}
        extra={
          <ProFormGroup>
            <ProFormSwitch
              name="Enable"
              noStyle
              checkedChildren={'启用'}
              unCheckedChildren={'禁用'}
            />
          </ProFormGroup>
        }
        tooltip="财务部门使用时，可根据需要增配财政项目及指标管理"
      >
        <div>财务部门使用时，可根据需要增配财政项目及指标管理</div>
      </ProCard>

      <ProCard
        title="增配指标管理"
        bordered
        style={{
          flex: '1',
          height: 200,
          margin: '0 10px',
        }}
        extra={
          <ProFormGroup>
            <ProFormSwitch
              name="Enable"
              noStyle
              checkedChildren={'启用'}
              unCheckedChildren={'禁用'}
            />
          </ProFormGroup>
        }
        tooltip="财务部门使用时，可根据需要增配财政项目及指标管理"
      >
        <div>财务部门使用时，可根据需要增配财政项目及指标管理</div>
      </ProCard>
    </div>
  );
};
export default Page;
