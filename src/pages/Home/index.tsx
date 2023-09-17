import { EllipsisOutlined, RightOutlined } from '@ant-design/icons';
import { ProCard, StatisticCard } from '@ant-design/pro-components';
import { Divider, Space, theme } from 'antd';
import RcResizeObserver from 'rc-resize-observer';
import { useState } from 'react';

const { Statistic } = StatisticCard;

export default () => {
  const [responsive, setResponsive] = useState(false);
  const { token } = theme.useToken();
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
      <ProCard title="评审进度">
        <StatisticCard
          title="采购项目走势"
          chart={
            <img
              src="https://gw.alipayobjects.com/zos/alicdn/_dZIob2NB/zhuzhuangtu.svg"
              width="100%"
            />
          }
        />
      </ProCard>
    </RcResizeObserver>
  );
};
