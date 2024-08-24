import React from 'react';
import Root from './Root';
import Text from './Text';
import ActionRow from './ActionRow';
import SelectField from './Select';
import Number from './Number';
import TextArea from './TextArea';
import FormSwitchField from './Switch';


const Form = ({ children }: { children: React.ReactNode }) => (
  <div>{children}</div>
);

Form.Root = Root;
Form.Text = Text;
Form.ActionRow = ActionRow
Form.Select = SelectField
Form.Number = Number
Form.TextArea = TextArea
Form.Switch = FormSwitchField

export default Form;
