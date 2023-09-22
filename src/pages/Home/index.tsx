import { EllipsisOutlined, RightOutlined } from '@ant-design/icons';
import { ProCard, StatisticCard } from '@ant-design/pro-components';
import { Divider, List, Space, theme } from 'antd';
import RcResizeObserver from 'rc-resize-observer';
import { useState } from 'react';

const { Statistic } = StatisticCard;

export default () => {
  const [responsive, setResponsive] = useState(false);
  const { token } = theme.useToken();

  const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];

  return (
    <RcResizeObserver
      key="resize-observer"
      onResize={(offset) => {
        setResponsive(offset.width < 596);
      }}
    >
      <ProCard
        title="评审进度"
        extra="2019年9月28日 星期五"
        split={responsive ? 'horizontal' : 'vertical'}
        headerBordered
        bordered
      >
        <ProCard split="horizontal">
          <ProCard split="horizontal">
            <ProCard split="vertical">
              <StatisticCard
                statistic={{
                  title: '待评审',
                  value: 234,
                  description: (
                    <Statistic
                      title="较本月平均流量"
                      value="8.04%"
                      trend="down"
                    />
                  ),
                }}
              />
              <StatisticCard
                statistic={{
                  title: '进行中',
                  value: 234,
                  description: (
                    <Statistic title="月同比" value="8.04%" trend="up" />
                  ),
                }}
              />
            </ProCard>
            <ProCard split="vertical">
              <StatisticCard
                statistic={{
                  title: '已结束',
                  value: '12/56',
                  suffix: '个',
                }}
              />
            </ProCard>
          </ProCard>
        </ProCard>
      </ProCard>
      <br />
      <ProCard title="采购项目" split="vertical">
        <ProCard split="horizontal">
          <RcResizeObserver
            key="resize-observer"
            onResize={(offset) => {
              setResponsive(offset.width < 596);
            }}
          >
            <StatisticCard.Group direction={responsive ? 'column' : 'row'}>
              <StatisticCard
                statistic={{
                  title: '总采购项目',
                  value: 601986875,
                }}
              />
              <Divider type={responsive ? 'horizontal' : 'vertical'} />
              <StatisticCard
                statistic={{
                  title: '新增',
                  value: 3701928,
                  description: <Statistic title="占比" value="61.5%" />,
                }}
                chart={
                  <img
                    src="https://gw.alipayobjects.com/zos/alicdn/ShNDpDTik/huan.svg"
                    alt="百分比"
                    width="100%"
                  />
                }
                chartPlacement="left"
              />

              <StatisticCard
                statistic={{
                  title: '进行中',
                  value: 1806062,
                  description: <Statistic title="占比" value="38.5%" />,
                }}
                chart={
                  <img
                    src="https://gw.alipayobjects.com/zos/alicdn/6YR18tCxJ/huanlv.svg"
                    alt="百分比"
                    width="100%"
                  />
                }
                chartPlacement="left"
              />
            </StatisticCard.Group>
          </RcResizeObserver>
        </ProCard>
        <ProCard split="horizontal">
          <StatisticCard
            title={
              <Space>
                <span>采购项目1</span>
                <RightOutlined style={{ color: token.colorTextHeading }} />
              </Space>
            }
            extra={<EllipsisOutlined />}
            statistic={{
              value: 1102893,
              prefix: '¥',
              description: (
                <Space>
                  <Statistic title="实际完成度" value="82.3%" />
                  <Statistic title="当前目标" value="¥6000" />
                </Space>
              ),
            }}
            chart={
              <>
                <img
                  src="https://gw.alipayobjects.com/zos/alicdn/BA_R9SIAV/charts.svg"
                  alt="chart"
                  width="100%"
                />
              </>
            }
            style={{ width: 268 }}
          />
        </ProCard>
      </ProCard>
      <br />
      <ProCard
        title="档案速查"
        extra="2019年9月28日 星期五"
        split={responsive ? 'horizontal' : 'vertical'}
        headerBordered
        bordered
        style={{
          marginBottom: 20,
        }}
      >
        <StatisticCard
          title="项目一"
          chart={
            <img
              src="https://gw.alipayobjects.com/zos/alicdn/qoYmFMxWY/jieping2021-03-29%252520xiawu4.32.34.png"
              alt="大盘"
              width="100%"
            />
          }
        />
        <StatisticCard
          title="项目二"
          chart={
            <img
              src="https://gw.alipayobjects.com/zos/alicdn/qoYmFMxWY/jieping2021-03-29%252520xiawu4.32.34.png"
              alt="大盘"
              width="100%"
            />
          }
        />
        <StatisticCard
          title="项目三"
          chart={
            <img
              src="https://gw.alipayobjects.com/zos/alicdn/qoYmFMxWY/jieping2021-03-29%252520xiawu4.32.34.png"
              alt="大盘"
              width="100%"
            />
          }
        />
      </ProCard>
      <br />
      <ProCard
        title="工作提醒"
        extra="2019年9月28日 星期五"
        split={responsive ? 'horizontal' : 'vertical'}
        headerBordered
        style={{
          marginBottom: 20,
        }}
      >
        <StatisticCard.Group direction={responsive ? 'column' : 'row'}>
          <StatisticCard
            statistic={{
              title: '采购计划',
              value: 3701928,
              description: <Statistic title="进度" value="61.5%" />,
            }}
            chart={
              <img
                src="https://gw.alipayobjects.com/zos/alicdn/ShNDpDTik/huan.svg"
                alt="百分比"
                width="100%"
              />
            }
            chartPlacement="left"
          />
          <StatisticCard
            statistic={{
              title: '未完成资料',
              value: 1806062,
              description: <Statistic title="进度" value="38.5%" />,
            }}
            chart={
              <img
                src="https://gw.alipayobjects.com/zos/alicdn/6YR18tCxJ/huanlv.svg"
                alt="百分比"
                width="100%"
              />
            }
            chartPlacement="left"
          />
        </StatisticCard.Group>
      </ProCard>
      <ProCard headerBordered bordered title="工作进度" split="vertical">
        <StatisticCard
          title={
            <Space>
              <span>项目总体支出进度</span>
              <RightOutlined style={{ color: token.colorTextHeading }} />
            </Space>
          }
          extra={<EllipsisOutlined />}
          statistic={{
            value: 1102893,
            prefix: '¥',
            description: (
              <Space>
                <Statistic title="实际完成度" value="82.3%" />
                <Statistic title="当前目标" value="¥6000" />
              </Space>
            ),
          }}
          chart={
            <>
              <img
                src="https://gw.alipayobjects.com/zos/alicdn/BA_R9SIAV/charts.svg"
                alt="chart"
                width="100%"
              />
            </>
          }
          style={{ width: 268 }}
        />
        <StatisticCard
          title={
            <Space>
              <span>年度指标支出进度</span>
              <RightOutlined style={{ color: token.colorTextHeading }} />
            </Space>
          }
          extra={<EllipsisOutlined />}
          statistic={{
            value: 1102893,
            prefix: '¥',
            description: (
              <Space>
                <Statistic title="实际完成度" value="82.3%" />
                <Statistic title="当前目标" value="¥6000" />
              </Space>
            ),
          }}
          chart={
            <>
              <img
                src="https://gw.alipayobjects.com/zos/alicdn/BA_R9SIAV/charts.svg"
                alt="chart"
                width="100%"
              />
            </>
          }
          style={{ width: 268 }}
        />
      </ProCard>
      <ProCard headerBordered bordered title="工作进度" split="vertical">
        <List
          size="large"
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={data}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </ProCard>
    </RcResizeObserver>
  );
};
