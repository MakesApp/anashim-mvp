import React, { FC } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { AccordionTriggerProps } from '@radix-ui/react-accordion';
import { AccordionProps } from './Accordian.types';
import classNames from 'classnames';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import './styles.css';

interface AccordionTriggerExtendedProps extends AccordionTriggerProps {
  className?: string;
  children: React.ReactNode;
}

const AccordionContainer: FC<AccordionProps> = ({
  title,
  openItem,
  handleAccordionChange,
  children,
}) => {
  return (
    <Accordion.Root
      className="AccordionRoot"
      type="single"
      value={openItem}
      onValueChange={handleAccordionChange}
      collapsible
    >
      <Accordion.Item className="AccordionItem" value={title}>
        <AccordionTrigger>{title}</AccordionTrigger>

        <AccordionContent>{children}</AccordionContent>
      </Accordion.Item>
    </Accordion.Root>
  );
};

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionTriggerExtendedProps
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header className="AccordionHeader">
    <Accordion.Trigger
      className={classNames('AccordionTrigger', className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <ChevronDownIcon className="AccordionChevron" aria-hidden />
    </Accordion.Trigger>
  </Accordion.Header>
));

interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
}

const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={classNames('AccordionContent', className)}
      {...props}
      ref={forwardedRef}
    >
      <div className="AccordionContentText">
        <hr />
        <div className="AccordionContentTextInner">{children}</div>
      </div>
    </Accordion.Content>
  ),
);

export default AccordionContainer;
