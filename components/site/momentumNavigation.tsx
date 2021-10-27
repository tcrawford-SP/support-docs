import React from 'react';
import Link from 'next/link';
import { Box } from '@sparkpost/matchbox';

export interface MomentumNavigationItemProps {
  title: string;
  link: string;
  items?: this[];
}

export type MomentumNavigationProps = {
  data?: MomentumNavigationItemProps[];
};

const MomentumNavigation = (props: MomentumNavigationProps): JSX.Element | null => {
  if (!props.data) {
    return null;
  }

  return (
    <Box p="500" borderRight="400">
      {props.data.map((item, i) => (
        <Item key={i} {...item} />
      ))}
    </Box>
  );
};

const Item = (props: MomentumNavigationItemProps): JSX.Element => {
  const { link, title, items } = props;
  return (
    <Box fontSize="200" lineHeight="200">
      <Link href={link}>
        <a>
          <Box as="span">{title}</Box>
        </a>
      </Link>
      <Box pl="200">{items && items.map((item, i) => <Item key={i} {...item} />)}</Box>
    </Box>
  );
};

export default MomentumNavigation;