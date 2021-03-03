import React, { FC } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Container, ContainerMonth, ContainerActions, ContainerSwitch } from './style';
import Button from 'antd/lib/button';
import { HeaderProps } from '../models';
import { Switch } from 'antd';
import format from 'date-fns/format';
import LocaleES from 'date-fns/locale/es';

const monthFormat = 'MMMM yyyy';

const Header: FC<HeaderProps> = (props) => {
  const { currentMonth, previous, next, today, switchFestives } = props;

  return (
    <Container>
      <ContainerActions>
        <Button onClick={() => previous()} icon={<LeftOutlined />} size={'large'}></Button>
        <Button onClick={() => next()} icon={<RightOutlined />} size={'large'}></Button>
        <Button className="today" onClick={() => today()} size={'large'}>
          Hoy
        </Button>
      </ContainerActions>

      <ContainerMonth>{format(currentMonth, monthFormat, { locale: LocaleES })}</ContainerMonth>

      <ContainerSwitch>
        <Switch onChange={switchFestives} checkedChildren="Festivos" unCheckedChildren="Festivos" defaultChecked />
      </ContainerSwitch>
    </Container>
  );
};

export default Header;
