import Link from "next/link";
import { Button } from "./Button";

export const LinkButton = ({ href, className, ...rest }) => (
  <Link href={href}>
    <Button className={className} {...rest} />
  </Link>
);
