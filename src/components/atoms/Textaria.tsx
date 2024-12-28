import { cn } from '@/lib/utils';
import React from 'react';

const Textarea = ({
  className,
  rows,
  cols,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  className?: string;
  rows?:number;
  cols?:number;
}) => {
  return (
    <textarea
    rows={rows}
    cols={cols}
      className={cn(
        "border rounded-md shadow-sm outline-none p-2  focus:text-black",
        className
      )}
      {...props}
    />
  );
};

export default Textarea;
