import style from './layout.module.scss';

interface ContainerProps extends React.PropsWithChildren {}

export const Container = ({children, ...props}: ContainerProps) => {
  return <div className={style.container} {...props}>{children}</div>
} 