import React from "react";
import { ButtonProps } from "./Button.types";
import { motion } from "framer-motion";

export default function Button(props: ButtonProps) {
  const { text, disabled, size, children, className, ...rest } = props;

  return (
    <motion.button
      className={
        "text-text-primary outline-4 outline-text-primary px-4 py-2 rounded-3xl outline"
      }
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.04 }}
      whileTap={{ scale: disabled ? 1 : 0.96 }}
      {...rest}
    >
      {text || children}
    </motion.button>
  );
}
