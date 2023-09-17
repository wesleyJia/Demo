import { EllipsisOutlined, RightOutlined } from '@ant-design/icons';
import { ProCard, StatisticCard } from '@ant-design/pro-components';
import { Space, theme } from 'antd';
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
      <div
        style={{
          display: 'flex',
          flexFlow: 'column',
        }}
      >
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
        <ProCard
          title="工作动态"
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
      </div>
    </RcResizeObserver>
  );
};
