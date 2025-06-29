import { Button } from "../components/ui/Button";
import classes from "./Error.module.css";

export default function ErrorPage() {
  return (
    <div className={classes["error-wrap"]}>
      <div className={classes["error-center"]}>
        <p className={classes["error-eyebrow"]}>404</p>
        <h1 className={classes["error-heading"]}>Page not found</h1>
        <p className={classes["error-subtitle"]}>Sorry, we couldn’t find the page you’re looking for.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button href="/">Go back home</Button>
        </div>
      </div>
    </div>
  );
}
