import { ReactNode } from "react";
import { MotionProps } from "framer-motion";

export interface ButtonProps extends MotionProps {
  text?: string;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  className?: string;
  children?: ReactNode;
}
