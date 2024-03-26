import classes from '../../../public/css/loading-spinner.module.css';

export function LoadingSpinner(): JSX.Element {
  return (
    <div className={classes.loading}></div>
  );
}
