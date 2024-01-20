import { PropsWithChildren } from 'react';
import classes from './BorderButton.module.scss';

const BorderButton = (props: PropsWithChildren) => {
  return (
    <button className={classes['button']} type='button' title='Border Button'>
      {props.children}
    </button>
  );
};

export default BorderButton;
