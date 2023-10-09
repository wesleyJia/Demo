import { history } from '@umijs/max';
import { Button, Card, Form, Input } from 'antd';

const Login = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
    history.push('/home');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
  };

  return (
    <div
      style={{
        paddingTop: 64,
      }}
    >
      <div className="children-content"></div>
      <div
        style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          top: 0,
          right: 0,
          width: '100%',
          height: '100%',
          border: '1px solid',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 12,
        }}
      >
        <Card
          title="项目管理信息系统"
          style={{ width: 460, backgroundColor: '#fff !important' }}
        >
          <Form
            name="basic"
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            initialValues={{
              username: 'adimn',
              password: 'admin',
            }}
          >
            <Form.Item<FieldType>
              label="用户名"
              name="username"
              rules={[{ required: true, message: '请输入用户名!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item<FieldType>
              label="密码"
              name="password"
              rules={[{ required: true, message: '请输入密码!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Login
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
};
export default Login;
